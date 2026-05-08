import { motion } from 'motion/react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { BLOG_POSTS, ICONS } from '../constants';
import { PremiumButton } from '../components/PremiumButton';

export default function BlogPost() {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link 
            to="/blog" 
            className="flex items-center gap-2 text-brand-gold/60 hover:text-brand-gold transition-colors text-[10px] font-bold tracking-[0.3em] uppercase mb-12"
          >
            <ICONS.ArrowRight className="w-4 h-4 rotate-180" />
            BLOGA DÖN
          </Link>

          <span className="text-brand-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">
            {post.category} • {post.date}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-12 leading-tight">
            {post.title}
          </h1>
          
          <div className="aspect-[21/9] rounded-[2rem] overflow-hidden border border-white/10 mb-16 shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-invert prose-brand lg:prose-xl max-w-none">
            <div className="text-white/70 leading-[2] whitespace-pre-line text-lg md:text-xl font-light">
              {post.content}
            </div>
          </div>

          {/* Social Share */}
          <div className="mt-20 pt-12 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-6">
               <span className="text-white/20 text-[10px] font-bold tracking-widest uppercase">Paylaş</span>
               <div className="flex gap-4">
                 {[ICONS.Facebook, ICONS.Twitter, ICONS.Instagram, ICONS.Linkedin].map((Icon, i) => (
                   <button key={i} className="text-white/40 hover:text-brand-gold transition-colors">
                     <Icon className="w-5 h-5" />
                   </button>
                 ))}
               </div>
            </div>
            <Link to="/#randevu">
              <PremiumButton variant="outline" className="px-8 py-4">RANDEVU AL</PremiumButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
