import { motion } from 'motion/react';
import { useState } from 'react';
import { PremiumButton } from '../components/PremiumButton';
import { ICONS } from '../constants';

export default function BMICalculator() {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [result, setResult] = useState<{ bmi: number; status: string; color: string } | null>(null);

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    
    if (h > 0 && w > 0) {
      const bmi = w / (h * h);
      let status = '';
      let color = '';

      if (bmi < 18.5) { status = 'Zayıf'; color = 'text-blue-400'; }
      else if (bmi < 25) { status = 'Normal'; color = 'text-green-400'; }
      else if (bmi < 30) { status = 'Fazla Kilolu'; color = 'text-yellow-400'; }
      else { status = 'Obez'; color = 'text-red-400'; }

      setResult({ bmi: parseFloat(bmi.toFixed(1)), status, color });
    }
  };

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-brand-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Araçlar</span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-8">
            VKİ <em className="italic text-brand-gold">Hesaplayıcı</em>
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Vücut kitle indeksinizi hesaplayarak ideal kilo aralığınızı öğrenebilirsiniz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 p-10 rounded-[2rem] backdrop-blur-sm shadow-2xl"
          >
            <div className="space-y-8">
              <div>
                <label className="block text-brand-gold/60 text-[10px] font-bold tracking-widest uppercase mb-4">Boy (cm)</label>
                <input 
                  type="number" 
                  placeholder="Örn: 175"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full bg-brand-green border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-gold transition-colors text-xl"
                />
              </div>
              <div>
                <label className="block text-brand-gold/60 text-[10px] font-bold tracking-widest uppercase mb-4">Kilo (kg)</label>
                <input 
                  type="number" 
                  placeholder="Örn: 70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-brand-green border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-gold transition-colors text-xl"
                />
              </div>
              <PremiumButton 
                onClick={calculateBMI}
                className="w-full py-5 text-sm"
              >
                HESAPLA
              </PremiumButton>
            </div>
          </motion.div>

          <div className="relative">
            {result ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-12 bg-brand-gold/5 border border-brand-gold/20 rounded-[2rem]"
              >
                <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-4 block">Sonucunuz</span>
                <div className="text-7xl font-serif text-white mb-4">{result.bmi}</div>
                <div className={`text-xl font-medium tracking-wide uppercase ${result.color} mb-8`}>{result.status}</div>
                <p className="text-white/50 text-sm leading-relaxed mb-10">
                  {result.bmi < 18.5 ? "Kilonuzun boyunuza oranla yetersiz olduğunu göstermektedir. Bir beslenme uzmanına danışmalısınız." :
                   result.bmi < 25 ? "Kilonuzun boyunuza oranla ideal olduğunu göstermektedir. Tebrikler!" :
                   "Kilonuzun boyunuza oranla fazla olduğunu göstermektedir. Sağlığınız için bir beslenme planı oluşturabilirsiniz."}
                </p>
                <PremiumButton variant="outline" className="px-8">DETAYLI ANALİZ İÇİN RANDEVU AL</PremiumButton>
              </motion.div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-20 p-12">
                <ICONS.Activity className="w-24 h-24 text-white mb-6" />
                <p className="text-white text-lg">Hesaplamak için değerleri giriniz</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
