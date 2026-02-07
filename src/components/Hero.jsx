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
          background: 'radial-gradient(circle, rgba(184, 134, 11, 0.6) 0%, transparent 70%)',
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
              style={{ background: 'linear-gradient(135deg, #d4a517, #ffd700)' }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            {/* Spots masked by text using SVG mask */}
            <div className="relative">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <mask id="jaguarTextMask" x="0" y="0" width="400" height="120">
                    <rect x="0" y="0" width="400" height="120" fill="white"/>
                    <text 
                      x="200" 
                      y="90" 
                      textAnchor="middle" 
                      fontSize="80" 
                      fontWeight="bold" 
                      fontFamily="Playfair Display, serif"
                      fill="black"
                    >JAGUAR</text>
                  </mask>
                </defs>
                {/* Animated spots masked by text */}
                <g mask="url(#jaguarTextMask)">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.circle
                      key={i}
                      cx={30 + (i * 30) % 380}
                      cy={20 + (i * 15) % 80}
                      r={4 + Math.random() * 6}
                      fill="#2a1a0a"
                      opacity={0.9}
                      animate={{
                        cx: [30 + (i * 30) % 380, 30 + ((i * 30) % 380) + 15, 30 + ((i * 30) % 380) - 15, 30 + ((i * 30) % 380)],
                        cy: [20 + (i * 15) % 80, 20 + ((i * 15) % 80) + 10, 20 + ((i * 15) % 80) - 10, 20 + ((i * 15) % 80)],
                        r: [4 + Math.random() * 6, 5 + Math.random() * 7, 3 + Math.random() * 5, 4 + Math.random() * 6],
                        opacity: [0.9, 0.6, 0.9]
                      }}
                      transition={{
                        duration: 3 + Math.random() * 4,
                        delay: i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                  {/* Rosettes (jaguar spot patterns) */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.g
                      key={`rosette-${i}`}
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 6 + Math.random() * 4,
                        delay: i * 0.3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <circle
                        cx={50 + (i * 42) % 350}
                        cy={25 + (i * 12) % 70}
                        r={5}
                        fill="#1a0f05"
                      />
                      <circle
                        cx={50 + (i * 42) % 350}
                        cy={25 + (i * 12) % 70}
                        r={8}
                        fill="none"
                        stroke="#1a0f05"
                        strokeWidth={1.5}
                        opacity={0.7}
                      />
                    </motion.g>
                  ))}
                </g>
              </svg>
              {/* Gradient text overlay */}
              <motion.h1
                className="relative text-7xl md:text-8xl font-bold tracking-tight"
                style={{ 
                  scale,
                  background: 'linear-gradient(135deg, #d4a517 0%, #ffd700 50%, #b8860b 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  zIndex: 10
                }}
              >
                JAGUAR
                {/* Shine effect */}
                <motion.span
                  className="absolute inset-0 overflow-hidden"
                  style={{ zIndex: 20 }}
                >
                  <motion.span
                    className="absolute top-0 h-full w-20"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
                      filter: 'blur(3px)'
                    }}
                    animate={{
                      left: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: 'easeInOut'
                    }}
                  />
                </motion.span>
              </motion.h1>
            </div>
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
      </motion.div>

      {/* Descubre su mundo - separado del contenido principal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-16 md:bottom-8 left-0 right-0 text-center z-20"
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

      {/* Scroll progress bar */}
      <motion.div
        style={{ opacity }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8b6914] via-[#d4a517] to-[#ffd700]"
      />
    </section>
  );
}
