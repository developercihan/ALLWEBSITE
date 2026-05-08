import React, { useEffect, useState } from 'react';
import { ArrowRight, BarChart3, ShieldCheck, Smartphone, Globe, ArrowUpRight, ArrowDownRight, CreditCard, PieChart, Moon, Sun, Menu, X, UserPlus, Download, Calculator, TrendingUp, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const LogoIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.2L19.5 8L12 11.8L4.5 8L12 4.2ZM12 19.8L4.5 16V9.8L12 13.6L19.5 9.8V16L12 19.8Z" />
  </svg>
);

const initialMarketData = [
  { pair: 'BTC', name: 'Bitcoin', price: '64.230,50', rawPrice: 64230.50, change: '+2,45%', up: true, volume: '1.2B' },
  { pair: 'ETH', name: 'Ethereum', price: '3.450,20', rawPrice: 3450.20, change: '+1,82%', up: true, volume: '840M' },
  { pair: 'SOL', name: 'Solana', price: '145.60', rawPrice: 145.60, change: '+5,12%', up: true, volume: '450M' },
  { pair: 'BNB', name: 'Binance Coin', price: '590.30', rawPrice: 590.30, change: '-0,54%', up: false, volume: '320M' },
  { pair: 'XRP', name: 'Ripple', price: '0.582', rawPrice: 0.582, change: '+1,20%', up: true, volume: '210M' },
  { pair: 'ADA', name: 'Cardano', price: '0.451', rawPrice: 0.451, change: '-1,10%', up: false, volume: '95M' },
  { pair: 'AVAX', name: 'Avalanche', price: '35.20', rawPrice: 35.20, change: '+4,50%', up: true, volume: '150M' },
  { pair: 'DOGE', name: 'Dogecoin', price: '0.155', rawPrice: 0.155, change: '-2,30%', up: false, volume: '400M' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const blurReveal = {
  hidden: { opacity: 0, filter: 'blur(20px)', y: 30 },
  visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
};

const zoomOut = {
  hidden: { opacity: 0, scale: 1.15 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
};

const slideUpRotate = {
  hidden: { opacity: 0, y: 60, rotateX: -30 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [marketItems, setMarketItems] = useState(initialMarketData);
  const [flashingPairs, setFlashingPairs] = useState<Record<string, 'up' | 'down'>>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketItems(prevItems => {
        const newItems = [...prevItems];
        // Pick 1 to 3 random items to update
        const numUpdates = Math.floor(Math.random() * 3) + 1;
        
        for (let i = 0; i < numUpdates; i++) {
          const randomIndex = Math.floor(Math.random() * newItems.length);
          const item = { ...newItems[randomIndex] };
          
          // Change price by -0.5% to +0.5%
          const changeFactor = 1 + (Math.random() * 0.01 - 0.005);
          const newRawPrice = item.rawPrice * changeFactor;
          const isUp = newRawPrice >= item.rawPrice;
          
          item.rawPrice = newRawPrice;
          
          // Format based on value
          if (newRawPrice > 1000) {
            item.price = newRawPrice.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          } else if (newRawPrice > 10) {
            item.price = newRawPrice.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          } else {
            item.price = newRawPrice.toLocaleString('tr-TR', { minimumFractionDigits: 3, maximumFractionDigits: 4 });
          }
          
          item.up = isUp;
          
          // Generate pseudo change %
          let currentChangeNum = parseFloat(item.change.replace(',', '.').replace('%', '').replace('+', ''));
          if (isNaN(currentChangeNum)) currentChangeNum = 0;
          const newChange = currentChangeNum + (isUp ? Math.random() * 0.2 : -Math.random() * 0.2);
          item.change = (newChange > 0 ? '+' : '') + newChange.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '%';
          
          newItems[randomIndex] = item;
          
          setFlashingPairs(prev => ({ ...prev, [item.pair]: isUp ? 'up' : 'down' }));
          
          // Remove flash after a short duration
          setTimeout(() => {
            setFlashingPairs(prev => {
              const next = { ...prev };
              delete next[item.pair];
              return next;
            });
          }, 600);
        }
        
        return newItems;
      });
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-exchange-dark text-content-main selection:bg-exchange-primary selection:text-black overflow-hidden overflow-x-hidden">
      
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center ${scrolled ? 'pt-2 md:pt-4 px-2 md:px-4' : 'px-4 md:px-6 pt-4'}`}
      >
        <div className={`w-full max-w-[88rem] mx-auto flex items-center justify-between transition-all duration-500 relative before:absolute before:inset-0 before:-z-10 before:rounded-2xl md:before:rounded-[100px] before:transition-opacity before:duration-500 ${scrolled ? 'bg-exchange-dark/80 backdrop-blur-2xl border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-2xl md:rounded-[100px] px-4 py-2.5 lg:px-6 before:opacity-100 before:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'py-4 before:opacity-0'}`}>
          <div className="flex items-center gap-8 lg:gap-12 relative z-10">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <LogoIcon className="w-8 h-8 md:w-9 md:h-9 text-exchange-primary relative z-10 drop-shadow-[0_0_8px_rgba(252,213,53,0.5)]" />
                <div className="absolute inset-0 bg-exchange-primary/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-tight text-content-main font-display drop-shadow-md">Ephesus</span>
            </motion.div>
            
            <div className="hidden lg:flex items-center bg-black/20 rounded-full p-1 border border-white/5">
              {['Piyasalar', 'Al-Sat', 'Vadeli İşlemler', 'Ekosistem'].map((link, i) => (
                <a key={link} href="#" className={`relative px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 group ${i === 0 ? 'text-exchange-primary bg-white/5' : 'text-exchange-muted hover:text-content-main'}`}>
                  <span className="relative z-10">{link}</span>
                  {i !== 0 && <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>}
                  {i === 0 && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-exchange-primary rounded-full shadow-[0_0_8px_rgba(252,213,53,0.8)]"></span>}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center relative z-10">
            <div className="flex items-center gap-1.5 md:gap-3 mr-2 md:mr-6">
              <button 
                onClick={toggleTheme}
                className="p-2 md:p-2.5 rounded-full text-exchange-muted hover:text-content-main hover:bg-white/5 hover:backdrop-blur-md transition-all duration-300 border border-transparent hover:border-white/10"
                aria-label="Tema Değiştir"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 md:w-5 md:h-5 text-[#FCD535] drop-shadow-[0_0_5px_rgba(252,213,53,0.5)]" /> : <Moon className="w-4 h-4 md:w-5 md:h-5" />}
              </button>
              <div className="hidden sm:block w-[1px] h-6 bg-border-medium mx-1"></div>
              <a href="#" className="hidden sm:flex text-sm font-semibold text-content-main hover:text-exchange-primary transition-colors px-4 py-2 rounded-full hover:bg-white/5">Giriş Yap</a>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-exchange-primary text-black text-xs md:text-sm font-extrabold px-5 md:px-7 py-2.5 md:py-3 rounded-full hover:bg-exchange-primary-hover transition-all duration-300 shadow-[0_0_15px_rgba(252,213,53,0.3)] hover:shadow-[0_0_25px_rgba(252,213,53,0.6)] border border-exchange-primary/50 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 translate-x-[-150%] group-hover:animate-[data-stream_1s_ease-in-out]"></div>
              <span className="relative z-10">Kayıt Ol</span>
            </motion.button>
            <button 
              className="lg:hidden ml-3 md:ml-4 text-content-main p-2 hover:bg-white/10 rounded-full transition-colors border border-transparent hover:border-white/10 relative overflow-hidden group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="absolute inset-0 bg-exchange-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {isMobileMenuOpen ? <X className="w-5 h-5 relative z-10" /> : <Menu className="w-5 h-5 relative z-10" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div 
        className={`fixed inset-0 z-[90] bg-exchange-dark/40 backdrop-blur-[30px] lg:hidden flex flex-col pt-32 px-6 transition-all duration-500 ease-[0.22,1,0.36,1] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        initial={false}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-exchange-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-exchange-green/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="flex flex-col gap-6 w-full text-xl md:text-2xl font-display font-bold relative z-10">
          {['Piyasalar', 'Al-Sat', 'Vadeli İşlemler', 'Ekosistem'].map((link, i) => (
            <motion.a 
              key={link} 
              href="#" 
              className={`pb-4 border-b border-white/5 transition-all flex items-center justify-between group ${i === 0 ? 'text-exchange-primary' : 'text-content-main hover:text-exchange-primary hover:pl-2'}`}
              initial={{ x: -30, opacity: 0 }}
              animate={isMobileMenuOpen ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
              transition={{ delay: isMobileMenuOpen ? i * 0.1 : 0, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="drop-shadow-sm">{link}</span>
              <ArrowRight className={`w-5 h-5 transition-transform ${i === 0 ? 'text-exchange-primary opacity-100' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`} />
            </motion.a>
          ))}
          <motion.div 
            className="flex flex-col gap-4 mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={isMobileMenuOpen ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ delay: isMobileMenuOpen ? 0.4 : 0, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#" className="py-3.5 text-center text-sm tracking-wide text-content-main bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-colors border border-white/5">GİRİŞ YAP</a>
            <a href="#" className="py-3.5 text-center text-sm tracking-wide text-black bg-exchange-primary rounded-2xl font-extrabold hover:bg-exchange-primary-hover shadow-[0_0_20px_rgba(252,213,53,0.4)] border border-exchange-primary/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 translate-x-[-150%] animate-[data-stream_3s_ease-in-out_infinite]"></div>
              <span className="relative z-10">KAYIT OL</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 max-w-[88rem] mx-auto w-full min-h-[100dvh] lg:min-h-[500px] flex items-center justify-center">
        {/* Background Gradients */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-exchange-primary/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"
        ></motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10 w-full pt-8 md:pt-0">
          {/* Left Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex-1 max-w-2xl text-center lg:text-left"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] sm:leading-[1.1] md:leading-[1.1] lg:leading-[1.1] mb-4 md:mb-6 tracking-tight text-content-main font-display">
              Geleceğin Finans <br className="hidden sm:block" />
              Dünyasına <span className="text-exchange-primary">Adım Atın</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-exchange-muted text-base sm:text-lg md:text-xl mb-8 md:mb-10 leading-relaxed font-medium px-4 lg:px-0">
              Türkiye'nin ve dünyanın en hızlı büyüyen borsasında, kripto paraları ve hisse senetlerini tek bir platformda güvenle alıp satın. Milyonlarca kullanıcıya katılın.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mb-8 mx-auto lg:mx-0 px-4 sm:px-0">
              <div className="flex-1 relative group">
                <input 
                  type="email" 
                  placeholder="E-posta adresiniz veya Telefon Numaranız" 
                  className="w-full bg-exchange-card border border-border-medium rounded-lg px-4 py-3.5 md:py-4 text-sm md:text-base text-content-main placeholder-exchange-muted focus:outline-none focus:border-exchange-primary transition-colors group-hover:border-border-medium"
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-exchange-primary text-black font-bold px-6 md:px-8 py-3.5 md:py-4 rounded-lg hover:bg-exchange-primary-hover transition-colors whitespace-nowrap flex items-center justify-center gap-2 text-sm md:text-base"
              >
                Hemen Başla
              </motion.button>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center lg:justify-start items-center gap-4 md:gap-6 text-xs md:text-sm text-exchange-muted font-medium">
              <div className="flex items-center gap-1.5 md:gap-2"><ShieldCheck className="w-4 h-4 text-exchange-green"/> Banka Düzeyinde Güvenlik</div>
              <div className="flex items-center gap-1.5 md:gap-2"><CreditCard className="w-4 h-4 text-exchange-primary"/> Hızlı Para Yatırma</div>
            </motion.div>
          </motion.div>
          
          {/* Right Content / Graphics */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full relative mt-8 lg:mt-0 max-w-2xl mx-auto lg:max-w-none"
          >
            <div className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-square bg-exchange-card/30 border border-border-subtle rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="object-cover absolute inset-0 w-full h-full opacity-50 mix-blend-screen"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-exchange-dark via-exchange-dark/80 to-transparent z-10"></div>
              
              {/* Floating Mock UI Element */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-8 md:left-8 md:right-8 z-20">
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="w-full relative group cursor-crosshair"
                >
                  <div className="bg-exchange-card/85 backdrop-blur-xl border border-border-medium group-hover:border-exchange-green/30 p-4 sm:p-5 md:p-7 rounded-[1rem] md:rounded-2xl shadow-[0_12px_40px_rgb(0,0,0,0.4)] group-hover:shadow-[0_20px_60px_rgba(20,241,149,0.15)] transition-all duration-500 overflow-hidden relative z-10 w-full h-full">
                    {/* Decorative glow inside card */}
                    <div className="absolute -top-16 -right-16 w-32 h-32 md:w-48 md:h-48 bg-exchange-green/20 group-hover:bg-exchange-green/40 transition-colors duration-700 blur-3xl rounded-full pointer-events-none"></div>

                    <div className="flex justify-between items-center mb-4 md:mb-6 relative z-10">
                      <div className="flex items-center gap-2.5 md:gap-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#F7931A] to-[#D67B10] flex items-center justify-center shadow-lg shadow-[#F7931A]/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                          <span className="text-content-main font-bold text-sm sm:text-lg md:text-xl">₿</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-content-main text-sm sm:text-base md:text-lg font-display tracking-tight border-b border-transparent leading-none sm:leading-normal">
                            BTC <span className="text-exchange-muted font-normal text-xs sm:text-sm mb-0.5 inline-block">/ USDT</span>
                          </h4>
                          <div className="text-[10px] sm:text-xs md:text-sm text-exchange-muted font-medium sm:mt-0.5 leading-none sm:leading-normal">Bitcoin</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-base sm:text-xl md:text-2xl font-bold text-exchange-green font-display tabular-nums tracking-tight leading-none sm:leading-normal group-hover:animate-pulse">$64.230,50</div>
                        <div className="text-[10px] sm:text-xs md:text-sm text-exchange-green font-medium bg-exchange-green/10 inline-block px-1.5 sm:px-2 py-0.5 rounded-md mt-1 group-hover:bg-exchange-green/20 transition-colors">+2,45%</div>
                      </div>
                    </div>
                    
                    <div className="h-14 sm:h-20 md:h-28 w-full relative z-10 mt-2 sm:mt-0 group">
                      <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                        <defs>
                          <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-exchange-green)" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="var(--color-exchange-green)" stopOpacity="0" />
                          </linearGradient>
                          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                          </filter>
                        </defs>
                        
                        {/* Background Grid Lines */}
                        <g className="text-content-main/5 transition-opacity duration-500 group-hover:text-content-main/10" stroke="currentColor" strokeWidth="0.5">
                          <line x1="0" y1="12.5" x2="100" y2="12.5" strokeDasharray="2 2" />
                          <line x1="0" y1="25" x2="100" y2="25" strokeDasharray="2 2" />
                          <line x1="0" y1="37.5" x2="100" y2="37.5" strokeDasharray="2 2" />
                          
                          <line x1="25" y1="0" x2="25" y2="50" strokeDasharray="2 2" />
                          <line x1="50" y1="0" x2="50" y2="50" strokeDasharray="2 2" />
                          <line x1="75" y1="0" x2="75" y2="50" strokeDasharray="2 2" />
                        </g>

                        {/* Interactive Vertical Line */}
                        <line x1="72.72" y1="0" x2="72.72" y2="50" stroke="var(--color-exchange-green)" strokeWidth="0.5" strokeDasharray="3 3" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <circle cx="72.72" cy="10" r="2" fill="var(--color-exchange-dark)" stroke="var(--color-exchange-green)" strokeWidth="1" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Interactive Vertical Line 2 */}
                        <line x1="90.9" y1="0" x2="90.9" y2="50" stroke="var(--color-exchange-green)" strokeWidth="0.5" strokeDasharray="3 3" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                        <circle cx="90.9" cy="17.5" r="2" fill="var(--color-exchange-dark)" stroke="var(--color-exchange-green)" strokeWidth="1" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />

                        <motion.path 
                          d="M 0 30 C 4.5 30, 4.5 37.5, 9.09 37.5 C 13.6 37.5, 13.6 27.5, 18.18 27.5 C 22.7 27.5, 22.7 20, 27.27 20 C 31.8 20, 31.8 32.5, 36.36 32.5 C 40.9 32.5, 40.9 25, 45.45 25 C 50 25, 50 12.5, 54.54 12.5 C 59 12.5, 59 27.5, 63.63 27.5 C 68.1 27.5, 68.1 10, 72.72 10 C 77.2 10, 77.2 2.5, 81.81 2.5 C 86.3 2.5, 86.3 17.5, 90.9 17.5 C 95.4 17.5, 95.4 7.5, 100 7.5 L 100 50 L 0 50 Z" 
                          fill="url(#chartGradient)"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                          className="group-hover:opacity-80 transition-opacity duration-500"
                        />
                        <motion.path 
                          d="M 0 30 C 4.5 30, 4.5 37.5, 9.09 37.5 C 13.6 37.5, 13.6 27.5, 18.18 27.5 C 22.7 27.5, 22.7 20, 27.27 20 C 31.8 20, 31.8 32.5, 36.36 32.5 C 40.9 32.5, 40.9 25, 45.45 25 C 50 25, 50 12.5, 54.54 12.5 C 59 12.5, 59 27.5, 63.63 27.5 C 68.1 27.5, 68.1 10, 72.72 10 C 77.2 10, 77.2 2.5, 81.81 2.5 C 86.3 2.5, 86.3 17.5, 90.9 17.5 C 95.4 17.5, 95.4 7.5, 100 7.5" 
                          fill="none" 
                          stroke="var(--color-exchange-green)" 
                          strokeWidth="2.5"
                          vectorEffect="non-scaling-stroke"
                          filter="url(#glow)"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
                        />
                      </svg>
                      {/* Pulsing indicator at the end of the line chart */}
                      <motion.div 
                         className="absolute w-2 h-2 md:w-3 md:h-3 bg-exchange-green rounded-full shadow-[0_0_15px_var(--color-exchange-green)] z-10 group-hover:scale-150 transition-transform duration-500"
                         style={{ right: '-3px', top: '15%', marginTop: '-4px' }}
                         initial={{ scale: 0, opacity: 0 }}
                         animate={{ scale: [1, 1.3, 1], opacity: [1, 0.8, 1] }}
                         transition={{ scale: { delay: 2.5, duration: 2, repeat: Infinity }, opacity: { delay: 2.5, duration: 2, repeat: Infinity } }}
                      >
                        <div className="absolute inset-0 rounded-full bg-exchange-green animate-ping opacity-75"></div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Ticker Section */}
      <section className="bg-exchange-card border-y border-border-subtle overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="w-full py-4 md:py-6"
        >
          <div className="flex marquee-track gap-4 md:gap-6 px-4">
            {[...marketItems, ...marketItems, ...marketItems, ...marketItems].map((coin, index) => {
              const isFlashing = flashingPairs[coin.pair];
              const flashClass = isFlashing === 'up' 
                ? 'bg-exchange-green/10 border-exchange-green/50 shadow-[0_0_15px_rgba(14,203,129,0.3)]' 
                : isFlashing === 'down' 
                ? 'bg-exchange-red/10 border-exchange-red/50 shadow-[0_0_15px_rgba(246,70,93,0.3)]' 
                : 'bg-exchange-card/50 border-border-subtle hover:bg-exchange-hover hover:border-border-medium';
                
              return (
              <motion.div 
                key={`${coin.pair}-${index}`} 
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`flex-none w-[260px] md:w-[300px] flex flex-col p-4 md:p-5 rounded-2xl transition-all duration-300 cursor-pointer group border relative overflow-hidden shadow-lg hover:shadow-xl ${flashClass}`}
              >
                {/* Visual Data Stream line */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl z-0">
                  <div className="absolute -inset-full h-full w-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-[data-stream_2s_linear_infinite]" style={{ animationDelay: `${index * 0.15}s` }}></div>
                </div>

                {/* Background glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 ${coin.up ? 'from-exchange-green to-transparent' : 'from-exchange-red to-transparent'} z-0`}></div>

                <div className="flex justify-between items-center mb-3 md:mb-4 relative z-10">
                  <div className="flex items-center gap-2.5 md:gap-3">
                    <div className="w-8 h-8 rounded-full bg-exchange-dark flex items-center justify-center font-bold text-xs border border-border-subtle group-hover:scale-110 transition-transform duration-300">
                      {coin.pair.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-content-main text-sm md:text-base leading-tight uppercase relative inline-block">
                        {coin.pair}
                        {/* Status indicator dot */}
                        <span className={`absolute -right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full opacity-50 group-hover:animate-ping ${coin.up ? 'bg-exchange-green' : 'bg-exchange-red'}`}></span>
                      </div>
                      <div className="text-[10px] md:text-xs text-exchange-muted font-medium leading-tight mt-0.5">{coin.name}</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-end relative z-10">
                  <div>
                    <div className={`text-xl md:text-2xl font-bold mb-1.5 tabular-nums tracking-tight group-hover:text-glow transition-colors duration-300 relative ${isFlashing === 'up' ? 'text-exchange-green' : isFlashing === 'down' ? 'text-exchange-red' : 'text-content-main'}`}>
                      <span className="opacity-0 group-hover:opacity-100 absolute -left-3 top-1/2 -translate-y-1/2 text-xs text-content-main/30 transition-opacity">≈</span>
                      ${coin.price}
                    </div>
                    <div className={`text-xs md:text-sm font-bold flex items-center gap-1 px-2 py-1 rounded-md inline-flex ${coin.up ? 'bg-exchange-green/10 text-exchange-green' : 'bg-exchange-red/10 text-exchange-red'}`}>
                      {coin.up ? <ArrowUpRight className="w-3 h-3 md:w-3.5 md:h-3.5" /> : <ArrowDownRight className="w-3 h-3 md:w-3.5 md:h-3.5" />}
                      {coin.change}
                    </div>
                  </div>
                  
                  {/* Mini Sparkline Chart */}
                  <div className="w-16 h-8 md:w-20 md:h-10 relative opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                     <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                        {coin.up ? (
                          <>
                           <defs>
                             <linearGradient id={`grad-up-${index}`} x1="0" x2="0" y1="0" y2="1">
                               <stop offset="0%" stopColor="var(--color-exchange-green)" stopOpacity="0.4" />
                               <stop offset="100%" stopColor="var(--color-exchange-green)" stopOpacity="0" />
                             </linearGradient>
                           </defs>
                           <motion.path 
                              d={`M 0 35 L 15 25 L 30 30 L 45 15 L 60 20 L 75 10 L 85 15 L 100 5`} 
                              fill={`url(#grad-up-${index})`}
                              initial={{ opacity: 0, y: 5 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: index * 0.1 }}
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                           />
                           <motion.path 
                              d={`M 0 35 L 15 25 L 30 30 L 45 15 L 60 20 L 75 10 L 85 15 L 100 5`}
                              fill="none" 
                              stroke="var(--color-exchange-green)" 
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              vectorEffect="non-scaling-stroke"
                              initial={{ pathLength: 0, opacity: 0 }}
                              whileInView={{ pathLength: 1, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: index * 0.1, ease: "easeInOut" }}
                           />
                           <motion.circle 
                              cx="100" cy="5" r="2.5" 
                              fill="var(--color-exchange-dark)"
                              stroke="var(--color-exchange-green)"
                              strokeWidth="1.5"
                              initial={{ scale: 0, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.5, delay: index * 0.1 + 1.2 }}
                              className="origin-center"
                           />
                          </>
                        ) : (
                          <>
                           <defs>
                             <linearGradient id={`grad-down-${index}`} x1="0" x2="0" y1="0" y2="1">
                               <stop offset="0%" stopColor="var(--color-exchange-red)" stopOpacity="0.4" />
                               <stop offset="100%" stopColor="var(--color-exchange-red)" stopOpacity="0" />
                             </linearGradient>
                           </defs>
                           <motion.path 
                              d={`M 0 5 L 15 15 L 30 10 L 45 25 L 60 20 L 75 30 L 85 25 L 100 35`}
                              fill={`url(#grad-down-${index})`}
                              initial={{ opacity: 0, y: -5 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: index * 0.1 }}
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                           />
                           <motion.path 
                              d={`M 0 5 L 15 15 L 30 10 L 45 25 L 60 20 L 75 30 L 85 25 L 100 35`}
                              fill="none" 
                              stroke="var(--color-exchange-red)" 
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              vectorEffect="non-scaling-stroke"
                              initial={{ pathLength: 0, opacity: 0 }}
                              whileInView={{ pathLength: 1, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: index * 0.1, ease: "easeInOut" }}
                           />
                           <motion.circle 
                              cx="100" cy="35" r="2.5" 
                              fill="var(--color-exchange-dark)"
                              stroke="var(--color-exchange-red)"
                              strokeWidth="1.5"
                              initial={{ scale: 0, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.5, delay: index * 0.1 + 1.2 }}
                              className="origin-center"
                           />
                          </>
                        )}
                     </svg>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Info Section - Why Ephesus */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-exchange-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-[88rem] mx-auto w-full relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={blurReveal}
            className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-content-main tracking-tight font-display">
              Neden <span className="text-exchange-primary text-glow">Ephesus?</span>
            </h2>
            <p className="text-exchange-muted text-sm sm:text-base md:text-lg">
              Yatırımlarınızı yönetmek için ihtiyacınız olan tüm araçlar, rakipsiz bir deneyim ve güvenlik ile tek platformda.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={slideUpRotate} whileHover={{ y: -10 }} className="bg-exchange-card rounded-2xl p-8 border border-border-subtle hover:border-exchange-primary/30 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-exchange-primary/5 rounded-full group-hover:bg-exchange-primary/10 transition-colors"></div>
              <PieChart className="w-12 h-12 text-exchange-primary mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-content-main mb-4 relative z-10 font-display">Geniş Ürün Yelpazesi</h3>
              <p className="text-exchange-muted text-sm leading-relaxed relative z-10">
                Kripto paralar, ABD hisse senetleri, ETF'ler ve emtialar. Global hisse piyasalarına ve dijital varlıklara tek bir hesaptan ulaşın.
              </p>
            </motion.div>

            <motion.div variants={slideUpRotate} whileHover={{ y: -10 }} className="bg-exchange-card rounded-2xl p-8 border border-border-subtle hover:border-exchange-green/30 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-exchange-green/5 rounded-full group-hover:bg-exchange-green/10 transition-colors"></div>
              <ShieldCheck className="w-12 h-12 text-exchange-green mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-content-main mb-4 relative z-10 font-display">Sarsılmaz Güvenlik</h3>
              <p className="text-exchange-muted text-sm leading-relaxed relative z-10">
                Gelişmiş soğuk cüzdan depolaması, çoklu imza (multi-sig) teknolojisi ve dünyanın önde gelen güvenlik şirketleriyle entegrasyonlar. Varlıklarınız her zaman güvende.
              </p>
            </motion.div>

            <motion.div variants={slideUpRotate} whileHover={{ y: -10 }} className="bg-exchange-card rounded-2xl p-8 border border-border-subtle hover:border-border-medium transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-bg-subtle rounded-full group-hover:bg-bg-medium transition-colors"></div>
              <BarChart3 className="w-12 h-12 text-content-main mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-content-main mb-4 relative z-10 font-display">Profesyonel Araçlar</h3>
              <p className="text-exchange-muted text-sm leading-relaxed relative z-10">
                TradingView entegrasyonu, API destekli algoritmik ticaret ve gelişmiş emir defterleriyle piyasayı profesyoneller gibi yönetin.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section - Ecosystem */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-exchange-card/30 border-y border-border-subtle relative overflow-hidden">
        <div className="max-w-[88rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={slideInLeft}
            className="relative z-10 text-center lg:text-left"
          >
            <span className="block text-exchange-primary text-xs sm:text-sm mb-3 md:mb-4 uppercase tracking-widest font-bold">HER YERDE YANINIZDA</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 md:mb-6 tracking-tight text-content-main font-display">
              Cebinizdeki Güçlü Borsa
            </h2>
            <p className="text-exchange-muted text-base sm:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
              Ephesus mobil uygulaması ile nerede olursanız olun portföyünüzü mükemmel bir deneyimle yönetin. Karanlık ve aydınlık mod destekli akıcı arayüz ile finansal özgürlüğün tadını çıkarın.
            </p>
            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-left inline-block lg:block mx-auto">
              {['Anlık fiyat bildirimleri ve alarm kurma', 'Saniyeler içinde bakiye yükleme', 'Canlı müşteri desteği 7/24'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-content-main font-medium text-sm md:text-base">
                  <div className="bg-exchange-green/20 p-1 md:p-1.5 rounded-full"><ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-exchange-green"/></div>
                  {item}
                </li>
              ))}
            </ul>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black font-bold px-6 md:px-8 py-3 md:py-3.5 rounded-lg hover:bg-gray-200 transition-colors inline-flex items-center gap-2 text-sm md:text-base"
            >
              Uygulamayı İndir <ArrowRight className="w-4 h-4 md:w-5 md:h-5"/>
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={slideInRight}
            className="relative w-full max-w-[320px] mx-auto perspective-1000 mt-8 lg:mt-0"
          >
            {/* Phone Shadow & Glow */}
            <div className="absolute inset-0 bg-exchange-primary/20 blur-[60px] md:blur-[80px] rounded-full translate-y-10"></div>
            
            {/* Scalable Container for extreme small screens */}
            <div className="relative w-[280px] sm:w-[300px] h-[550px] sm:h-[600px] mx-auto z-10 origin-top">
              {/* Hardware Buttons */}
              <div className="absolute -left-[3px] top-[90px] sm:top-[100px] w-[3px] h-[25px] bg-[#333] rounded-l-md"></div>
              <div className="absolute -left-[3px] top-[130px] sm:top-[140px] w-[3px] h-[45px] bg-[#333] rounded-l-md"></div>
              <div className="absolute -left-[3px] top-[185px] sm:top-[195px] w-[3px] h-[45px] bg-[#333] rounded-l-md"></div>
              <div className="absolute -right-[3px] top-[150px] sm:top-[160px] w-[3px] h-[65px] bg-[#333] rounded-r-md"></div>
              
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-black rounded-[40px] sm:rounded-[48px] p-[5px] sm:p-[6px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#333]">
                {/* Phone Screen */}
                <div className="relative w-full h-full bg-exchange-dark rounded-[36px] sm:rounded-[42px] overflow-hidden flex flex-col border border-border-medium group">
                  
                  {/* Screen Background Effect */}
                  <div className="absolute inset-0 bg-[url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4')] bg-cover opacity-5 mix-blend-screen group-hover:scale-105 transition-transform duration-700 pointer-events-none"></div>

                  {/* Dynamic Island / Notch Area */}
                  <div className="absolute top-2 inset-x-0 flex justify-center z-50">
                    <div className="w-[80px] sm:w-[100px] h-[24px] sm:h-[30px] bg-black rounded-full flex items-center px-3 sm:px-4 justify-between shadow-sm">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-exchange-green/80 animate-pulse"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-bg-medium border border-border-subtle"></div>
                    </div>
                  </div>

                  {/* Status Bar */}
                  <div className="h-8 sm:h-10 w-full flex justify-between items-center px-5 sm:px-6 pt-1 text-[9px] sm:text-[10px] font-medium text-content-main z-40 relative">
                    <span>9:41</span>
                    <div className="flex items-center gap-1 sm:gap-1.5 opacity-80">
                      <svg width="12" height="9" viewBox="0 0 14 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 8H2V10H0V8ZM3 6H5V10H3V6ZM6 4H8V10H6V4ZM9 2H11V10H9V2ZM12 0H14V10H12V0Z"/></svg>
                      <svg className="hidden sm:block" width="10" height="8" viewBox="0 0 12 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6 1.5C3.5 1.5 1.5 2.5 0 4L6 10L12 4C10.5 2.5 8.5 1.5 6 1.5Z"/></svg>
                      <svg width="16" height="8" viewBox="0 0 20 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 2C0 0.89543 0.89543 0 2 0H16C17.1046 0 18 0.89543 18 2V8C18 9.10457 17.1046 10 16 10H2C0.89543 10 0 9.10457 0 8V2ZM2 2V8H14V2H2ZM16 2V8L18 8V2H16Z" fillRule="evenodd" clipRule="evenodd"/></svg>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="flex-1 flex flex-col pt-2 sm:pt-4 px-4 sm:px-5 pb-4 sm:pb-5 relative z-10 min-h-0">
                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-exchange-card border border-border-medium flex items-center justify-center">
                        <LogoIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-exchange-primary" />
                      </div>
                    </div>
                    
                    <div className="text-[10px] sm:text-xs text-exchange-muted mb-0.5 sm:mb-1 font-medium">Toplam Bakiye</div>
                    <div className="text-2xl sm:text-3xl font-bold text-content-main mb-4 sm:mb-6 font-display tracking-tight leading-none sm:leading-normal shrink-0">
                      $124.502<span className="text-exchange-muted text-base sm:text-lg">,00</span>
                    </div>
                    
                    <div className="flex gap-2.5 sm:gap-3 mb-5 sm:mb-8 shrink-0">
                      <div className="flex-1 bg-exchange-primary text-black text-center py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-sm font-bold shadow-lg shadow-exchange-primary/20 cursor-pointer">Yatır</div>
                      <div className="flex-1 bg-bg-medium text-content-main text-center py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-sm font-bold backdrop-blur-md cursor-pointer border border-border-subtle">Çek</div>
                    </div>

                    <div className="flex justify-between items-end mb-3 sm:mb-4 shrink-0">
                      <h4 className="text-content-main font-bold text-[12px] sm:text-sm">Varlıklarım</h4>
                      <span className="text-exchange-muted text-[10px] sm:text-xs cursor-pointer">Tümünü Gör</span>
                    </div>
                    
                    <div className="space-y-2 sm:space-y-3 flex-1 overflow-visible sm:overflow-hidden min-h-0 pb-2 custom-scrollbar">
                      {marketItems.slice(0,3).map((v, i) => (
                        <div key={i} className="flex justify-between items-center bg-exchange-card/80 backdrop-blur-sm p-2.5 sm:p-3.5 rounded-[12px] sm:rounded-2xl border border-border-subtle shrink-0">
                          <div className="flex gap-2 sm:gap-3 items-center">
                            <div className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-[9px] sm:text-[10px] ${i===0? 'bg-[#F7931A] text-content-main shadow-lg shadow-[#F7931A]/20' : i===1? 'bg-[#627EEA] text-content-main shadow-lg shadow-[#627EEA]/20' : 'bg-[#14F195] text-black shadow-lg shadow-[#14F195]/20'}`}>
                              {v.pair.charAt(0)}
                            </div>
                            <div>
                              <div className="font-bold text-content-main text-xs sm:text-sm leading-tight">{v.pair}</div>
                              <div className="text-[9px] sm:text-[10px] text-exchange-muted font-medium mt-0.5 leading-tight">{v.name}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-content-main text-xs sm:text-sm leading-tight">${v.price}</div>
                            <div className={`text-[9px] sm:text-[10px] font-medium mt-0.5 leading-tight ${v.up ? 'text-exchange-green' : 'text-exchange-red'}`}>{v.change}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom App Navigation */}
                  <div className="h-14 sm:h-16 bg-exchange-card/95 backdrop-blur-xl border-t border-border-subtle flex justify-around items-center px-2 pb-2 sm:pb-3 relative z-50 shrink-0">
                     <motion.div whileTap={{ scale: 0.85 }} className="flex flex-col items-center gap-1 group cursor-pointer w-12 pt-2">
                       <PieChart className="w-4 h-4 sm:w-5 sm:h-5 text-exchange-primary" />
                       <div className="w-1 h-1 rounded-full bg-exchange-primary"></div>
                     </motion.div>
                     <motion.div whileTap={{ scale: 0.85 }} className="flex flex-col items-center gap-1 group cursor-pointer w-12 pt-2">
                       <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-exchange-muted group-hover:text-content-main transition-colors" />
                     </motion.div>
                     <motion.div whileTap={{ scale: 0.9 }} className="flex flex-col items-center gap-1 group cursor-pointer">
                       <div className="w-9 h-9 sm:w-10 sm:h-10 bg-exchange-primary rounded-full flex items-center justify-center shadow-lg shadow-exchange-primary/20 -mt-4 sm:-mt-5 border-[3px] sm:border-4 border-exchange-dark">
                         <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1V13M1 7H13" stroke="black" strokeWidth="2" strokeLinecap="round"/></svg>
                       </div>
                     </motion.div>
                     <motion.div whileTap={{ scale: 0.85 }} className="flex flex-col items-center gap-1 group cursor-pointer w-12 pt-2">
                       <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-exchange-muted group-hover:text-content-main transition-colors" />
                     </motion.div>
                     <motion.div whileTap={{ scale: 0.85 }} className="flex flex-col items-center gap-1 group cursor-pointer w-12 pt-2">
                       <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-exchange-muted group-hover:text-content-main transition-colors" />
                     </motion.div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-1 sm:bottom-1.5 inset-x-0 flex justify-center z-50">
                    <div className="w-1/3 h-[3px] sm:h-1 bg-border-medium rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* 3 Steps Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative">
        <div className="max-w-[88rem] mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={zoomOut}
            className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-content-main tracking-tight font-display">
              3 Adımda <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCD535] to-[#F7931A]">Kriptoya</span> Adım Atın
            </h2>
            <p className="text-exchange-muted text-lg md:text-xl">
              Dakikalar içinde hesabınızı oluşturun ve işlem yapmaya başlayın.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
          >
            <div className="hidden md:block absolute top-[45px] left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-transparent via-border-medium to-transparent -z-10"></div>
            
            {[
              { icon: UserPlus, title: "Hesap Oluşturun", desc: "Zahmetsizce kaydolun ve kimliğinizi 2 dakikada doğrulayın." },
              { icon: CreditCard, title: "Para Yatırın", desc: "Banka havalesi, kredi kartı veya kripto transferi ile bakiye yükleyin." },
              { icon: TrendingUp, title: "İşlem Yapmaya Başlayın", desc: "Favori kripto paralarınızı alın, satın ve sepetinizi yönetin." }
            ].map((step, idx) => (
              <motion.div key={idx} variants={zoomOut} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-exchange-card border border-border-subtle flex items-center justify-center mb-6 relative group hover:border-exchange-primary/50 transition-colors">
                  <div className="absolute inset-0 rounded-full bg-exchange-primary/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <step.icon className="w-10 h-10 text-exchange-primary relative z-10" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#FCD535] text-black font-bold flex items-center justify-center text-sm shadow-[0_0_15px_rgba(252,213,53,0.5)]">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-content-main mb-3 font-display">{step.title}</h3>
                <p className="text-exchange-muted">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-exchange-card/30 border-y border-border-subtle relative overflow-hidden">
        <div className="max-w-[48rem] mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={blurReveal}
            className="text-center mb-10"
          >
            <Calculator className="w-12 h-12 text-exchange-primary mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-content-main font-display">Hızlı Kazanç Hesaplama</h2>
            <p className="text-exchange-muted text-lg">Gerçek zamanlı fiyatlarla yatırım potansiyelinizi görün.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-exchange-dark/80 backdrop-blur-xl border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
              <div className="w-full flex-1 bg-exchange-card border border-border-subtle rounded-2xl p-4">
                <span className="text-exchange-muted text-xs font-bold uppercase tracking-wider mb-2 block">VERECEĞİNİZ MİKTAR</span>
                <div className="flex justify-between items-center">
                  <input type="text" defaultValue="1000" className="bg-transparent text-2xl font-bold text-content-main outline-none w-1/2" />
                  <div className="flex items-center gap-2 bg-exchange-dark px-3 py-1.5 rounded-lg border border-border-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold">US</div>
                    <span className="font-bold text-content-main">USD</span>
                  </div>
                </div>
              </div>
              
              <div className="w-10 h-10 rounded-full bg-border-medium flex items-center justify-center shrink-0 mx-auto rotate-90 md:rotate-0">
                <ArrowRight className="w-5 h-5 text-exchange-muted" />
              </div>

              <div className="w-full flex-1 bg-exchange-card border border-border-subtle rounded-2xl p-4 relative overflow-hidden group">
                <div className="absolute inset-0 bg-exchange-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-exchange-muted text-xs font-bold uppercase tracking-wider mb-2 block relative z-10">ALACAĞINIZ MİKTAR</span>
                <div className="flex justify-between items-center relative z-10">
                  <span className="text-2xl font-bold text-content-main">0.0155</span>
                  <div className="flex items-center gap-2 bg-exchange-dark px-3 py-1.5 rounded-lg border border-exchange-primary/30 shadow-[0_0_10px_rgba(252,213,53,0.1)]">
                    <div className="w-5 h-5 rounded-full bg-[#F7931A] text-white flex items-center justify-center text-[10px] font-bold">B</div>
                    <span className="font-bold text-content-main">BTC</span>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="w-full py-4 text-black bg-exchange-primary rounded-xl font-extrabold text-lg hover:bg-exchange-primary-hover shadow-[0_0_20px_rgba(252,213,53,0.3)] transition-all flex justify-center items-center gap-2">
              Hemen BTC Al <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Download Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={zoomOut}
          className="max-w-[72rem] mx-auto bg-exchange-card border border-border-medium rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden text-center md:text-left"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-exchange-primary/10 via-transparent to-transparent"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="flex-1 max-w-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-content-main font-display tracking-tight">
                Her Zaman, Her Yerde <br className="hidden md:block" />İşlem Yapın
              </h2>
              <p className="text-exchange-muted text-lg md:text-xl mb-8">
                iOS ve Android için geliştirilmiş ödüllü mobil uygulamamızla kripto portföyünüz her an elinizin altında.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-bg-medium hover:bg-border-subtle border border-border-medium text-content-main py-3.5 px-6 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors">
                  <Download className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-[10px] text-exchange-muted leading-tight">İndirin</div>
                    <div className="leading-tight">App Store</div>
                  </div>
                </button>
                <button className="bg-bg-medium hover:bg-border-subtle border border-border-medium text-content-main py-3.5 px-6 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors">
                  <Smartphone className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-[10px] text-exchange-muted leading-tight">İndirin</div>
                    <div className="leading-tight">Google Play</div>
                  </div>
                </button>
              </div>
              
              <div className="mt-8 flex items-center justify-center md:justify-start gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-exchange-green" />
                  <span className="text-content-main text-sm font-medium">Biyometrik Güvenlik</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-exchange-green" />
                  <span className="text-content-main text-sm font-medium">Anlık Bildirimler</span>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-auto relative perspective-1000">
               <motion.div 
                 initial={{ rotateY: 20, rotateX: 10, y: 50, opacity: 0 }}
                 whileInView={{ rotateY: -15, rotateX: 5, y: 0, opacity: 1 }}
                 transition={{ duration: 1, ease: "easeOut" }}
                 viewport={{ once: true }}
                 className="relative w-48 h-48 md:w-64 md:h-64 mx-auto"
               >
                 {/* QR Code mock */}
                 <div className="absolute inset-0 bg-white p-4 md:p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center ring-4 ring-exchange-dark">
                   <div className="w-full h-full border-4 border-black rounded-lg flex items-center justify-center bg-black">
                     <div className="w-[85%] h-[85%] bg-white flex flex-wrap gap-1 p-2">
                       {/* Mock QR pattern */}
                       {Array.from({length: 49}).map((_, i) => (
                         <div key={i} className={`w-[12%] h-[12%] ${(i%2===0 || i%3===0 || i%5===0) ? 'bg-black' : 'bg-transparent'}`}></div>
                       ))}
                       <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                           <LogoIcon className="w-5 h-5 md:w-8 md:h-8 text-black" />
                         </div>
                       </div>
                     </div>
                   </div>
                   <span className="text-black font-bold mt-3 md:mt-4 text-[10px] md:text-sm tracking-widest text-center leading-tight">İNDİRMEK İÇİN<br/>TARATIN</span>
                 </div>
               </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-8 md:py-12 border-t border-border-medium px-4 md:px-6"
      >
        <div className="max-w-[88rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2">
            <LogoIcon className="w-5 h-5 md:w-6 md:h-6 text-content-main" />
            <span className="text-lg md:text-xl font-bold text-content-main font-display">Ephesus</span>
          </div>
          <div className="text-xs md:text-sm text-exchange-muted text-center md:text-left">
            © 2026 Ephesus Global Inc. Tüm hakları saklıdır.
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
