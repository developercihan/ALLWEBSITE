import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-black pt-32 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="ambient-glow bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px]" />

      <div className="max-w-screen-2xl mx-auto px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          
          <div className="lg:col-span-5">
            <div className="mb-10">
              <Logo iconSize={48} />
            </div>
            
            <p className="text-white/40 font-light leading-relaxed max-w-sm mb-12">
              Hukukun gücünü stratejik bir perspektif ile birleştirerek, geleceğe güvenle bakmanızı sağlıyoruz. İstanbul merkezli büromuzla küresel çapta çözüm sunuyoruz.
            </p>

            <div className="flex gap-6">
              {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                <button key={i} className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center text-white/30 hover:text-gold hover:border-gold transition-all duration-300 group">
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-white font-serif text-xl mb-8 tracking-tight">İletişim Bilgileri</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-gold/30 transition-colors">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-white/30 mb-1">Adres</span>
                    <span className="text-sm text-white/60 group-hover:text-gold transition-colors">Zorlu Center, Levazım, Kule 3, Beşiktaş, İstanbul</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-gold/30 transition-colors">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-white/30 mb-1">E-Posta</span>
                    <span className="text-sm text-white/60 group-hover:text-gold transition-colors">info@arslanglobal.com</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex items-end justify-end text-right">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gold/60">Hızlı Erişim</span>
                <nav className="flex flex-col gap-2">
                  {['Uzmanlıklar', 'Ekibimiz', 'Kariyer', 'KVKK'].map((item) => (
                    <a key={item} href="#" className="text-[11px] uppercase tracking-widest text-white/30 hover:text-gold transition-colors">
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

        </div>

        <div className="thin-line mb-10 opacity-30"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            © {currentYear} Arslan Global Hukuk & Ortakları.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/10 uppercase">Gizlilik Politikası</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/10 uppercase">KVKK</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold/30">Arslan Partners</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
