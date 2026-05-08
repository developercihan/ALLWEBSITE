import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 md:py-40 relative z-10">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-5/12 w-full"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gold"></div>
              <span className="text-[12px] uppercase tracking-[0.4em] text-gold font-medium">Bize Ulaşın</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-8">
              Hukuki Sürecinizi <br/><span className="text-gold italic">Birlikte Yönetelim</span>
            </h2>
            <p className="text-white/40 font-light leading-relaxed mb-12 max-w-md">
              Sorunlarınıza profesyonel ve stratejik çözümler üretmek için buradayız. Detaylı bilgi ve danışmanlık talep etmek için iletişim formunu doldurabilirsiniz.
            </p>

            <div className="space-y-8">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium mb-2">Ofis Merkezi</span>
                <p className="text-white/80 font-light text-sm leading-relaxed">Levent, Büyükdere Cd. No:195<br/>34394 Şişli / İstanbul</p>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium mb-2">Telefon</span>
                <p className="text-white/80 font-light text-sm leading-relaxed">+90 (212) 555 01 23</p>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium mb-2">E-Posta</span>
                <p className="text-white/80 font-light text-sm leading-relaxed">info@arslanglobal.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-7/12 w-full"
          >
            <form className="bg-black/40 border border-white/5 p-8 md:p-12 rounded-sm backdrop-blur-xl relative shadow-2xl overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/[0.02] before:to-transparent before:pointer-events-none">
              {/* Subtle top glow line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative group">
                  <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2 font-medium transition-colors group-focus-within:text-gold">Ad & Soyad</label>
                  <input type="text" id="name" className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 text-white/90 focus:outline-none focus:border-gold/50 focus:bg-white/[0.05] transition-all text-sm font-light placeholder-white/20" placeholder="Adınız Soyadınız" />
                </div>
                <div className="relative group">
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2 font-medium transition-colors group-focus-within:text-gold">E-Posta</label>
                  <input type="email" id="email" className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 text-white/90 focus:outline-none focus:border-gold/50 focus:bg-white/[0.05] transition-all text-sm font-light placeholder-white/20" placeholder="ornek@email.com" />
                </div>
              </div>

              <div className="relative group mb-6">
                <label htmlFor="subject" className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2 font-medium transition-colors group-focus-within:text-gold">Konu</label>
                <input type="text" id="subject" className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 text-white/90 focus:outline-none focus:border-gold/50 focus:bg-white/[0.05] transition-all text-sm font-light placeholder-white/20" placeholder="Danışmanlık Talebi" />
              </div>

              <div className="relative group mb-8">
                <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2 font-medium transition-colors group-focus-within:text-gold">Mesajınız</label>
                <textarea id="message" rows={4} className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 text-white/90 focus:outline-none focus:border-gold/50 focus:bg-white/[0.05] transition-all text-sm font-light placeholder-white/20 resize-none" placeholder="Size nasıl yardımcı olabiliriz?"></textarea>
              </div>

              <button type="button" className="group w-full md:w-auto bg-gold text-deep-black px-10 py-4 flex items-center justify-center gap-3 hover:bg-white transition-colors duration-300">
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">Gönder</span>
                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
