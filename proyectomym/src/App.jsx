import React from 'react';
import { ReactLenis } from 'lenis/react';
import Preloader from './components/ui/Preloader';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Marquee from './components/ui/Marquee';
import VisionMission from './components/sections/VisionMission';
import Process from './components/sections/Process';
import Creativity from './components/sections/Creativity';
import Achievements from './components/sections/Achievements';
import VideoReel from './components/sections/VideoReel';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import Timeline from './components/sections/Timeline';
import FAQ from './components/sections/FAQ';
import CEOProfile from './components/sections/CEOProfile';
import Contact from './components/sections/Contact';
import InstagramFeed from './components/sections/InstagramFeed';
import CTABanner from './components/sections/CTABanner';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import BackToTop from './components/ui/BackToTop';
import './index.css';
import './App.css';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothTouch: false }}>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <div className="app-container">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Marquee />
          <VisionMission />
          <Process />
          <Creativity />
          <Achievements />
          <VideoReel />
          <Services />
          <Testimonials />
          <Timeline />
          <FAQ />
          <CEOProfile />
          <Contact />
          <InstagramFeed />
          <CTABanner />
        </main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </div>
    </ReactLenis>
  );
}

export default App;
