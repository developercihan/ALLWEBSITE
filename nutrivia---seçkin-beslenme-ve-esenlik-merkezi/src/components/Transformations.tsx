import { motion } from 'motion/react';
import { IMAGES } from '../constants';

const SUCCESS_STORIES = [
  {
    name: "Ahu Y.",
    result: "-12 KG",
    duration: "3 AY",
    story: "Nutrivia ile sadece kilo vermedim, beslenme ile barıştığımı hissettim. Selin hanımın bilimsel yaklaşımı bana güven verdi.",
    image: IMAGES.lifestyle
  },
  {
    name: "Caner T.",
    result: "PERFORMANS +",
    duration: "6 AY",
    story: "Sporcu beslenmesi konusunda aldığım danışmanlık antrenman verimliliğimi %40 artırdı. Kendimi çok daha enerjik hissediyorum.",
    image: IMAGES.nutrition
  },
  {
    name: "Merve K.",
    result: "HİSSEDİLİR FARK",
    duration: "4 AY",
    story: "Kanser sonrası toparlanma sürecimde onkoloji beslenmesi desteği aldım. Süreç beklediğimden çok daha rahat geçti.",
    image: IMAGES.expert
  }
];

export const Transformations = () => {
  return (
    <div className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-brand-gold text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Yolculuklar</span>
          <h2 className="text-5xl md:text-7xl font-serif text-white">
            Başarı <em className="italic text-brand-gold">Hikayeleri</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SUCCESS_STORIES.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative h-[600px] rounded-[3rem] overflow-hidden border border-white/5"
            >
              <img 
                src={story.image} 
                className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110" 
                alt={story.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green via-brand-green/20 to-transparent" />
              
              <div className="absolute inset-x-8 bottom-12 space-y-6">
                <div className="flex justify-between items-baseline border-b border-brand-gold/20 pb-4">
                  <h3 className="text-3xl font-serif text-white">{story.name}</h3>
                  <span className="text-brand-gold font-serif text-2xl">{story.result}</span>
                </div>
                
                <p className="text-white/60 text-sm leading-relaxed font-light italic">
                  "{story.story}"
                </p>
                
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold tracking-widest text-brand-gold/60 uppercase">Süre: {story.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
