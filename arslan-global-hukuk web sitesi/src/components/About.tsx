import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="hakkimizda" className="py-24 md:py-40 bg-deep-black relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-center">
          
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden group shadow-2xl"
            >
              <img 
                src="/kemal-arslan.png" 
                className="w-full h-full object-cover grayscale brightness-90 transition-transform duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                alt="Kemal Arslan - Kurucu Ortak"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-60" />
            </motion.div>
            
            {/* Accent Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              viewport={{ once: true }}
              className="absolute -right-8 -bottom-8 glass p-10 rounded-[2rem] max-w-xs shadow-[0_40px_80px_rgba(198,161,110,0.1)] border-gold/20"
            >
              <p className="text-serif italic text-gold text-2xl mb-4 leading-tight">
                "Hukuk sadece kurallar bütünü değil, bir sanat ve strateji disiplinidir."
              </p>
              <div className="text-[10px] tracking-widest uppercase text-stone-400 font-bold">
                Kemal Arslan • Kurucu Ortak
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-xs tracking-[0.5em] uppercase text-gold font-bold mb-6 block">Hakkımızda</span>
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-10 leading-tight">
                Köklü Bir <span className="text-gold italic">Vizyon</span>, Stratejik Bir Gelecek.
              </h2>
              
              <div className="space-y-8 text-stone-400 font-light leading-relaxed text-lg">
                <p>
                  Arslan Global Hukuk & Danışmanlık, kurulduğu günden itibaren yerel ve uluslararası müvekkillerine en yüksek standartlarda hukuki destek sağlamaktadır. Geleneksel hukuk anlayışını modern iş dünyasının dinamikleriyle harmanlayan büromuz, her davayı kendi içinde bir stratejik süreç olarak ele alır.
                </p>
                <p>
                  Bizim için her müvekkil, her protokol ve her uyuşmazlık kendine özgü bir derinliğe sahiptir. Bu derinliği analiz ederek, riskleri önceden öngören proaktif yaklaşımlar geliştiriyoruz. Butik hizmet anlayışımızla, müvekkillerimize sadece avukatlık değil, uzun vadeli bir stratejik güven ortaklığı sunuyoruz.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-16">
                <div>
                  <div className="text-white font-serif text-3xl mb-2 tracking-tight">Etik Değerler</div>
                  <p className="text-sm text-stone-500 font-light leading-relaxed">Şeffaflık ve dürüstlük, tüm hukuki süreçlerimizin temel taşıdır.</p>
                </div>
                <div>
                  <div className="text-white font-serif text-3xl mb-2 tracking-tight">Küresel Güç</div>
                  <p className="text-sm text-stone-500 font-light leading-relaxed">Uluslararası çözüm ortaklarımızla dünyanın her yerinde yanınızdayız.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-serif font-black text-white/2 pointer-events-none select-none tracking-tighter -z-0">
        ARSLAN
      </div>
    </section>
  );
}
