import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';
import { Instagram, Linkedin, Twitter, Target, TrendingUp, LayoutTemplate } from 'lucide-react';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const Logo = () => (
  <motion.div 
    className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-white/20 to-white/5 border border-white/30 backdrop-blur-sm overflow-hidden shrink-0"
    whileHover={{ scale: 1.05 }}
  >
    <motion.div 
      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent w-full h-full"
      animate={{ x: ['-200%', '200%'] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
    />
    <motion.div 
      className="w-2.5 h-2.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
      style={{ borderRadius: '3px' }}
      animate={{ rotate: [0, 90, 180, 270, 360] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 50], ["rgba(0, 0, 0, 0.05)", "rgba(5, 5, 5, 0.9)"]);
  const backdropFilter = useTransform(scrollY, [0, 50], ["blur(4px)", "blur(20px)"]);
  const py = useTransform(scrollY, [0, 50], ["24px", "16px"]); 

  return (
    <>
      <motion.nav 
        style={{ backgroundColor, backdropFilter, paddingTop: py, paddingBottom: py }}
        className="fixed top-0 inset-x-0 z-[100] px-6 md:px-12 xl:px-28 border-b border-white/5"
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer z-[101]">
            <Logo />
            <span className="font-bold text-xl tracking-tighter">UGCgo</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-1 bg-white/5 p-1 rounded-full border border-white/10">
            {["Ana Sayfa", "Hizmetlerimiz", "Yaklaşımımız", "Sonuçlar"].map((item, idx) => (
              <a key={idx} href="#" className="px-5 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all font-medium">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {[Instagram, Linkedin, Twitter].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/15 border border-white/10 transition-all group">
                <Icon className="w-[18px] h-[18px] text-white/70 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

          {/* Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden z-[101] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full transition-all"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white rounded-full transition-all"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full transition-all"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div 
        initial={false}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-[90] bg-black lg:hidden flex flex-col items-center justify-center p-8 pt-24"
      >
        <div className="flex flex-col items-center gap-8 w-full">
          {["Ana Sayfa", "Hizmetlerimiz", "Yaklaşımımız", "Sonuçlar"].map((item, idx) => (
            <motion.a 
              key={idx} 
              href="#" 
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 * idx }}
              className="text-3xl font-medium text-white/80 hover:text-white"
            >
              {item}
            </motion.a>
          ))}
          <div className="flex gap-6 mt-8">
            {[Instagram, Linkedin, Twitter].map((Icon, idx) => (
              <a key={idx} href="#" className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 border border-white/10">
                <Icon className="w-6 h-6 text-white" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

const HeroSection = () => (
  <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden">
    <video 
      autoPlay 
      loop 
      muted 
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0"
      src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
    />
    <div className="absolute inset-0 video-overlay z-[1]"></div>
    
    <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 max-w-5xl mx-auto w-full">
      <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-8 md:mb-10 bg-white/5 backdrop-blur-xl px-4 py-2.5 rounded-full border border-white/10 shadow-2xl">
        <div className="flex -space-x-3">
          {["avatar-1.png", "avatar-2.png", "avatar-3.png"].map((src, i) => (
            <div key={i} className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-black/50 overflow-hidden relative ${i === 0 ? 'z-[3]' : i === 1 ? 'z-[2]' : 'z-[1]'}`}>
              <img src={`/${src}`} alt="Avatar" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <span className="text-xs md:text-sm font-medium text-white/90 tracking-tight text-left leading-tight">E-ticaret markaları için<br/><span className="text-white/60">7.000+ profesyonel video</span></span>
      </motion.div>
      
      <motion.h1 {...fadeUp(0.2)} className="text-[13vw] md:text-[88px] leading-[0.95] md:leading-[0.85] font-medium tracking-tight md:tracking-[-4px] w-full max-w-4xl mb-6">
        İzleyiciyi Yakala.<br /> Satışa <span className="font-serif italic font-normal text-white/80">Dönüştür</span>
      </motion.h1>
      
      <motion.p {...fadeUp(0.3)} className="text-base md:text-xl text-white/70 max-w-2xl mb-10 md:mb-14 leading-relaxed px-4">
        Sadece "güzel" videolar çekmiyoruz. Kaydırma alışkanlıklarını durduracak dijital mıknatıslar üretiyor ve bu ilgiyi doğrudan ciroya çeviriyoruz.
      </motion.p>
      
      <motion.form {...fadeUp(0.4)} className="liquid-glass flex flex-col sm:flex-row items-center p-1.5 rounded-[28px] sm:rounded-full w-full max-w-lg mx-auto gap-1">
        <input 
          type="url" 
          placeholder="Web sitenizin adresi" 
          className="bg-transparent border-none outline-none flex-1 px-6 py-4 sm:py-0 w-full text-sm text-foreground placeholder:text-white/30"
          required
        />
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit" 
          className="bg-white text-black font-bold text-[11px] tracking-widest px-8 py-4 sm:py-4 rounded-full w-full sm:w-auto shrink-0 shadow-2xl"
        >
          ÜCRETSİZ İNCELEME
        </motion.button>
      </motion.form>

      <motion.div {...fadeUp(0.8)} className="absolute bottom-8 left-0 right-0 hidden md:flex flex-col items-center opacity-30">
        <span className="text-[10px] tracking-[0.5em] uppercase mb-4">Keşfet</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </main>
  </section>
);

const ServicesSection = () => {
  const cards = [
    { name: "Kanca Odaklı Dikey Video", icon: Target, desc: "İlk 3 saniyede izleyiciyi yakalayan ve 30. saniyede satın almaya ikna eden dikey içerikler." },
    { name: "Veri Güdümlü Reklam Optimizasyonu", icon: TrendingUp, desc: "Performansı düşük videoların kancalarını veriler ışığında değiştirerek ROI ve Tıklama Oranını (CTR) maksimize ederiz." },
    { name: "Video-First Satış Sayfaları", icon: LayoutTemplate, desc: "Videonun yarattığı ilgiyi kesintiye uğratmadan ödeme sayfasına kadar taşıyan, dönüşüme optimize edilmiş sayfalar." },
  ];

  return (
    <section className="pt-24 md:pt-40 lg:pt-64 pb-12 md:pb-16 px-4 max-w-7xl mx-auto flex flex-col items-center text-center">
      <motion.h2 {...fadeUp(0.1)} className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight mb-6">
        Performans Odaklı <span className="font-serif italic font-normal">Video Üretimi</span>
      </motion.h2>
      
      <motion.p {...fadeUp(0.2)} className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-16 md:mb-24 px-2">
        Videoyu teslim edip işi bitiren ajanslardan değiliz. Tıklama oranından (CTR) satış maliyetine kadar her veriyi takip eden ve sanatı ölçülebilir sonuçlarla birleştiren bir dönüşüm merkezliyiz.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 w-full mb-20 md:mb-20 px-4 md:px-12">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
          <motion.div key={i} {...fadeUp(0.3 + (i * 0.1))} className="flex flex-col items-center gap-6 group cursor-pointer" whileHover="hover">
            <div className="w-full max-w-[240px] md:max-w-[280px] aspect-square mx-auto border border-white/10 rounded-[32px] md:rounded-3xl flex items-center justify-center p-8 relative overflow-hidden transition-colors duration-500 group-hover:border-white/20 group-hover:bg-white/[0.02]">
              <div className="absolute inset-0 bg-white/[0.02]"></div>
              <motion.div
                variants={{
                  hover: {
                    scale: [1, 1.15, 1],
                    opacity: [1, 0.8, 1],
                    transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                  }
                }}
                className="relative z-10"
              >
                <Icon className="w-16 h-16 sm:w-20 sm:h-20 md:w-16 md:h-16 text-white/80 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
              </motion.div>
            </div>
            <div>
              <h3 className="font-semibold text-lg md:text-base mb-2 group-hover:text-white transition-colors duration-300">{card.name}</h3>
              <p className="text-white/60 text-base md:text-sm max-w-[240px] md:max-w-[200px] mx-auto group-hover:text-white/80 transition-colors duration-300">{card.desc}</p>
            </div>
          </motion.div>
        )})}
      </div>
      
      <motion.p {...fadeUp(0.6)} className="text-white/60 text-sm">
        İyi bir video tek başına yetmez, sadece doğru bir stratejiyle kazandırır.
      </motion.p>
    </section>
  );
};

const ScrollWord = ({ word, progress, range, isHighlight }: any) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className={`inline-block mr-[0.25em] mt-1 ${isHighlight ? "text-foreground" : "text-hero-subtitle"}`}>
      {word}
    </motion.span>
  );
};

const ScrollText = ({ text, highlights = [], className = "" }: { text: string, highlights?: string[], className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "start 0.3"]
  });

  const words = text.split(" ");
  return (
    <div ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
        const isHighlight = highlights.includes(cleanWord);
        return <ScrollWord key={i} word={word} progress={scrollYProgress} range={[start, end]} isHighlight={isHighlight} />;
      })}
    </div>
  );
};

const MissionSection = () => (
  <section className="py-24 md:py-40 px-6 md:px-12 xl:px-28 relative overflow-hidden bg-[#050505]">
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <motion.div {...fadeUp(0.1)}>
          <h2 className="text-[10vw] md:text-7xl font-medium leading-[0.95] tracking-tighter mb-8 md:mb-12">
            Biz sadece video <br /><span className="text-white/40">çekmiyoruz;</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light mb-10">
            Markaların ürünlerini insanların kaydırma alışkanlıklarını durduracak dijital mıknatıslara dönüştürüyoruz.
          </p>
          <div className="space-y-6">
            {[
              { title: "Veri Odaklı Kreatif", desc: "Test edilmiş kanca (hook) yapıları ile %200 daha fazla tutma oranı." },
              { title: "Psikolojik Tetikleyiciler", desc: "Tüketici davranışlarını analiz ederek satın alma arzusunu uyandırıyoruz." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div {...fadeUp(0.3)} className="relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" 
              alt="Digital Content Creation" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          </div>
          <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-3xl hidden sm:block">
            <span className="block text-4xl font-bold mb-1 text-white">94%</span>
            <span className="text-xs uppercase tracking-widest text-white/50">Daha Fazla Etkileşim</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="py-24 md:py-32 bg-black border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 text-center">
        {[
          { label: "Partner Marka", value: "120+" },
          { label: "Üretilen Video", value: "7.400" },
          { label: "Ort. ROAS Artışı", value: "3.2x" },
          { label: "İzlenme Sayısı", value: "450M+" }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-4xl md:text-6xl font-medium tracking-tighter mb-3 text-white">{stat.value}</div>
            <div className="text-xs md:text-sm uppercase tracking-widest text-white/40">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SolutionSection = () => {
  const funnelSteps = [
    { step: "01", title: "Yakala", desc: "Etkili bir 'hook' ile kaydırmayı durdur.", icon: "⚡", color: "from-amber-400 to-orange-600" },
    { step: "02", title: "İkna Et", desc: "Ürünün sorun çözen yanını videoyla göster.", icon: "💎", color: "from-blue-400 to-indigo-600" },
    { step: "03", title: "Yönlendir", desc: "Net bir eylem çağrısı ile siteye çek.", icon: "🎯", color: "from-rose-400 to-red-600" },
    { step: "04", title: "Dönüştür", desc: "Video-First sayfasıyla satışı kapat.", icon: "🚀", color: "from-emerald-400 to-teal-600" }
  ];

  return (
    <section className="py-24 md:py-48 px-6 md:px-12 xl:px-28 bg-[#050505] relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full -ml-64 -mb-64"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24 md:mb-32">
          <motion.div {...fadeUp(0.1)} className="max-w-3xl text-left">
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-white/30 mb-6 block">METODOLOJİMİZ</span>
            <h2 className="text-[12vw] md:text-8xl font-medium leading-[0.85] tracking-tighter text-white">
              Huni Odaklı <br /> <span className="text-white/20">Performans.</span>
            </h2>
          </motion.div>
          <motion.p {...fadeUp(0.2)} className="text-xl md:text-2xl text-white/40 max-w-md font-light leading-relaxed text-left">
            İzleyicinin dikkatini yakalayan ve onu müşteriye dönüştüren matematiksel bir akış.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {funnelSteps.map((item, i) => (
            <motion.div 
              key={i}
              {...fadeUp(0.1 * i)}
              className="group relative p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-2 flex flex-col h-full text-left"
            >
              {/* Card Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-[2.5rem]`}></div>
              
              <div className="flex justify-between items-start mb-16">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-[1px] group-hover:scale-110 transition-transform duration-500`}>
                  <div className="w-full h-full rounded-2xl bg-[#0a0a0a] flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>
                </div>
                <span className="text-sm font-bold text-white/10 tracking-widest">{item.step}</span>
              </div>

              <h3 className="text-3xl font-medium text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all">
                {item.title}
              </h3>
              <p className="text-white/40 leading-relaxed text-lg font-light group-hover:text-white/60 transition-colors">
                {item.desc}
              </p>

              {/* Progress Line for Desktop */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-white/10 z-20"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Can Yılmaz",
      company: "Moda Trend",
      quote: "UGCgo ile çalışmaya başladığımızdan beri ROAS değerlerimiz 2 katına çıktı. Özellikle kanca çekimleri efsane.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Can"
    },
    {
      name: "Elif Demir",
      company: "FitLife",
      quote: "Sadece video değil, tam bir strateji ortağı oldular. Satış sayfalarındaki dönüşüm artışı inanılmaz.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elif"
    },
    {
      name: "Selim Kaya",
      company: "TechStore",
      quote: "Dikey video konusunda Türkiye'deki tek adres. Verilerle konuşan bir ekipleri var, rastgele iş yapmıyorlar.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Selim"
    }
  ];

  const [active, setActive] = React.useState(0);

  return (
    <section className="py-24 md:py-44 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <motion.p {...fadeUp(0.1)} className="text-[10px] md:text-xs tracking-[3px] uppercase text-white/60 mb-6 font-semibold">
              MÜŞTERİ YORUMLARI
            </motion.p>
            <motion.h2 {...fadeUp(0.2)} className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight mb-8">
              Sonuçlarımızı <span className="font-serif italic font-normal text-white/40">Ortaklarımız Anlatsın</span>
            </motion.h2>
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActive(i)}
                  className={`w-12 h-1 bg-white/20 rounded-full transition-all duration-500 overflow-hidden relative`}
                >
                  {active === i && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white" 
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative isolate min-h-[300px] md:min-h-[350px] flex items-center">
              <motion.div 
                key={active}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[48px] p-8 md:p-12 relative overflow-hidden"
              >
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="mb-8">
                      <div className="flex gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map(s => (
                          <div key={s} className="w-4 h-4 text-white/80">★</div>
                        ))}
                      </div>
                      <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-white/90">
                        "{testimonials[active].quote}"
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
                    <img 
                      src={testimonials[active].avatar} 
                      alt={testimonials[active].name} 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-white/10"
                    />
                    <div>
                      <h4 className="font-bold text-white">{testimonials[active].name}</h4>
                      <p className="text-white/40 text-sm font-medium">{testimonials[active].company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="relative py-24 md:py-44 border-t border-white/10 overflow-hidden flex items-center justify-center min-h-[60vh] md:min-h-[70vh]">
      <video
        muted
        autoPlay
        loop
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 grayscale opacity-40 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-background/45 z-[1]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-[2]"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl w-full">
        <motion.div {...fadeUp(0.1)} className="mb-8 md:mb-10 opacity-80">
          <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white/60">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-white/60"></div>
          </div>
        </motion.div>
        
        <motion.h2 {...fadeUp(0.2)} className="text-4xl sm:text-5xl md:text-7xl font-serif italic text-foreground mb-4 md:mb-6 font-normal">
          Büyümeye Hazır Mısınız?
        </motion.h2>
        
        <motion.p {...fadeUp(0.3)} className="text-white/60 text-base md:text-lg mb-10 md:mb-12 max-w-xl px-4">
          E-ticaret markanızı bir sonraki seviyeye taşımak için veri odaklı video stratejilerimizle tanışın.
        </motion.p>
        
        <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background font-bold text-[11px] md:text-xs tracking-widest rounded-full px-8 py-4 sm:py-3.5 w-full sm:w-auto"
          >
            STRATEJİ GÖRÜŞMESİ AYARLA
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="liquid-glass text-foreground font-bold text-[11px] md:text-xs tracking-widest rounded-full px-8 py-4 sm:py-3.5 w-full sm:w-auto border border-white/10"
          >
            VİDEOLARIMIZI İNCELE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 md:py-12 px-4 md:px-12 xl:px-28 border-t border-white/10 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
    <p className="text-white/60 text-xs md:text-sm text-center md:text-left">
      © 2026 UGCgo. Tüm hakları saklıdır.
    </p>
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-white/60 font-medium">
      <a href="#" className="hover:text-foreground transition-colors">Gizlilik</a>
      <a href="#" className="hover:text-foreground transition-colors">Şartlar</a>
      <a href="#" className="hover:text-foreground transition-colors">İletişim</a>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-foreground antialiased selection:bg-foreground selection:text-background font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <MissionSection />
        <SolutionSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

