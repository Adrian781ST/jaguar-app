import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="footer" className="py-16 relative overflow-hidden glass-effect">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-4 text-[#b8860b]"
            >
              JAGUAR 
            </motion.h2>
            <p className="text-gray-400 leading-relaxed max-w-md">
              El Panthera onca, símbolo de poder y misterio, necesita nuestra protección. 
              Cada jaguar salvado es un ecosistema completo preservado.
            </p>
          </div>

          

          {/* Contact */}
          <div>
            <h3 className="text-[#d4a517] text-sm tracking-widest uppercase mb-6">Contacto</h3>
            <ul className="space-y-4 text-gray-400">
              <li>info@jaguarconservation.org</li>
              
              <li>Colombia, northwestern South America</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#d4a517] to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p
            className="text-[#d4a517]"
          >© 2026 Jaguar Conservation. Todos los derechos reservados.</p>
          <p
            className="mt-2 md:mt-0 text-[#d4a517]"
          >Made with the <span role="img">❤️</span> by <a href="https://adevadrian.netlify.app" target="_blank" rel="noopener noreferrer" className="text-[#b8860b] text-lg hover:underline hover:text-[#d4a517] transition-colors duration-300">Adrián</a></p>
          <div className="flex items-center mt-4 md:mt-0 space-x-6">
          </div>
        </div>

        {/* Running Jaguar Animation */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none"
          style={{ height: '50px' }}
        >
          <motion.svg
            viewBox="0 0 200 50"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="jaguarGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4a517" />
                <stop offset="100%" stopColor="#b8860b" />
              </linearGradient>
            </defs>
            
            {/* Running jaguar silhouette */}
            <motion.g
              animate={{
                x: ['-50px', 'calc(100vw + 50px)']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Body */}
              <ellipse cx="100" cy="28" rx="25" ry="12" fill="url(#jaguarGold)" />
              
              {/* Head */}
              <ellipse cx="130" cy="22" rx="10" ry="8" fill="url(#jaguarGold)" />
              
              {/* Ears */}
              <ellipse cx="122" cy="15" rx="3" ry="4" fill="url(#jaguarGold)" />
              <ellipse cx="128" cy="14" rx="3" ry="4" fill="url(#jaguarGold)" />
              
              {/* Snout */}
              <ellipse cx="142" cy="24" rx="6" ry="4" fill="url(#jaguarGold)" />
              
              {/* Eyes */}
              <circle cx="135" cy="20" r="1.5" fill="#0a0a0a" />
              
              {/* Spots on body */}
              <circle cx="90" cy="25" r="3" fill="#8b6914" opacity="0.7" />
              <circle cx="100" cy="30" r="2.5" fill="#8b6914" opacity="0.7" />
              <circle cx="110" cy="26" r="3" fill="#8b6914" opacity="0.7" />
              
              {/* Legs - animated running pose */}
              {/* Front legs */}
              <motion.path
                d="M125 38 L130 50"
                stroke="url(#jaguarGold)"
                strokeWidth="4"
                strokeLinecap="round"
                animate={{
                  d: [
                    "M125 38 L130 50",
                    "M125 38 L120 50",
                    "M125 38 L130 50"
                  ]
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.path
                d="M118 38 L115 50"
                stroke="url(#jaguarGold)"
                strokeWidth="4"
                strokeLinecap="round"
                animate={{
                  d: [
                    "M118 38 L115 50",
                    "M118 38 L120 50",
                    "M118 38 L115 50"
                  ]
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.15
                }}
              />
              
              {/* Back legs */}
              <motion.path
                d="M80 38 L75 50"
                stroke="url(#jaguarGold)"
                strokeWidth="4"
                strokeLinecap="round"
                animate={{
                  d: [
                    "M80 38 L75 50",
                    "M80 38 L80 50",
                    "M80 38 L75 50"
                  ]
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.path
                d="M88 38 L90 50"
                stroke="url(#jaguarGold)"
                strokeWidth="4"
                strokeLinecap="round"
                animate={{
                  d: [
                    "M88 38 L90 50",
                    "M88 38 L85 50",
                    "M88 38 L90 50"
                  ]
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.15
                }}
              />
              
              {/* Tail */}
              <motion.path
                d="M75 25 Q60 20 55 28"
                stroke="url(#jaguarGold)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                animate={{
                  d: [
                    "M75 25 Q60 20 55 28",
                    "M75 25 Q60 30 55 25",
                    "M75 25 Q60 20 55 28"
                  ]
                }}
                transition={{
                  duration: 0.4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.g>
          </motion.svg>
        </motion.div>
      </div>

      {/* Gold glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-[#d4a517] opacity-5 blur-[100px]" />
    </footer>
  );
}
