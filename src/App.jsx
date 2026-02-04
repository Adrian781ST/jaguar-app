import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Historia from './components/Historia';
import Ejemplares from './components/Ejemplares';
import Galeria from './components/Galeria';
import Footer from './components/Footer';
import PantherParticles from './components/PantherParticles';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8b6914] via-[#d4a517] to-[#f4d03f] origin-left z-50"
      style={{ scaleX }}
    />
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <ScrollProgress />
      <PantherParticles />
      <Navbar />
      <Hero />
      <Historia />
      <Ejemplares />
      <Galeria />
      <Footer />
    </div>
  );
}

export default App;
