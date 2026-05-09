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
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 50], ["rgba(0, 0, 0, 0.05)", "rgba(5, 5, 5, 0.8)"]);
  const backdropFilter = useTransform(scrollY, [0, 50], ["blur(4px)", "blur(16px)"]);
  const py = useTransform(scrollY, [0, 50], ["20px", "12px"]); 

  return (
    <motion.nav 
      style={{ backgroundColor, backdropFilter, paddingTop: py, paddingBottom: py }}
      className="fixed top-0 inset-x-0 z-50 px-4 md:px-12 xl:px-28 flex flex-col justify-center border-b border-white/5 isolate"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3 md:gap-4 hover:opacity-80 transition-opacity cursor-pointer">
          <Logo />
          <span className="font-bold text-lg md:text-xl tracking-tight hidden sm:block">UGCgo</span>
          <span className="font-bold text-lg tracking-tight sm:hidden">UGCgo</span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-1 bg-white/5 p-1 rounded-full border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
          {["Ana Sayfa", "Hizmetlerimiz", "Yaklaşımımız", "Sonuçlar"].map((item, idx) => (
            <a key={idx} href="#" className="px-5 py-1.5 text-[13px] md:text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all font-medium">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          {[Instagram, Linkedin, Twitter].map((Icon, idx) => (
            <a key={idx} href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/15 border border-white/10 transition-all group shadow-[inset_0_0_10px_rgba(255,255,255,0.02)]">
              <Icon className="w-4 h-4 md:w-[16px] md:h-[16px] text-white/70 group-hover:text-white transition-colors" strokeWidth={2} />
            </a>
          ))}
        </div>
      </div>
      <div className="lg:hidden mt-4 w-full flex items-center justify-center gap-4 text-[12px] sm:text-xs text-white/60 font-medium overflow-x-auto pb-1 no-scrollbar whitespace-nowrap">
        {["Ana Sayfa", "Hizmetlerimiz", "Yaklaşımımız", "Sonuçlar"].map((item, idx) => (
          <React.Fragment key={idx}>
            <a href="#" className="hover:text-white transition-colors flex-shrink-0">{item}</a>
            {idx !== 3 && <span className="flex-shrink-0 w-1 h-1 rounded-full bg-white/20"></span>}
          </React.Fragment>
        ))}
      </div>
    </motion.nav>
  );
};

const HeroSection = () => (
  <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden">
    <video 
      autoPlay 
      loop 
      muted 
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0"
      src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
    />
    <div className="absolute inset-0 video-overlay z-[1]"></div>
    
    <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-32 pb-32 max-w-4xl mx-auto h-full w-full">
      <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 bg-white/5 backdrop-blur-md px-3 md:px-4 py-2 rounded-full border border-white/10">
        <div className="flex -space-x-2 md:-space-x-3">
          {["avatar-1.png", "avatar-2.png", "avatar-3.png"].map((src, i) => (
            <div key={i} className={`w-7 h-7 md:w-9 md:h-9 rounded-full border-2 border-black overflow-hidden relative ${i === 0 ? 'bg-white/20 z-[3]' : i === 1 ? 'bg-white/40 z-[2]' : 'bg-white/60 z-[1]'}`}>
              <img src={`/${src}`} alt="Avatar" className="w-full h-full object-cover mix-blend-overlay" />
            </div>
          ))}
        </div>
        <span className="text-[11px] md:text-sm font-medium text-white/80 tracking-wide text-left leading-tight">E-ticaret markaları <br className="sm:hidden" />için 7.000+ video</span>
      </motion.div>
      
      <motion.h1 {...fadeUp(0.2)} className="text-[12vw] sm:text-[10vw] md:text-[88px] leading-[1.05] md:leading-[0.9] font-medium tracking-tight md:tracking-[-3px] w-full max-w-4xl mb-4 md:mb-6">
        İzleyiciyi Yakala.<br /> Satışa <span className="font-serif italic font-normal">Dönüştür</span>
      </motion.h1>
      
      <motion.p {...fadeUp(0.3)} className="text-sm sm:text-base md:text-xl text-[hsl(var(--hero-subtitle))] max-w-2xl mb-8 md:mb-12 leading-relaxed opacity-90 px-2 sm:px-0">
        Sadece "güzel" videolar çekmiyoruz. Kaydırma alışkanlıklarını durduracak dijital mıknatıslar üretiyor ve bu ilgiyi doğrudan ciroya çeviriyoruz.
      </motion.p>
      
      <motion.form {...fadeUp(0.4)} className="liquid-glass flex flex-col sm:flex-row items-center p-2 sm:p-1.5 rounded-[32px] sm:rounded-full w-full max-w-[90%] sm:max-w-lg mx-auto gap-2 sm:gap-0 mt-8 md:mt-0">
        <input 
          type="url" 
          placeholder="Web sitenizin adresi" 
          className="bg-transparent border-none outline-none flex-1 px-4 sm:px-6 py-4 sm:py-0 w-full text-sm text-foreground placeholder:text-white/40 text-center sm:text-left"
          required
        />
        <motion.button 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          type="submit" 
          className="bg-foreground text-background font-bold text-[11px] md:text-xs tracking-widest px-6 py-4 md:py-3.5 rounded-full w-full sm:w-auto shrink-0 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
        >
          ÜCRETSİZ İNCELEME
        </motion.button>
      </motion.form>

      <motion.div {...fadeUp(0.8)} className="absolute bottom-2 md:bottom-8 left-0 right-0 flex flex-col items-center opacity-40">
        <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase mb-3 md:mb-4 text-foreground">Keşfetmek için Kaydır</span>
        <div className="w-[1px] h-8 md:h-12 bg-white/20"></div>
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
  <section className="pt-0 pb-32 md:pb-44 px-4 max-w-5xl mx-auto flex flex-col items-center text-center">
    <motion.div {...fadeUp(0.1)} className="w-[90vw] max-w-[500px] aspect-square rounded-full mb-32 relative p-[16px] md:p-[24px] bg-white/5 border border-white/20 shadow-[0_0_120px_rgba(40,150,255,0.25)] backdrop-blur-xl">
      <div className="absolute inset-0 rounded-full border-[2px] border-white/20 shadow-[inset_0_0_80px_rgba(40,150,255,0.15)] pointer-events-none"></div>
      <div className="w-full h-full rounded-full overflow-hidden relative shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] border border-white/10 bg-black/40">
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(40,150,255,0.5)] pointer-events-none z-20 mix-blend-screen"></div>
        {/* Removed the black gradients that were hiding the animation and scale-[1.05] so it fits perfectly inside */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
        />
      </div>
    </motion.div>

    <div className="text-left w-full max-w-4xl mx-auto px-4">
      <ScrollText 
        text="Biz sadece video çekmiyoruz; markaların ürünlerini insanların kaydırma alışkanlıklarını durduracak dijital mıknatıslara dönüştürüyoruz."
        highlights={["kaydırma", "durduracak", "dijital", "mıknatıslara"]}
        className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-tight md:leading-tight lg:leading-tight"
      />
      
      <ScrollText 
        text="İzleyiciyi ilk 3 saniyede yakalayan, pürüzsüz bir huniyle ödeme sayfasına götüren ve ilgiyi doğrudan ciroya çeviren sistemler kuruyoruz."
        className="text-xl md:text-2xl lg:text-3xl font-medium mt-10 leading-snug md:leading-snug"
      />
    </div>
  </section>
);

const SolutionSection = () => {
  const features = [
    { title: "Etkili Kancalar (Hooks)", desc: "Hedef kitleyi ilk 3 saniyede durduran ve videoyu sonuna kadar izleten performans odaklı kurgular." },
    { title: "Dikey Video Formatı", desc: "TikTok, Reels ve Shorts dinamiklerine %100 uyumlu, hızlı tüketilebilir içerikler." },
    { title: "Veri ile Optimizasyon", desc: "Reklam verilerini izleyerek, gerekiyorsa videonun kancasını değiştirip ROAS'ı artırırız." },
    { title: "Landing Page Entegrasyonu", desc: "Kullanıcıyı videodan alıp ödeme sayfasına kadar sorunsuz bir tünelden geçiririz." },
  ];

  const funnelSteps = [
    { step: "1", title: "Yakala", desc: "Etkili bir 'hook' ile kaydırmayı durdur (İlk 3 Saniye)." },
    { step: "2", title: "İkna Et", desc: "Ürünün sorun çözen yanını akıcı bir dikey videoyla göster." },
    { step: "3", title: "Yönlendir", desc: "Net bir eylem çağrısı (CTA) ile siteye çek." },
    { step: "4", title: "Dönüştür", desc: "Videoyla aynı dilde, Video-First satış sayfasıyla satışı kapat." }
  ];

  return (
    <section className="py-24 md:py-44 border-t border-white/10 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="mb-12 md:mb-16 text-center md:text-left">
        <motion.p {...fadeUp(0.1)} className="text-[10px] md:text-xs tracking-[3px] uppercase text-white/60 mb-4 md:mb-6 font-semibold">
          ÇÖZÜM
        </motion.p>
        <motion.h2 {...fadeUp(0.2)} className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight max-w-2xl mx-auto md:mx-0">
          Satış odaklı <span className="font-serif italic font-normal">Video-First</span> yaklaşım
        </motion.h2>
      </div>

      <motion.div {...fadeUp(0.3)} className="w-full aspect-[4/3] sm:aspect-[2/1] md:aspect-[3/1] rounded-[32px] overflow-hidden relative mb-16 md:mb-[72px] border border-white/10">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
        />
      </motion.div>

      <div className="mb-20 md:mb-24">
        <motion.h3 {...fadeUp(0.4)} className="text-xl md:text-3xl font-medium mb-16 text-center px-4 tracking-tight">
          Video'dan Satın Almaya: <span className="text-white/40">İnce Ayarlanmış Tünel</span>
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative px-4">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 pointer-events-none"></div>
          
          {funnelSteps.map((step, i) => (
            <motion.div 
              key={i} 
              {...fadeUp(0.5 + (i * 0.1))} 
              className="relative z-10 group"
              whileHover={{ y: -8 }}
            >
              <div className="relative h-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[32px] p-8 flex flex-col items-center text-center transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-white/20 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>

                <motion.div 
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl md:text-2xl font-serif italic mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                >
                  <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">{step.step}</span>
                </motion.div>
                
                <h4 className="text-lg md:text-xl font-semibold mb-3 tracking-tight group-hover:text-white transition-colors">
                  {step.title}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                  {step.desc}
                </p>
                
                {/* Connector dot for mobile/tablet */}
                <div className="md:hidden mt-6 w-1 h-8 bg-gradient-to-b from-white/10 to-transparent rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 border-t border-white/5">
        {features.map((feat, i) => (
          <motion.div 
            key={i} 
            {...fadeUp(0.6 + (i * 0.1))} 
            className="flex flex-col gap-4 p-6 rounded-3xl bg-white/[0.01] border border-white/[0.05] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 group"
          >
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-bold text-white/40 group-hover:text-white/80 transition-colors">
              {i + 1}
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2 group-hover:text-white transition-colors">{feat.title}</h3>
              <p className="text-white/40 group-hover:text-white/60 text-sm leading-relaxed transition-colors">{feat.desc}</p>
            </div>
          </motion.div>
        ))}
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
        <MissionSection />
        <SolutionSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

