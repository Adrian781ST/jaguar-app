import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import JaguarFaceAnimation from './JaguarFaceAnimation';

export default function Historia() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const timeline = [
    {
      year: "8,000 a.C.",
      title: "Civilizaciones Antiguas",
      description: "Los mayas y aztecas veneraban al jaguar como símbolo de poder, fuerza y protección. Era considerado el señor del inframundo."
    },
    {
      year: "2,500 a.C.",
      title: "Arte Prehispánico",
      description: "El jaguar aparece en cerámica, esculturas y murals, representando la conexión entre los humanos y las fuerzas espirituales."
    },
    {
      year: "Siglo XVI",
      title: "Colonización",
      description: "La llegada europea cãoextinguió poblaciones enteras por su piel y por considerar al felino una amenaza para el ganado."
    },
    {
      year: "Siglo XX",
      title: "Protección Internacional",
      description: "El jaguar es protegido por convenios internacionales. Se reconocen su importancia ecológica y cultural."
    },
    {
      year: "Hoy",
      title: "Conservación Activa",
      description: "Programas de reproducción, corredores biológicos y educación comunitaria buscan salvar al jaguar de la extinción."
    }
  ];

  // Claw SVG Component
  const ClawSVG = ({ className, delay }) => (
    <motion.svg
      className={className}
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0, x: -50 }}
      animate={{ opacity: 0.6, scale: 1, x: 0 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
    >
      {/* Main claw shape */}
      <path
        d="M30 75 C20 75 15 60 15 50 C10 45 5 35 10 25 C12 20 18 15 25 10 C28 8 30 0 32 0 C34 0 36 8 39 10 C46 15 50 20 52 25 C57 35 52 45 49 50 C49 60 44 75 34 75 Z"
        fill="url(#clawGradient)"
        stroke="#8b6914"
        strokeWidth="1"
      />
      {/* Sharp claw lines */}
      <path d="M30 0 L30 20" stroke="#1a0f05" strokeWidth="2" strokeLinecap="round"/>
      <path d="M22 15 L25 25" stroke="#1a0f05" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M38 15 L35 25" stroke="#1a0f05" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Highlight */}
      <ellipse cx="25" cy="30" rx="5" ry="8" fill="#3d2a1a" opacity="0.5"/>
      <defs>
        <linearGradient id="clawGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4a517" />
          <stop offset="50%" stopColor="#8b6914" />
          <stop offset="100%" stopColor="#1a0f05" />
        </linearGradient>
      </defs>
    </motion.svg>
  );

  // Right claw (flipped)
  const ClawRight = ({ className, delay }) => (
    <motion.svg
      className={className}
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0, x: 50 }}
      animate={{ opacity: 0.6, scale: 1, x: 0 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      style={{ transform: "scaleX(-1)" }}
    >
      <path
        d="M30 75 C20 75 15 60 15 50 C10 45 5 35 10 25 C12 20 18 15 25 10 C28 8 30 0 32 0 C34 0 36 8 39 10 C46 15 50 20 52 25 C57 35 52 45 49 50 C49 60 44 75 34 75 Z"
        fill="url(#clawGradient)"
        stroke="#8b6914"
        strokeWidth="1"
      />
      <path d="M30 0 L30 20" stroke="#1a0f05" strokeWidth="2" strokeLinecap="round"/>
      <path d="M22 15 L25 25" stroke="#1a0f05" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M38 15 L35 25" stroke="#1a0f05" strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="25" cy="30" rx="5" ry="8" fill="#3d2a1a" opacity="0.5"/>
    </motion.svg>
  );

  return (
    <section id="historia" ref={ref} className="py-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 spotlight" />
      <div className="morphing-shape w-[600px] h-[600px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10" />

      {/* Claw decorations on sides */}
      <div className="absolute left-4 top-1/3 hidden md:block" style={{ pointerEvents: 'none' }}>
        <ClawSVG className="w-16 h-20" delay={1.2} />
      </div>
      <div className="absolute right-4 top-1/2 hidden md:block" style={{ pointerEvents: 'none' }}>
        <ClawRight className="w-16 h-20" delay={1.4} />
      </div>
      <div className="absolute left-6 top-2/3 hidden md:block" style={{ pointerEvents: 'none' }}>
        <ClawSVG className="w-12 h-15" delay={1.6} />
      </div>
      <div className="absolute right-6 top-3/4 hidden md:block" style={{ pointerEvents: 'none' }}>
        <ClawRight className="w-12 h-15" delay={1.8} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Jaguar Face Animation */}
          <JaguarFaceAnimation />
          
          <motion.span
            className="text-[#d4a517] text-sm tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Un viaje en el tiempo
          </motion.span>
          
          <motion.h2
            className="text-5xl md:text-6xl font-bold mt-4 text-[#b8860b]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Historia del Jaguar
          </motion.h2>
          
          <motion.p
            className="text-gray-400 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            Miles de años de historia, mito y realidad
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4a517] via-[#8b6914] to-transparent"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5 }}
            style={{ originY: 0 }}
          />

          {timeline.map((item, index) => {
            // Calculate when this item should appear
            const clawDelay = 0.8 + index * 0.3;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Animated Claw on left side */}
                {isLeft && (
                  <motion.div
                    className="absolute left-2 md:left-[-60px] top-0 hidden md:block"
                    style={{ pointerEvents: 'none' }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 0.7, scale: 1 } : {}}
                    transition={{ delay: clawDelay, duration: 0.5 }}
                  >
                    <ClawSVG className="w-12 h-16 transform -rotate-12" delay={0} />
                  </motion.div>
                )}

                {/* Animated Claw on right side */}
                {!isLeft && (
                  <motion.div
                    className="absolute right-2 md:right-[-60px] top-0 hidden md:block"
                    style={{ pointerEvents: 'none' }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 0.7, scale: 1 } : {}}
                    transition={{ delay: clawDelay, duration: 0.5 }}
                  >
                    <ClawRight className="w-12 h-16 transform rotate-12" delay={0} />
                  </motion.div>
                )}

                {/* Content */}
                <div className="flex-1 pl-20 md:pl-0 md:px-12">
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-[#d4a517] text-sm tracking-widest uppercase">{item.year}</span>
                    <h3 className="text-2xl font-bold mt-2 mb-3">{item.title}</h3>
                    <p className="text-lg text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-[#d4a517] border-2 border-black"
                    whileHover={{ scale: 1.5 }}
                  />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
