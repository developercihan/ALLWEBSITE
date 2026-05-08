import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import { RainingLettersBackground, HeroContent } from './components/ui/modern-animated-hero-section';
import { ExpandableCard } from './components/ui/expandable-card';
import WhatsAppButton from './components/WhatsAppButton';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { ArrowRight } from 'lucide-react';

function CtaSection() {
  return (
    <section className="py-20 md:py-24 bg-[#0B0B0B]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-[#161616] border border-white/5 p-8 sm:p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent shadow-[0_0_15px_#00D1FF]"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-[#00D1FF] flex items-center justify-center rotate-45">
                <ArrowRight size={24} className="-rotate-45 text-[#00D1FF]" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8 uppercase tracking-tighter leading-[1.1] md:leading-none">
              Markanızı <span className="text-[#00D1FF] italic">Zirveye</span> Taşıyoruz.
            </h2>
            <p className="text-slate-400 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 md:mb-12 font-light tracking-wide leading-relaxed">
              Rakiplerinizden daha profesyonel görünmek ve dijitalde fark yaratmak için premium stratejilerimizi keşfedin.
            </p>
            <button className="w-full sm:w-auto px-8 md:px-12 py-5 md:py-6 bg-white text-black font-black uppercase tracking-widest text-xs md:text-sm hover:bg-[#00D1FF] hover:text-black transition-all transform hover:scale-105 md:hover:scale-110 active:scale-95 shadow-2xl flex items-center justify-center gap-4 mx-auto">
              Ücretsiz Strateji Görüşmesi
              <ArrowRight size={18} />
            </button>
          </motion.div>
          
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#00D1FF]/10 rounded-full blur-[100px]"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-[100px]"></div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="min-h-screen selection:bg-[#00D1FF] selection:text-black bg-[#0B0B0B] relative">
      <RainingLettersBackground />
      <Navbar />
      <HeroContent />
      <Stats />
      <About />
      <Services />
      <Portfolio />
      
      <section className="py-20 md:py-32 bg-[#0B0B0B] border-y border-white/5 relative overflow-hidden">
        {/* Ambient background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#00D1FF]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 md:mb-24">
              <div className="inline-block px-3 py-1 border border-[#00D1FF] text-[#00D1FF] text-[9px] font-black uppercase tracking-[0.5em] mb-4 md:mb-6">GÜVENİN SESİ</div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[1.1] md:leading-none px-4 sm:px-0">
                Sürecimiz <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 italic">Hakkında</span> Neler Dediler?
              </h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
              {[
                { name: "MEHMET K.", text: "Instagram’dan yazan müşteriler artık direkt fiyat sormuyor. Site sayesinde daha profesyonel görünüyoruz. Gerçek bir dijital dönüşüm.", role: "İŞLETME SAHİBİ" },
                { name: "ELİF T.", text: "Yeni site sonrası kurumsal müşteri dönüşlerimiz ciddi arttı. Premium algı gerçekten fark yaratıyor; artık büyük ligdeyiz.", role: "AJANS KURUCUSU" }
              ].map((testi, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="p-8 sm:p-12 md:p-16 bg-white/5 backdrop-blur-2xl border border-white/10 relative group hover:border-[#00D1FF]/30 transition-all duration-500"
                >
                  {/* Decorative Quote Icon (simulated) */}
                  <div className="absolute top-6 left-6 md:top-8 md:left-8 text-3xl md:text-4xl font-serif text-[#00D1FF] opacity-30 select-none">“</div>
                  
                  <p className="text-slate-300 italic text-xl md:text-2xl mb-8 md:mb-12 leading-relaxed md:leading-loose font-light tracking-tight relative z-10">
                    {testi.text}
                  </p>
                  
                  <div className="flex items-center gap-6 md:gap-8 pt-8 border-t border-white/5">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0B0B0B] border border-white/10 flex items-center justify-center font-black text-[#00D1FF] text-lg md:text-xl transform group-hover:rotate-12 transition-transform duration-500">
                      {testi.name[0]}
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-white font-black text-xs md:text-sm tracking-[0.2em]">{testi.name}</div>
                      <div className="flex items-center gap-2 md:gap-3">
                         <div className="w-4 md:w-6 h-[1px] bg-[#00D1FF]"></div>
                         <div className="text-[#00D1FF] text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]">{testi.role}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#0B0B0B] relative overflow-hidden" id="blog">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-block px-3 py-1 border border-[#00D1FF] text-[#00D1FF] text-[9px] font-black uppercase tracking-[0.5em] mb-4 md:mb-6">BİLGİ MERKEZİ</div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[1.1] md:leading-none">
              Dijital <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 italic">Bilgelik</span>
            </h2>
            <p className="text-slate-500 mt-6 max-w-2xl mx-auto font-light text-sm md:text-base">Markanızı büyütmek ve dijitalde kalıcı bir iz bırakmak için bilmeniz gerekenler.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <ExpandableCard
              title="Bir Markanın Neden Web Sitesi Olmalı?"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
              description="DİJİTAL VARLIK"
            >
              <h4 className="text-white font-black uppercase tracking-tighter text-xl">7/24 Açık Dijital Mağazanız</h4>
              <p>
                Mağazanızın kapıları kapalıyken bile web siteniz müşterileriniz için her zaman açıktır. İster gece yarısı ister sabahın ilk ışıklarında olsun, potansiyel müşterileriniz hizmetlerinizi inceleyebilir, portfolyonuza bakabilir ve sizinle iletişime geçebilir.
              </p>
              <h4 className="text-white font-black uppercase tracking-tighter text-xl">Güven ve Kurumsallık</h4>
              <p>
                Günümüzde bir markanın web sitesinin olmaması, profesyonellikten uzak bir imaj çizebilir. Kaliteli bir web sitesi, markanızın hikayesini anlatmanıza, başarılarınızı sergilemenize ve müşterilerinize "biz buradayız ve işimizi ciddiye alıyoruz" demenize olanak tanır.
              </p>
              <h4 className="text-white font-black uppercase tracking-tighter text-xl">Maliyet ve Verimlilik</h4>
              <p>
                Geleneksel reklam yöntemlerine kıyasla web sitesi, çok daha geniş bir kitleye çok daha düşük maliyetle ulaşmanızı sağlar. SEO çalışmalarıyla sitenizi Google aramalarında görünür kılarak reklam bütçenizi optimize edebilirsiniz.
              </p>
            </ExpandableCard>

            <ExpandableCard
              title="Mobil Uyumluluk Neden Kritik?"
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
              description="TEKNİK GEREKSİNİM"
            >
              <h4 className="text-white font-black uppercase tracking-tighter text-xl">Kullanıcı Deneyimi</h4>
              <p>
                İnternet trafiğinin %60'ından fazlası mobil cihazlardan geliyor. Eğer siteniz telefonda bozuk görünüyorsa, müşterilerinizin saniyeler içinde rakibinize kaçması kaçınılmazdır. Responsive tasarım bir lüks değil, zorunluluktur.
              </p>
              <h4 className="text-white font-black uppercase tracking-tighter text-xl">Google Sıralaması</h4>
              <p>
                Google, mobil uyumlu olmayan siteleri arama sonuçlarında cezalandırır. Siteniz ne kadar iyi olursa olsun, mobil dostu değilse ilk sayfalarda yer almanız imkansızdır.
              </p>
            </ExpandableCard>

            <ExpandableCard
              title="Tasarımın Satışa Etkisi"
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop"
              description="PSİKOLOJİ & SATIŞ"
            >
              <h4 className="text-white font-black uppercase tracking-tighter text-xl">İlk İzlenim Saniyeleri</h4>
              <p>
                Bir kullanıcı sitenize girdiğinde sunduğunuz değeri anlaması için sadece 3 saniyesi vardır. Karmaşık, eski veya amatör görünen bir tasarım, sunduğunuz hizmetin de kalitesiz olduğu algısını yaratır.
              </p>
              <h4 className="text-white font-black uppercase tracking-tighter text-xl">Premium Algı Yaratmak</h4>
              <p>
                Lüks bir restoranın menüsünün tasarımı ile mahalle büfesinin menüsü arasındaki fark gibi, web sitenizin tasarımı da hizmetinizin "fiyat etiketini" belirler. Profesyonel bir arayüz, yüksek bütçeli projeleri çekmenizin anahtarıdır.
              </p>
            </ExpandableCard>
          </div>
        </div>
      </section>

      <FAQ />
      <CtaSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
