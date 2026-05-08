import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Users, Briefcase } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-16 pt-32 pb-16 overflow-hidden">
      {/* Dynamic Animated Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-30 select-none pointer-events-none mix-blend-luminosity scale-105"
        >
          {/* Using a highly robust Mixkit free stock video of a modern architecture/office */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-building-with-a-glass-facade-4348-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black via-deep-black/80 to-transparent" />
      </div>

      <div className="max-w-screen-2xl mx-auto w-full grid lg:grid-cols-12 gap-8 items-center relative z-10">
        
        <div className="lg:col-span-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-gold"></div>
            <span className="text-[12px] uppercase tracking-[0.3em] text-gold font-medium">Seçkin Hukuki Danışmanlık</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[48px] md:text-[72px] font-serif leading-[1.05] tracking-tight mb-10 text-white"
          >
            Hukukun Gücünü <br/>
            <span className="italic text-gold">Stratejiyle</span> Birleştiriyoruz.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-xl text-lg text-white/50 leading-relaxed font-light mb-12"
          >
            Karmaşık ticari uyuşmazlıklarda ve uluslararası tahkim süreçlerinde, küresel vizyon ve yerel derinlik ile yanınızdayız. Geleceği şekillendiren kararlarda, sarsılmaz bir hukuki ortaklık sunuyoruz.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 mb-16"
          >
            <button className="px-10 py-5 gold-gradient text-black font-semibold text-[13px] uppercase tracking-wider rounded-sm transition-transform hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(198,161,110,0.2)]">
              Randevu Planla
            </button>
            <button className="px-10 py-5 border border-white/20 text-white font-semibold text-[13px] uppercase tracking-wider rounded-sm hover:border-white/40 transition-all">
              Kurumsal Profilimiz
            </button>
          </motion.div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <PracticeSummaryCard 
            num="01" 
            title="Uluslararası Tahkim" 
            desc="Sınır ötesi uyuşmazlıklarda stratejik savunma ve yüksek başarı oranı." 
            delay={0.8}
          />
          <PracticeSummaryCard 
            num="02" 
            title="Birleşme & Devralmalar" 
            desc="Karmaşık M&A süreçlerinde yapısal kurgu ve hukuki tam denetim." 
            delay={1.0}
          />
          <PracticeSummaryCard 
            num="03" 
            title="Ticaret Hukuku" 
            desc="Global ölçekli şirketler için kapsamlı hukuki altyapı ve risk yönetimi." 
            delay={1.2}
          />
        </div>
      </div>

      {/* Stats Section Bottom */}
      <div className="max-w-screen-2xl mx-auto w-full mt-auto">
        <div className="thin-line mb-10 opacity-50"></div>
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="flex gap-16">
            <StatItem value="500+" label="Kazanılan Dava" />
            <StatItem value="30+" label="Yıllık Deneyim" />
            <StatItem value="12" label="Kıdemli Ortak" />
          </div>
          
          <div className="flex items-center gap-6 text-white/30 text-right">
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold/60">Levent No:199</span>
              <span className="text-[10px] uppercase tracking-[0.2em]">Beşiktaş, İstanbul</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10"></div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-medium">
              info@arslanglobal.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PracticeSummaryCard({ num, title, desc, delay }: { num: string, title: string, desc: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      className="glass-card p-8 rounded-lg group transition-colors hover:border-gold/30"
    >
      <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-3 group-hover:scale-110 transition-transform origin-left">{num}</span>
      <h3 className="text-xl font-serif text-white mb-3 group-hover:text-gold transition-colors">{title}</h3>
      <p className="text-sm text-white/40 leading-relaxed font-light">{desc}</p>
    </motion.div>
  );
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div>
      <div className="text-3xl font-serif text-gold mb-1 tracking-tight">{value}</div>
      <div className="text-[10px] uppercase tracking-widest text-white/40 font-medium">{label}</div>
    </div>
  );
}
