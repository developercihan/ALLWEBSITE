import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface CaseModalProps {
  selectedStory: any;
  onClose: () => void;
}

export default function CaseModal({ selectedStory, onClose }: CaseModalProps) {
  return (
    <AnimatePresence>
      {selectedStory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-[#111] overflow-hidden rounded-3xl shadow-2xl flex flex-col md:flex-row h-[80vh] md:h-auto max-h-[800px]"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-gold hover:text-black transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <img src={selectedStory.img} alt={selectedStory.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111] hidden md:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent md:hidden"></div>
            </div>
            
            <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col overflow-y-auto">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-4">{selectedStory.category}</span>
              <h3 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">{selectedStory.title}</h3>
              
              <div className="h-[1px] w-20 bg-white/10 mb-8"></div>
              
              <h4 className="text-lg text-white mb-4">Vaka Özeti</h4>
              <p className="text-white/60 font-light leading-relaxed mb-8">
                {selectedStory.longDesc || selectedStory.desc}
              </p>
              
              <h4 className="text-lg text-white mb-4">Sonuç</h4>
              <p className="text-white/60 font-light leading-relaxed mb-8">
                Müvekkilimizin talepleri doğrultusunda, hukuki argümanlarımızın titizlikle sunulduğu bu süreç başarıyla tamamlanmış ve {selectedStory.category.toLowerCase()} alanında emsal teşkil edecek bir zafer kazanılmıştır.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
