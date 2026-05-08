import { motion } from 'motion/react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#161616] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
             <a href="/" className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 border-2 border-[#00D1FF] flex items-center justify-center rotate-45">
                  <span className="text-white font-bold text-sm -rotate-45 italic">N</span>
                </div>
                <span className="text-white font-bold text-xl tracking-tighter">NOVADRIFT <span className="text-[#00D1FF]">DIGITAL</span></span>
              </a>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light italic">
                Markaların dijitalde sıradan görünmesini engelliyoruz. Tasarım odaklı, premium web çözümleri.
              </p>
              <div className="flex gap-6">
                {[Instagram, Twitter, Linkedin].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#00D1FF] hover:text-black transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-8">Hizmetler</h4>
            <ul className="space-y-4 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              <li><a href="#" className="hover:text-[#00D1FF] transition-colors">Web Tasarım</a></li>
              <li><a href="#" className="hover:text-[#00D1FF] transition-colors">Landing Page</a></li>
              <li><a href="#" className="hover:text-[#00D1FF] transition-colors">SEO Altyapısı</a></li>
              <li><a href="#" className="hover:text-[#00D1FF] transition-colors">Mobil Optimizasyon</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-8">Şirket</h4>
            <ul className="space-y-4 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              <li><a href="#" className="hover:text-[#00D1FF] transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-[#00D1FF] transition-colors">Stüdyo</a></li>
              <li><a href="#" className="hover:text-[#00D1FF] transition-colors">Portfolyo</a></li>
              <li><a href="#" className="hover:text-[#00D1FF] transition-colors">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-8">Bülten</h4>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6">Dijital trendlerden haberdar olun.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="E-POSTA ADRESİNİZ" 
                className="w-full bg-white/5 border border-white/10 rounded-none py-4 px-6 text-white text-[10px] font-black tracking-widest focus:outline-none focus:border-[#00D1FF] transition-colors placeholder:text-slate-700"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-[#00D1FF] transition-colors">
                 Abone Ol
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-600 font-mono text-[10px] tracking-widest text-center md:text-left">
            © {currentYear} NOVADRIFT DIGITAL. ESTABLISHED MMXXVI.
          </p>
          <div className="flex gap-10 font-mono text-[10px] tracking-widest text-slate-600">
            <a href="#" className="hover:text-[#00D1FF] transition-colors uppercase">GİZLİLİK</a>
            <a href="#" className="hover:text-[#00D1FF] transition-colors uppercase">ŞARTLAR</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
