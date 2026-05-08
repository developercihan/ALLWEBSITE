import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import CinematicBackground from './CinematicBackground';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Layout() {
  return (
    <div className="bg-deep-black min-h-screen text-warm-white selection:bg-gold selection:text-deep-black relative overflow-hidden">
      <ScrollToTop />
      <CinematicBackground />

      <Navbar />
      <main className="relative z-10 pt-24">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
