import { motion } from 'framer-motion';
import { useState } from 'react';
import { stories } from '../data/stories';
import CaseModal from '../components/CaseModal';

export default function CasesPage() {
  const [selectedStory, setSelectedStory] = useState<any>(null);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-deep-black relative z-10">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-12">Tüm <span className="text-gold italic">Vakalar</span>.</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stories.map((story, i) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 1 }}
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
              
              <div className="absolute inset-0 bg-gradient-to-t from-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>

      <CaseModal 
        selectedStory={selectedStory} 
        onClose={() => setSelectedStory(null)} 
      />
    </div>
  );
}
