import { motion } from 'motion/react';
import { PROGRAMS, ICONS } from '../constants';
import { PremiumButton } from '../components/PremiumButton';
import { Link } from 'react-router-dom';

export default function Programs() {
  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <span className="text-brand-gold text-[10px] font-bold tracking-[0.6em] uppercase mb-8 block">Yol Haritası</span>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-10 leading-[1.1]">
            Kişiye Özel <br />
            <em className="italic text-brand-gold">Beslenme Tasarımı</em>
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Hedeflerinize ulaşmanız için tasarlanmış, bilimsel veriler ve modern tıp yaklaşımlarıyla hazırlanan seçkin danışmanlık paketleri.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-20">
          {PROGRAMS.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
                {/* Left Side: Editorial Content */}
                <div className="lg:w-2/3 space-y-10 py-4">
                  <div className="flex items-start gap-8">
                    <span className="text-brand-gold/20 text-7xl font-serif leading-none i-flex mt-2">0{i + 1}</span>
                    <div className="space-y-6">
                      <h2 className="text-4xl md:text-6xl font-serif text-white group-hover:text-brand-gold transition-colors duration-700">
                        {program.title}
                      </h2>
                      <div className="w-24 h-[1px] bg-brand-gold/30" />
                    </div>
                  </div>
                  
                  <p className="text-white/60 text-xl lg:text-2xl font-light leading-relaxed max-w-2xl pl-[100px]">
                    {program.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 pl-[100px]">
                    {program.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-4 group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40 group-hover/item:scale-150 group-hover/item:bg-brand-gold transition-all duration-300" />
                        <span className="text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase group-hover/item:text-white transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Right Side: Action Card */}
                <div className="lg:w-1/3">
                  <div className="h-full bg-white/[0.03] border border-white/10 rounded-[3rem] p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between transition-transform duration-700 group-hover:-translate-y-2">
                    {/* Background Shine */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="relative z-10 space-y-12">
                      <div className="space-y-2">
                        <span className="text-brand-gold/40 text-[9px] font-bold tracking-[0.4em] uppercase block">Seçkin Katılım</span>
                        <h3 className="text-white text-3xl font-serif">Detaylı Bilgi İçin</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="text-5xl font-serif text-white flex items-baseline gap-2">
                          İletişim
                          <span className="text-sm font-sans tracking-widest text-brand-gold/60 uppercase">Kurun</span>
                        </div>
                        <p className="text-white/30 text-xs tracking-widest leading-loose uppercase">
                          Sürece ve ihtiyaca göre <br /> özel fiyatlandırma yapılır.
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10 pt-12">
                      <Link to="/#randevu">
                        <PremiumButton className="w-full py-6 text-[10px] tracking-[0.4em]">
                          PROGRAMA DAHİL OL
                        </PremiumButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting Line between sections */}
              <div className="absolute -bottom-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Closing Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-40 text-center space-y-12"
        >
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-brand-gold/20 bg-brand-gold/5">
             <ICONS.Sparkles className="w-4 h-4 text-brand-gold" />
             <span className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">Hangi program size uygun?</span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-serif text-white max-w-2xl mx-auto leading-tight">
            Size En Uygun Yol Haritasını <em className="italic text-brand-gold">Birlikte Belirleyelim</em>
          </h3>
          
          <p className="text-white/40 text-lg font-light max-w-xl mx-auto">
            Ücretsiz bir ön görüşme ile hedeflerinizi analiz edebilir ve sizin için en verimli olacak programı seçebiliriz.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
            <Link to="/#randevu">
              <PremiumButton variant="outline" className="px-12 py-6">RANDEVU TALEBİ</PremiumButton>
            </Link>
            <div className="flex items-center gap-4 text-white/40">
              <ICONS.Phone className="w-5 h-5" />
              <span className="text-xl font-serif text-white tracking-widest">+90 5XX XXX XX XX</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
