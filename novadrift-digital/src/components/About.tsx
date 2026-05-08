import { motion } from 'motion/react';
import { Target, Eye, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 md:py-32 bg-[#0B0B0B]" id="about">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 md:space-y-10"
          >
            <div>
              <div className="flex items-center space-x-4 mb-4 md:mb-6">
                <div className="h-[1px] w-12 bg-[#00D1FF]"></div>
                <span className="uppercase tracking-[0.4em] text-[#00D1FF] text-[9px] md:text-[10px] font-black">STÜDYOMUZ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 uppercase tracking-tighter leading-[1.1] md:leading-[0.9]">
                Dijitalde <span className="text-[#00D1FF] italic">Sıradanlığa</span> Yer Yok.
              </h2>
              <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-xl italic">
                NOVADRIFT DIGITAL, modern markaların dijitalde küçük görünmesini engellemek için kuruldu. 
                İnsanlar artık işletmeleri Google’da değil, ilk izlenimde satın alıyor.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="flex gap-4 md:gap-6 items-start">
                <div className="w-12 h-12 md:w-14 md:h-14 border border-white/10 flex items-center justify-center shrink-0 group hover:bg-[#00D1FF] transition-all">
                  <Target className="w-5 h-5 md:w-6 md:h-6 text-[#00D1FF] group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-[10px] md:text-xs mb-1 md:mb-2">Misyonumuz</h4>
                  <p className="text-slate-500 text-xs md:text-sm font-light italic">
                    İşletmelerin “küçük işletme” gibi görünmesini engelleyip dijitalde büyük marka algısı oluşturmak.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6 items-start">
                <div className="w-12 h-12 md:w-14 md:h-14 border border-white/10 flex items-center justify-center shrink-0 group hover:bg-[#00D1FF] transition-all">
                  <Eye className="w-5 h-5 md:w-6 md:h-6 text-[#00D1FF] group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-[10px] md:text-xs mb-1 md:mb-2">Vizyonumuz</h4>
                  <p className="text-slate-500 text-xs md:text-sm font-light italic">
                    Türkiye’nin “premium görünen web sitesi” denince akla gelen ilk dijital stüdyo olmak.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mt-10 lg:mt-0"
          >
            <div className="aspect-square bg-[#161616] border border-white/5 flex items-center justify-center p-4 md:p-8">
               <div className="relative w-full h-full overflow-hidden border border-white/5 group">
                  <img 
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop" 
                    alt="Office" 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 md:p-12 text-center group-hover:bg-black/10 transition-all">
                    <Sparkles className="w-10 h-10 md:w-16 md:h-16 text-[#00D1FF] mb-4 md:mb-6 animate-pulse" />
                    <h3 className="text-xl md:text-3xl font-black text-white mb-2 md:mb-4 uppercase tracking-tighter italic">Tasarıma Takıntılıyız</h3>
                    <p className="text-slate-400 text-[9px] md:text-xs font-black uppercase tracking-[0.3em] leading-tight">“İnsanlar önce görünüşe güvenir. Sonra hizmete.”</p>
                  </div>
               </div>
            </div>
            {/* Decor */}
            <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-32 h-32 md:w-40 md:h-40 bg-[#00D1FF] blur-[100px] md:blur-[150px] opacity-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
