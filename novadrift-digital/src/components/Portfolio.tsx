import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CardStack, CardStackItem } from './ui/card-stack';
import { SquareArrowOutUpRight } from 'lucide-react';

const projects: CardStackItem[] = [
  {
    id: "ugcgo",
    title: "UGCgo Agency",
    description: "E-ticaret markaları için performans odaklı dikey video ve dönüşüm stratejileri platformu. İzleyiciyi yakalayan dijital mıknatıslar.",
    imageSrc: "/portfolio/ugcgo_mobile.png",
    href: "https://ugcgo-chi.vercel.app",
  },
  {
    id: "ephesus",
    title: "Ephesus Exchange",
    description: "Yeni nesil kripto varlık ve finansal teknoloji platformu. Güçlü altyapı, yüksek hız ve kurumsal düzeyde güvenlik çözümleri.",
    imageSrc: "/portfolio/ephesus.png",
    href: "https://ephesus-beta.vercel.app",
  },
  {
    id: "nutrivia",
    title: "Nutrivia Wellness",
    description: "Lüks ve bütünsel sağlık danışmanlığı için editoryal tasarım. Fonksiyonel tıp ve modern esenlik yaklaşımı.",
    imageSrc: "/portfolio/nutrivia.png",
    href: "https://nutrivia-wellness.vercel.app",
  },
  {
    id: "emlakhiz",
    title: "EmlakHiz Gayrimenkul",
    description: "Yapay zeka destekli, modern gayrimenkul yatırım ve danışmanlık platformu. Hız ve güvenin dijital yüzü.",
    imageSrc: "/portfolio/emlakhiz.png",
    href: "https://emlakhiz.vercel.app",
  },
  {
    id: "arslanhukuk",
    title: "Arslan Global Hukuk",
    description: "Hukuk ve danışmanlık hizmetleri için prestijli, güven veren ve modern dijital kimlik çözümü.",
    imageSrc: "/portfolio/arslan-hukuk.png",
    href: "https://arslan-global-hukuk.vercel.app",
  }
];

export default function Portfolio() {
  const [dimensions, setDimensions] = useState({ width: 700, height: 450 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({ width: width - 32, height: 380 });
      } else if (width < 1024) {
        setDimensions({ width: 600, height: 400 });
      } else {
        setDimensions({ width: 700, height: 450 });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-[#0B0B0B]" id="portfolio">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-10">
          <div className="max-w-2xl px-2 sm:px-0">
            <div className="inline-block px-3 py-1 border border-[#00D1FF] text-[#00D1FF] text-[9px] font-black uppercase tracking-[0.5em] mb-4 md:mb-6">REFERANSLARIMIZ</div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.1] md:leading-none uppercase"
            >
              Ürettiğimiz <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] to-cyan-200 italic">Dijital</span> Sanat
            </motion.h2>
            <p className="text-slate-500 font-light max-w-xl text-base md:text-lg leading-relaxed">
              Her proje bizim için yeni bir hikaye. İşte markalar için tasarladığımız premium deneyimlerden bazıları.
            </p>
          </div>
          <motion.a 
            href="https://wa.me/905000000000" // Placeholder WhatsApp link
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 md:px-10 py-4 md:py-5 border border-[#00D1FF] text-[#00D1FF] uppercase tracking-widest text-[9px] md:text-[10px] font-black hover:bg-[#00D1FF] hover:text-black transition-all whitespace-nowrap shadow-[0_0_30px_rgba(0,209,255,0.15)] ml-2 sm:ml-0"
          >
            Sizin İçin Başlayalım
          </motion.a>
        </div>

        <div className="w-full flex justify-center overflow-x-hidden md:overflow-x-visible">
          <CardStack 
            items={projects}
            cardWidth={dimensions.width}
            cardHeight={dimensions.height}
            autoAdvance={false}
            pauseOnHover
            overlap={dimensions.width < 500 ? 0.25 : 0.4}
            maxVisible={dimensions.width < 500 ? 2 : 3}
            renderCard={(item, { active }) => (
              <div className="relative h-full w-full group overflow-hidden">
                <img 
                  src={item.imageSrc} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <motion.div
                    animate={active ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 10 }}
                  >
                    <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2 md:mb-4">{item.title}</h3>
                    <p className="text-slate-300 font-light text-sm md:text-base max-w-md mb-6 md:mb-8 line-clamp-2">{item.description}</p>
                    
                    {active && item.href && (
                      <motion.a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-[#00D1FF] transition-colors"
                      >
                        SİTEYİ İNCELE
                        <SquareArrowOutUpRight size={14} />
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}
