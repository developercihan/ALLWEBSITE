import { motion } from 'motion/react';
import { Rocket, Shield, Smartphone, Zap, Search, Layout } from 'lucide-react';

const services = [
  {
    title: "Kurumsal Web Tasarım",
    description: "Markanızın dijital itibarını yansıtan, modern ve prestijli kurumsal kimlik çalışmaları.",
    icon: Layout,
    color: "text-[#00D1FF]",
  },
  {
    title: "Landing Page",
    description: "Tek bir amaca odaklanan, yüksek dönüşüm oranlı satış ve tanıtım sayfaları.",
    icon: Rocket,
    color: "text-blue-400",
  },
  {
    title: "Hız Optimizasyonu",
    description: "Kullanıcıların beklemesine izin vermeyen, saniyeler içinde açılan ultra hızlı yapılar.",
    icon: Zap,
    color: "text-yellow-400",
  },
  {
    title: "Mobil Optimizasyon",
    description: "Tüm cihazlarda kusursuz çalışan, parmak ucuyla kontrol edilebilen deneyimler.",
    icon: Smartphone,
    color: "text-green-400",
  },
  {
    title: "SEO Altyapısı",
    description: "Google'da üst sıralarda yer almanızı sağlayacak teknik ve içerik optimizasyonları.",
    icon: Search,
    color: "text-cyan-400",
  },
  {
    title: "Marka Güveni",
    description: "Ziyaretçilerinize anında profesyonellik hissi veren tasarım detayları.",
    icon: Shield,
    color: "text-white",
  },
];

export default function Services() {
  return (
    <section className="py-20 md:py-32 bg-[#0B0B0B]" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tighter uppercase"
          >
            Hizmetlerimizin <span className="text-[#00D1FF] italic">Gücü</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-slate-500 max-w-2xl mx-auto uppercase tracking-widest text-[9px] md:text-[10px] font-black"
          >
            Sadece bir web sitesi değil, markanızı büyüten dijital bir varlık inşa ediyoruz.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 md:p-10 bg-[#161616] border border-white/5 rounded-none hover:border-[#00D1FF]/50 transition-all group"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 border border-white/10 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-[#00D1FF] transition-all`}>
                <service.icon className={`w-5 h-5 md:w-6 md:h-6 ${service.color} group-hover:text-black transition-colors`} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-[#00D1FF] transition-colors tracking-tight uppercase">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
