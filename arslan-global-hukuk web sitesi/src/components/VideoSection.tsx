import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="py-24 md:py-40 relative bg-black">
      <div className="max-w-screen-2xl mx-auto px-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gold"></div>
              <span className="text-[12px] uppercase tracking-[0.4em] text-gold font-medium">Kurumsal Tanıtım</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              Gücümüzü <span className="text-gold italic">Vizyonumuzdan</span> Alıyoruz
            </h2>
          </div>
          <p className="text-white/40 font-light max-w-sm border-l border-gold/30 pl-8 leading-relaxed mb-4">
            Ekibimizin dinamik yapısını, ofis atmosferimizi ve müvekkillerimizle kurduğumuz güçlü bağları keşfedin.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full aspect-video rounded-xl overflow-hidden group cursor-pointer border border-white/5 bg-deep-black shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
        >
          {/* Cover Video that auto plays on loop */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-40"
          >
            {/* Elegant Corporate Video */}
            <source src="https://assets.mixkit.co/videos/preview/mixkit-business-people-meeting-at-a-startup-office-4270-large.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-transparent to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <div className="w-20 h-20 rounded-full border border-gold/50 flex items-center justify-center bg-black/30 backdrop-blur-md mb-6 group-hover:bg-gold group-hover:border-gold group-hover:text-black group-hover:scale-110 transition-all duration-500 text-gold shadow-[0_0_40px_rgba(198,161,110,0.2)]">
              <Play size={24} fill="currentColor" className="ml-1" />
            </div>
            <span className="text-sm tracking-[0.3em] uppercase text-white font-medium transition-colors duration-500 group-hover:text-gold">Videoyu Oynat</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
