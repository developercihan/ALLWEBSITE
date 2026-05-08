import { Link } from 'react-router-dom';
import { ICONS } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="iletisim" className="bg-brand-green pt-20 md:pt-32 pb-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 pb-20 border-b border-white/5">
          {/* Brand */}
          <div className="flex flex-col col-span-1 md:col-span-2 lg:col-span-1">
             <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 border border-brand-gold rounded-full flex items-center justify-center p-2">
                 <ICONS.Apple className="text-brand-gold w-full h-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-brand-gold font-serif text-xl tracking-widest leading-none">NUTRIVIA</span>
                <span className="text-[10px] text-brand-gold/60 tracking-[0.3em] uppercase leading-none mt-1 group">DİYET & BESLENME</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-10 font-light">
              Bilimsel yaklaşım ve kişiye özel beslenme programlarıyla sağlıklı bir yaşama birlikte adım atalım.
            </p>
            <div className="flex gap-5">
              {[ICONS.Instagram, ICONS.Linkedin, ICONS.Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-gold hover:border-brand-gold transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-brand-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-10">HIZLI LİNKLER</h4>
            <div className="flex flex-col gap-5">
              {[
                { name: 'Ana Sayfa', href: '/' },
                { name: 'Programlar', href: '/programlar' },
                { name: 'Tarifler', href: '/tarifler' },
                { name: 'VKİ Hesaplayıcı', href: '/vki-hesaplayici' },
                { name: 'Blog', href: '/blog' },
                { name: 'SSS', href: '/sss' }
              ].map((link) => {
                const isHashLink = link.href.includes('#');
                const Component = isHashLink ? 'a' : Link;
                const props = isHashLink ? { href: link.href } : { to: link.href };
                return (
                  <Component key={link.name} {...props as any} className="text-white/50 hover:text-white text-sm transition-colors font-light tracking-wide">
                    {link.name}
                  </Component>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h4 className="text-brand-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-10">HİZMETLER</h4>
            <div className="flex flex-col gap-5">
              {['Kilo Yönetimi', 'Klinik Beslenme', 'Gebelik & Emzirme', 'Sporcu Beslenmesi', 'Kurumsal Beslenme', 'Online Danışmanlık'].map((item) => (
                 <a key={item} href="/#hizmetler" className="text-white/50 hover:text-white text-sm transition-colors font-light tracking-wide">{item}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h4 className="text-brand-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-10">İLETİŞİM</h4>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <ICONS.MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                <span className="text-white/50 text-sm leading-relaxed font-light">
                  Mutlukent Mah. 2080. Sok. No:6 Çankaya / Ankara
                </span>
              </div>
              <div className="flex gap-4">
                <ICONS.Phone className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                <span className="text-white/50 text-sm font-light leading-relaxed">+90 555 123 45 67</span>
              </div>
              <div className="flex gap-4">
                <ICONS.Mail className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                <span className="text-white/50 text-sm font-light leading-relaxed">info@nutrivia.com.tr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] tracking-widest uppercase">
            © {currentYear} NUTRIVIA DİYET & BESLENME. TÜM HAKLARI SAKLIDIR.
          </p>
          <div className="flex gap-8">
            {[
              { name: 'KVKK', href: '/kvkk' },
              { name: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
              { name: 'Çerez Politikası', href: '/cerez-politikasi' }
            ].map((link) => (
              <Link key={link.name} to={link.href} className="text-white/20 hover:text-white/40 text-[10px] tracking-widest uppercase transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Extreme Right Circle Blur */}
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-brand-gold/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
    </footer>
  );
}
