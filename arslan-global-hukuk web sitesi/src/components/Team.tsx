import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: "Kemal Arslan",
    role: "Kurucu Ortak • Kıdemli Avukat",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Selin Yılmaz",
    role: "Yönetici Ortak • Tahkim Uzmanı",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Demir Karahan",
    role: "Kıdemli Ortak • Ceza Hukuku",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Ayşe Ersoy",
    role: "Kıdemli Avukat • Vergi Hukuku",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Team() {
  return (
    <section id="ekibimiz" className="py-24 md:py-40 bg-deep-black overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs tracking-[0.5em] uppercase text-gold font-bold mb-6 block">Profesyonel Kadromuz</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
            Başarınızın Arkasındaki <span className="text-gold italic">Zekâ</span>.
          </h2>
          <p className="text-stone-400 font-light leading-relaxed">
            Her biri kendi alanında otorite kabul edilen, derin tecrübe ve stratejik zekâya sahip seçkin hukukçulardan oluşan ekibimizle fark yaratıyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 shadow-2xl">
                <img 
                  src={member.img} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  alt={member.name}
                />
                
                {/* Hover Contacts */}
                <div className="absolute inset-0 bg-deep-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
                  <button className="p-3 bg-gold rounded-full text-deep-black hover:scale-110 transition-transform">
                    <Linkedin size={20} />
                  </button>
                  <button className="p-3 bg-white text-deep-black rounded-full hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </button>
                </div>
              </div>
              
              <div className="text-center transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-xl font-serif text-white mb-2 tracking-tight group-hover:text-gold transition-colors">{member.name}</h3>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-500 group-hover:text-gold/60 transition-colors">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="px-12 py-5 border border-white/10 rounded-full text-xs tracking-[0.3em] uppercase text-stone-400 hover:border-gold hover:text-gold transition-all duration-500">
            Tüm Ekibi İncele
          </button>
        </div>
      </div>
    </section>
  );
}
