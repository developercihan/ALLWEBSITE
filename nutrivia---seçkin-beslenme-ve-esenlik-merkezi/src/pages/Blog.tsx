import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ICONS, BLOG_POSTS } from '../constants';
import { PremiumButton } from '../components/PremiumButton';

export default function Blog() {
  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-brand-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Editoryal</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">
            Nutrivia <em className="italic text-brand-gold">Blog</em>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Beslenme bilimi, modern tıp yaklaşımları ve sağlıklı yaşam sanatına dair uzman görüşleri.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/blog/${post.id}`}>
                <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-8 relative border border-white/5">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-4 left-4 bg-brand-gold/90 text-brand-green text-[8px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <span className="text-brand-gold/40 text-[10px] font-bold tracking-widest">{post.date}</span>
                  <h2 className="text-2xl font-serif text-white group-hover:text-brand-gold transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <PremiumButton variant="outline" className="px-6 py-3">Devamını Oku</PremiumButton>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[2rem] bg-brand-gold/5 border border-brand-gold/10 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-serif text-white mb-6">Bültenimize Abone Olun</h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto">En güncel sağlık makaleleri ve klinikten özel haberler e-posta kutunuza gelsin.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="flex-1 bg-brand-green border border-brand-gold/20 rounded-full px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-gold transition-colors"
              />
              <PremiumButton>ABONE OL</PremiumButton>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
