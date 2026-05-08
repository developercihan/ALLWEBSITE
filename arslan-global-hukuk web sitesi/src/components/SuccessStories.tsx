import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { stories } from '../data/stories';
import CaseModal from './CaseModal';

export default function SuccessStories() {
  const navigate = useNavigate();
  const [selectedStory, setSelectedStory] = useState<any>(null);

  // Sadece ilk üç hikayeyi ana sayfada gösteriyoruz
  const featuredStories = stories.slice(0, 3);

  return (
    <section id="basari" className="py-24 md:py-40 bg-deep-black">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.5em] uppercase text-gold font-bold mb-6 block">Başarı Hikayeleri</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Emsal Teşkil Eden <span className="text-gold italic">Zaferler</span>.
            </h2>
          </div>
          <button 
            onClick={() => navigate('/vakalar')}
            className="hidden md:flex items-center gap-4 text-xs tracking-widest uppercase text-stone-400 hover:text-gold transition-colors font-bold"
          >
            Tüm Vakaları Görüntüle <div className="w-12 h-[1px] bg-gold" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredStories.map((story, i) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 1 }}
              viewport={{ once: true }}
              className="group relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl cursor-pointer"
              onClick={() => setSelectedStory(story)}
            >
              <img 
                src={story.img} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-50 group-hover:brightness-[0.4]"
                alt={story.title}
              />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-4 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  {story.category}
                </span>
                <h3 className="text-3xl font-serif text-white mb-6 tracking-tight leading-tight transition-transform duration-700">
                  {story.title}
                </h3>
                
                <p className="text-stone-300 text-sm font-light leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  {story.desc}
                </p>
                
                <div className="h-[1px] w-0 bg-gold group-hover:w-full transition-all duration-700" />
              </div>
              
              {/* Overlay glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
        
        {/* Mobile View All button */}
        <div className="mt-12 flex justify-center md:hidden">
            <button 
              onClick={() => navigate('/vakalar')}
              className="flex items-center gap-4 text-xs tracking-widest uppercase text-stone-400 hover:text-gold transition-colors font-bold"
            >
              Tüm Vakaları Görüntüle <div className="w-12 h-[1px] bg-gold" />
            </button>
        </div>
      </div>

      <CaseModal 
        selectedStory={selectedStory} 
        onClose={() => setSelectedStory(null)} 
      />
    </section>
  );
}
