/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { LiveChat } from './components/LiveChat';
import { Preloader } from './components/Preloader';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Recipes from './pages/Recipes';
import BMICalculator from './pages/BMICalculator';
import Programs from './pages/Programs';
import FAQ from './pages/FAQ';
import Legal from './pages/Legal';
import ScrollToTop from './components/ScrollToTop';
import { DailyWellnessTip } from './components/DailyWellnessTip';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/tarifler" element={<Recipes />} />
          <Route path="/vki-hesaplayici" element={<BMICalculator />} />
          <Route path="/programlar" element={<Programs />} />
          <Route path="/sss" element={<FAQ />} />
          <Route path="/kvkk" element={<Legal />} />
          <Route path="/gizlilik-politikasi" element={<Legal />} />
          <Route path="/cerez-politikasi" element={<Legal />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="loader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      {!isLoading && <DailyWellnessTip />}
      
      <div className={`min-h-screen bg-brand-green selection:bg-brand-gold selection:text-brand-green relative overflow-x-hidden ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <AnimatedBackground />
        
        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-brand-gold origin-left z-[999]"
          style={{ scaleX }}
        />

        <Navbar />
        <main className="relative">
          <AnimatedRoutes />
        </main>
        <Footer />
        <LiveChat />
      </div>
    </Router>
  );
}

