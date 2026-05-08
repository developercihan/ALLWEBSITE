import { motion } from 'motion/react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import { Transformations } from '../components/Transformations';
import { ImpactStats } from '../components/ImpactStats';
import Expertise from '../components/Expertise';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const SectionWrapper = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className="relative overflow-visible">
    <motion.section
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.section>
    
    {/* Animated Divider */}
    <div className="max-w-7xl mx-auto px-6 h-[1px] relative">
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent origin-center"
      />
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <Hero />
      <SectionWrapper>
        <Features />
      </SectionWrapper>
      <SectionWrapper>
        <About />
      </SectionWrapper>
      <SectionWrapper>
        <ImpactStats />
      </SectionWrapper>
      <SectionWrapper>
        <Transformations />
      </SectionWrapper>
      <SectionWrapper>
        <Expertise />
      </SectionWrapper>
      <SectionWrapper>
        <Process />
      </SectionWrapper>
      <SectionWrapper>
        <Testimonials />
      </SectionWrapper>
      <SectionWrapper>
        <CTA />
      </SectionWrapper>
    </>
  );
}
