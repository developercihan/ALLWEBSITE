import Hero from '../components/Hero';
import About from '../components/About';
import PracticeAreas from '../components/PracticeAreas';
import VideoSection from '../components/VideoSection';
import Team from '../components/Team';
import SuccessStories from '../components/SuccessStories';
import ContactForm from '../components/ContactForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="px-16"><div className="thin-line"></div></div>
      <About />
      <VideoSection />
      <PracticeAreas />
      <SuccessStories />
      <Team />
      <ContactForm />
    </>
  );
}
