import { motion, AnimatePresence } from 'motion/react';
import { RECIPES, ICONS } from '../constants';
import { PremiumButton } from '../components/PremiumButton';
import { useState, useEffect } from 'react';

export default function Recipes() {
  const [selectedRecipe, setSelectedRecipe] = useState<typeof RECIPES[0] | null>(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedRecipe) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedRecipe]);

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-brand-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Mutfak</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">
            Sağlıklı <em className="italic text-brand-gold">Tarifler</em>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Besleyici, pratik ve damak tadınıza uyacak uzman onaylı tarif kütüphanemiz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {RECIPES.map((recipe, i) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer bg-white/[0.02] border border-white/5 rounded-3xl p-4 transition-all hover:bg-white/[0.05]"
              onClick={() => setSelectedRecipe(recipe)}
            >
              <div className="aspect-video sm:aspect-square rounded-2xl overflow-hidden relative mb-6 border border-white/5">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
                  <div className="flex items-center gap-2">
                    <ICONS.Clock className="w-4 h-4 text-brand-gold" />
                    <span className="text-[9px] font-bold tracking-widest uppercase">{recipe.time}</span>
                  </div>
                  <span className="text-[9px] font-bold tracking-widest uppercase bg-brand-gold/90 text-brand-green px-2 py-0.5 rounded-full">
                    {recipe.difficulty}
                  </span>
                </div>
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-brand-gold transition-colors mb-3">{recipe.title}</h3>
                <p className="text-white/50 text-sm line-clamp-2 leading-relaxed font-light">{recipe.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recipe Modal */}
        <AnimatePresence>
          {selectedRecipe && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 lg:p-8">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedRecipe(null)}
                className="absolute inset-0 bg-brand-green/98 backdrop-blur-2xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-5xl bg-brand-green border border-white/10 rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] max-h-[85vh] overflow-y-auto"
              >
                <button 
                  onClick={() => setSelectedRecipe(null)}
                  className="absolute top-6 right-6 sm:top-8 sm:right-8 text-white/40 hover:text-white transition-colors z-50 bg-brand-green/50 p-2 rounded-full backdrop-blur-md"
                >
                  <ICONS.X className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>

                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-5/12 aspect-video md:aspect-auto h-full">
                    <img src={selectedRecipe.image} className="w-full h-full object-cover" alt={selectedRecipe.title} />
                  </div>
                  <div className="w-full md:w-7/12 p-8 sm:p-12 lg:p-16">
                    <span className="text-brand-gold text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mb-4 block">Tarif Detayı</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white mb-8 pr-10">{selectedRecipe.title}</h2>
                    
                    <div className="space-y-10">
                      <div>
                        <h4 className="text-white text-[10px] font-bold tracking-widest uppercase mb-5 flex items-center gap-3">
                          <ICONS.CheckCircle2 className="w-4 h-4 text-brand-gold" /> MALZEMELER
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedRecipe.ingredients.map((ing, i) => (
                            <li key={i} className="text-white/60 text-sm flex items-start gap-3">
                              <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5 shrink-0" /> {ing}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-white text-[10px] font-bold tracking-widest uppercase mb-5 flex items-center gap-3">
                          <ICONS.Play className="w-4 h-4 text-brand-gold" /> HAZIRLANIŞ
                        </h4>
                        <p className="text-white/60 text-sm sm:text-base leading-relaxed whitespace-pre-line font-light">
                          {selectedRecipe.content}
                        </p>
                      </div>
                    </div>

                    <div className="mt-12 pt-10 border-t border-white/5 flex flex-col sm:flex-row gap-4">
                      <PremiumButton className="flex-1 py-4 text-[10px]">PDF OLARAK İNDİR</PremiumButton>
                      <PremiumButton variant="outline" className="flex-1 py-4 text-[10px]">LİSTEME EKLE</PremiumButton>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
