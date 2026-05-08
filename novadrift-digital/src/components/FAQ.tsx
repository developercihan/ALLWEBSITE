import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Web sitesi yapımı ne kadar sürüyor?",
    answer: "Projenin kapsamına bağlı olarak genellikle 7-14 iş günü içerisinde yayına alıyoruz."
  },
  {
    question: "Siteler mobil uyumlu mu?",
    answer: "Kesinlikle. Tüm sitelerimiz mobil, tablet ve masaüstü cihazlarda mükemmel bir deneyim sunacak şekilde tasarlanmaktadır."
  },
  {
    question: "Yönetim paneli olacak mı?",
    answer: "Evet, içeriklerinizi kolayca güncelleyebileceğiniz modern bir yönetim paneli (CMS) entegre ediyoruz."
  },
  {
    question: "SEO uyumlu mu?",
    answer: "Tüm altyapılarımız teknik SEO kurallarına (hız, meta etiketler, yapısal veri) uygun olarak hazırlanır."
  },
  {
    question: "Fiyatlandırma nasıl yapılıyor?",
    answer: "Landing page projelerimiz 300$'dan, kurumsal web sitelerimiz ise 700$'dan başlayan fiyatlarla sunulmaktadır."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 bg-[#0B0B0B]" id="sss">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter leading-[1.1] md:leading-none"
          >
            Sıkça Sorulan <span className="text-[#00D1FF] italic">Sorular</span>
          </motion.h2>
        </div>

        <div className="space-y-4 md:space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/5 rounded-none overflow-hidden bg-[#161616] group"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/5 transition-colors gap-6"
              >
                <span className="font-bold text-base md:text-lg text-white uppercase tracking-tight">{faq.question}</span>
                <div className={`w-7 h-7 md:w-8 md:h-8 shrink-0 flex items-center justify-center transition-all ${openIndex === index ? 'bg-[#00D1FF] text-black rotate-180' : 'text-slate-500 border border-white/10'}`}>
                   {openIndex === index ? <Minus size={14} className="md:w-4 md:h-4" /> : <Plus size={14} className="md:w-4 md:h-4" />}
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 md:px-8 md:pb-8">
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light italic border-t border-white/5 pt-5 md:pt-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
