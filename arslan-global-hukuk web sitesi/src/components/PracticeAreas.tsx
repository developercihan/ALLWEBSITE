import { motion } from 'framer-motion';
import { 
  Building2, 
  Scale, 
  Globe, 
  Briefcase, 
  ShieldCheck, 
  Landmark, 
  Gavel, 
  Banknote,
  Users,
  ChevronRight
} from 'lucide-react';

const practices = [
  {
    title: "Ticaret Hukuku",
    desc: "Şirketlerin kuruluşundan tasfiyesine kadar her aşamada kurumsal danışmanlık ve uyuşmazlık çözümü.",
    icon: <Building2 className="text-gold" size={32} />
  },
  {
    title: "Uluslararası Tahkim",
    desc: "Sınır ötesi ticari uyuşmazlıklarda stratejik temsil ve tahkim süreçleri yönetimi.",
    icon: <Globe className="text-gold" size={32} />
  },
  {
    title: "Ceza Hukuku",
    desc: "Beyaz yaka suçları ve ağır ceza yargılamalarında yüksek tecrübeli savunma stratejileri.",
    icon: <Gavel className="text-gold" size={32} />
  },
  {
    title: "Şirketler Hukuku",
    desc: "Birleşme ve devralmalar (M&A), bölünmeler ve kurumsal yönetim standartları yapılandırması.",
    icon: <Briefcase className="text-gold" size={32} />
  },
  {
    title: "Gayrimenkul Hukuku",
    desc: "Emlak projeleri, inşaat sözleşmeleri ve mülkiyet uyuşmazlıklarında kapsamlı hukuki destek.",
    icon: <Landmark className="text-gold" size={32} />
  },
  {
    title: "Vergi Hukuku",
    desc: "Vergi planlaması, denetim süreçleri ve vergi davalarında stratejik danışmanlık.",
    icon: <Banknote className="text-gold" size={32} />
  },
  {
    title: "Fikri Mülkiyet",
    desc: "Marka, patent ve telif haklarının korunması ve portföy yönetimi.",
    icon: <ShieldCheck className="text-gold" size={32} />
  },
  {
    title: "Bilişim Hukuku",
    desc: "KVKK süreçleri, siber güvenlik ve dijital varlıkların hukuki alt yapısının kurulması.",
    icon: <ShieldCheck className="text-gold" size={32} />
  },
  {
    title: "Aile & Miras",
    desc: "Aile hukuku ve miras planlaması süreçlerinde hassas ve profesyonel yaklaşım.",
    icon: <Users className="text-gold" size={32} />
  }
];

export default function PracticeAreas() {
  return (
    <section id="uzmanlik" className="py-24 md:py-40 bg-deep-black relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gold"></div>
              <span className="text-[12px] uppercase tracking-[0.4em] text-gold font-medium">Uzmanlık Alanlarımız</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Karmaşık Hukuki Sorunlara <br/>
              <span className="text-gold italic">Keskin</span> Çözümler.
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-white/40 font-light leading-relaxed mb-6">
              Hemen hemen her hukuk disiplininde uzmanlaşmış ekibimizle, iş dünyasının tüm ihtiyaçlarına tek bir noktadan yanıt veriyoruz.
            </p>
            <div className="thin-line opacity-30"></div>
          </div>
        </div>

        {/* Desktop Layout - Untouched */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((practice, i) => (
            <motion.div
              key={practice.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-12 rounded-xl flex flex-col group relative overflow-hidden transition-all duration-500 hover:border-gold/40"
            >
              <div className="mb-8 p-4 w-fit rounded-xl bg-white/[0.02] border border-white/5 transition-transform duration-500 group-hover:scale-110 group-hover:bg-gold/5 group-hover:border-gold/20">
                {practice.icon}
              </div>
              <h3 className="text-2xl font-serif text-white mb-4 tracking-tight group-hover:text-gold transition-colors">{practice.title}</h3>
              <p className="text-white/40 font-light leading-relaxed transition-colors group-hover:text-white/60">
                {practice.desc}
              </p>
              
              <div className="mt-auto pt-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">Detaylı Bilgi</span>
                <div className="w-8 h-[1px] bg-gold" />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Premium Mobile Layout */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 -mx-6 px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {practices.map((practice, i) => (
            <motion.div
              key={`mobile-${practice.title}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative snap-center shrink-0 w-[85vw] max-w-[320px] bg-gradient-to-b from-[#161616] to-[#0a0a0a] border border-white/10 rounded-2xl p-8 flex flex-col overflow-hidden shadow-2xl"
            >
              {/* Giant Background Icon */}
              <div className="absolute -top-4 -right-4 opacity-[0.03] scale-[4] pointer-events-none text-white">
                 {practice.icon}
              </div>
              
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="p-3 rounded-xl bg-gold/10 border border-gold/20 backdrop-blur-md shadow-[0_0_15px_rgba(198,161,110,0.15)]">
                  {practice.icon}
                </div>
                <span className="text-gold/40 font-mono text-sm tracking-widest font-light">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="relative z-10 flex-1">
                <h3 className="text-2xl font-serif text-white mb-4 drop-shadow-md">{practice.title}</h3>
                <p className="text-white/60 font-light text-[15px] leading-relaxed mb-8">
                  {practice.desc}
                </p>
              </div>

              <div className="mt-auto flex items-center gap-3 relative z-10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">Keşfet</span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-gold/50 to-transparent" />
              </div>

              {/* Edge highlight */}
              <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none mix-blend-overlay" />
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="md:hidden flex items-center justify-center mt-6 text-white/30">
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex items-center gap-3"
          >
            <div className="w-6 h-[1px] bg-white/20"></div>
            <span className="text-[9px] uppercase tracking-[0.4em] font-medium">Yana Kaydırın</span>
            <ChevronRight size={14} className="text-gold/60" />
            <div className="w-6 h-[1px] bg-white/20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
