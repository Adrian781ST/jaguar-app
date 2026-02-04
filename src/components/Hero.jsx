import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.2]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Particles container for Hero */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#d4a517]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.6
            }}
            animate={{
              y: [0, 100, 0],
              opacity: [0.6, 0.2, 0.6]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      {/* Background glow */}
      <motion.div
        style={{ 
          y: y1,
          background: 'radial-gradient(circle, rgba(212, 165, 23, 0.6) 0%, transparent 70%)',
          left: '50%',
          top: '10%',
          transform: 'translateX(-50%)'
        }}
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-30"
      />

      {/* Main Content */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="relative z-10 text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl opacity-40"
              style={{ background: 'linear-gradient(135deg, #d4a517, #f4d03f)' }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.h1
              className="relative text-7xl md:text-8xl font-bold tracking-tight"
              style={{ 
                scale,
                background: 'linear-gradient(135deg, #d4a517, #f4d03f 50%, #d4a517)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              JAGUAR
            </motion.h1>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl md:text-3xl text-gray-300 max-w-2xl mx-auto"
        >
          <span className="text-[#d4a517]">Panthera onca</span> — El felino más grande de América
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm tracking-widest uppercase text-[#d4a517]"
          >
            Descubre su mundo
          </motion.div>
          <motion.div
            animate={{ y: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-3"
          >
            <svg className="w-5 h-5 mx-auto text-[#d4a517]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll progress bar */}
      <motion.div
        style={{ opacity }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8b6914] via-[#d4a517] to-[#f4d03f]"
      />
    </section>
  );
}
