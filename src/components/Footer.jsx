import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="footer" className="py-16 relative overflow-hidden glass-effect">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      {/* Running Jaguar Animation */}
      <div className="absolute bottom-2 left-0 right-0 overflow-hidden pointer-events-none" style={{ height: '40px' }}>
        <motion.svg
          viewBox="0 0 200 50"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="jaguarGold2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4a517" />
              <stop offset="100%" stopColor="#b8860b" />
            </linearGradient>
          </defs>
          
          {/* Simple running jaguar silhouette */}
          <motion.g
            animate={{ x: ['-100px', '100vw'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            {/* Body */}
            <ellipse cx="30" cy="25" rx="20" ry="10" fill="url(#jaguarGold2)" />
            {/* Head */}
            <ellipse cx="50" cy="20" rx="8" ry="6" fill="url(#jaguarGold2)" />
            {/* Legs - simplified */}
            <line x1="25" y1="35" x2="20" y2="45" stroke="url(#jaguarGold2)" strokeWidth="4" strokeLinecap="round">
              <animate attributeName="y2" values="45;40;45" dur="0.3s" repeatCount="indefinite" />
            </line>
            <line x1="35" y1="35" x2="40" y2="45" stroke="url(#jaguarGold2)" strokeWidth="4" strokeLinecap="round">
              <animate attributeName="y2" values="45;40;45" dur="0.3s" repeatCount="indefinite" begin="0.15s" />
            </line>
            {/* Tail */}
            <path d="M10 25 Q0 20 5 30" stroke="url(#jaguarGold2)" strokeWidth="3" fill="none" strokeLinecap="round" />
          </motion.g>
        </motion.svg>
      </div>

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
          <p className="text-[#d4a517]">© 2026 Jaguar Conservation. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0 text-[#d4a517]">
            Made with the <span role="img">❤️</span> by <a href="https://adevadrian.netlify.app" target="_blank" rel="noopener noreferrer" className="text-[#b8860b] text-lg hover:underline hover:text-[#d4a517] transition-colors duration-300">Adrián</a>
          </p>
        </div>
      </div>

      {/* Gold glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-[#d4a517] opacity-5 blur-[100px]" />
    </footer>
  );
}
