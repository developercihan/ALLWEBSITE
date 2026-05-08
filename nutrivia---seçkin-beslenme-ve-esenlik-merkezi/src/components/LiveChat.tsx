import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, User, Loader2 } from 'lucide-react';
import { auth, db } from '../lib/firebase';
import { 
  signInAnonymously, 
  onAuthStateChanged, 
  User as FirebaseUser 
} from 'firebase/auth';
import { 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  onSnapshot, 
  serverTimestamp,
  doc,
  setDoc,
  updateDoc,
  Timestamp
} from 'firebase/firestore';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  const errorJson = JSON.stringify(errInfo);
  console.error('Firestore Error: ', errorJson);
  throw new Error(errorJson);
}

interface Message {
  id: string;
  text: string;
  senderId: string;
  createdAt: Timestamp;
}

export const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatId, setChatId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (chatId) {
      const path = `chats/${chatId}/messages`;
      const q = query(
        collection(db, path),
        orderBy('createdAt', 'asc')
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const msgs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Message[];
        setMessages(msgs);
      }, (error) => {
        handleFirestoreError(error, OperationType.LIST, path);
      });
      return () => unsubscribe();
    }
  }, [chatId]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleOpen = async () => {
    setIsOpen(true);
    if (!user) {
      setIsLoading(true);
      try {
        const cred = await signInAnonymously(auth);
        setUser(cred.user);
      } catch (err) {
        console.error("Auth error:", err);
      }
      setIsLoading(false);
    }
  };

  const startChat = async (userId: string) => {
    const path = 'chats';
    try {
      const chatRef = doc(collection(db, path));
      const newChatId = chatRef.id;
      await setDoc(chatRef, {
        userId,
        status: 'active',
        updatedAt: serverTimestamp(),
        lastMessage: ''
      });
      setChatId(newChatId);
      return newChatId;
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
      throw error; // unreachable due to handleFirestoreError throw
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !user) return;

    const currentMsg = message;
    setMessage('');

    try {
      let activeChatId = chatId;
      if (!activeChatId) {
        activeChatId = await startChat(user.uid);
      }

      const msgPath = `chats/${activeChatId}/messages`;
      try {
        await addDoc(collection(db, msgPath), {
          text: currentMsg,
          senderId: user.uid,
          chatId: activeChatId,
          createdAt: serverTimestamp()
        });
      } catch (error) {
        handleFirestoreError(error, OperationType.WRITE, msgPath);
      }

      const chatPath = `chats/${activeChatId}`;
      try {
        await updateDoc(doc(db, 'chats', activeChatId), {
          lastMessage: currentMsg,
          updatedAt: serverTimestamp()
        });
      } catch (error) {
        handleFirestoreError(error, OperationType.UPDATE, chatPath);
      }
    } catch (err) {
      console.error("Send error:", err);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[90vw] sm:w-[380px] h-[500px] bg-brand-green/95 backdrop-blur-2xl border border-brand-gold/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-brand-gold/10 flex items-center justify-between bg-brand-gold/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center border border-brand-gold/30">
                  <User className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-white font-serif italic text-lg leading-none">Canlı Destek</h3>
                  <span className="text-[10px] text-brand-gold uppercase tracking-widest mt-1 inline-block">Çevrimiçi</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-brand-gold/10 rounded-full transition-colors text-brand-gold"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth"
            >
              {isLoading ? (
                <div className="h-full flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-brand-gold animate-spin" />
                </div>
              ) : messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50 space-y-3">
                  <MessageCircle className="w-12 h-12 text-brand-gold/30" />
                  <p className="text-sm text-brand-gold px-12 italic">
                    Merhaba! Size nasıl yardımcı olabiliriz? Sorunuzu aşağıdan iletebilirsiniz.
                  </p>
                </div>
              ) : (
                messages.map((msg) => (
                  <div 
                    key={msg.id}
                    className={`flex ${msg.senderId === user?.uid ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                        msg.senderId === user?.uid 
                          ? 'bg-brand-gold text-brand-green font-medium' 
                          : 'bg-brand-gold/10 text-white border border-brand-gold/10'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Input */}
            <form 
              onSubmit={sendMessage}
              className="p-6 border-t border-brand-gold/10 bg-brand-gold/5"
            >
              <div className="relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Mesajınızı yazın..."
                  className="w-full bg-brand-green/50 border border-brand-gold/20 rounded-full px-6 py-3 text-sm text-white placeholder:text-brand-gold/40 focus:outline-none focus:border-brand-gold transition-all"
                />
                <button 
                  type="submit"
                  disabled={!message.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-gold rounded-full text-brand-green hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 40px rgba(200, 169, 107, 0.4)"
        }}
        whileTap={{ scale: 0.9 }}
        onClick={handleOpen}
        className="w-16 h-16 bg-brand-gold rounded-full shadow-[0_12px_40px_rgba(200,169,107,0.3)] flex items-center justify-center text-brand-green group relative overflow-hidden transition-shadow duration-500"
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
        
        {/* Animated ring */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 border-2 border-brand-gold rounded-full pointer-events-none"
        />

        {isOpen ? <X className="w-7 h-7 relative z-10" /> : <MessageCircle className="w-7 h-7 relative z-10" />}
      </motion.button>
    </div>
  );
};
