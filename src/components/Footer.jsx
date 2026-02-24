import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="footer" className="py-16 relative overflow-hidden glass-effect">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      {/* Running Jaguar Animation */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none" style={{ height: '25px' }}>
        <div 
          className="absolute" 
          style={{ 
            width: '80px', 
            height: '100%',
            animation: 'runAcross 10s linear infinite'
          }}
        >
          <svg viewBox="0 0 120 40" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="jagRunGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d4a517" />
                <stop offset="100%" stopColor="#b8860b" />
              </linearGradient>
            </defs>
            
            {/* Jaguar silhouette - running profile */}
            <g>
              {/* Body */}
              <ellipse cx="50" cy="22" rx="28" ry="12" fill="url(#jagRunGold)" />
              
              {/* Head - tiger/jaguar profile */}
              <ellipse cx="82" cy="16" rx="10" ry="8" fill="url(#jagRunGold)" />
              
              {/* Snout - short and powerful like a big cat */}
              <ellipse cx="94" cy="18" rx="6" ry="4" fill="url(#jagRunGold)" />
              
              {/* Nose */}
              <ellipse cx="99" cy="18" rx="1.5" ry="1" fill="#1a1a1a" />
              
              {/* Ear - rounded triangle */}
              <ellipse cx="77" cy="9" rx="3" ry="4" fill="url(#jagRunGold)" />
              
              {/* Eye - fierce */}
              <ellipse cx="86" cy="14" rx="2" ry="1.5" fill="#0a0a0a" />
              <circle cx="85.5" cy="14" r="0.5" fill="#fff" />
              
              {/* Spots on body */}
              <circle cx="40" cy="20" r="3" fill="#8b6914" opacity="0.6" />
              <circle cx="55" cy="25" r="2.5" fill="#8b6914" opacity="0.6" />
              <circle cx="65" cy="21" r="3" fill="#8b6914" opacity="0.6" />
              
              {/* Animated legs */}
              <g>
                {/* Front leg 1 */}
                <path d="M68 32 L71 42" stroke="url(#jagRunGold)" strokeWidth="5" strokeLinecap="round">
                  <animate attributeName="d" values="M68 32 L71 42;M68 32 L65 42;M68 32 L71 42" dur="0.25s" repeatCount="indefinite" />
                </path>
                {/* Front leg 2 */}
                <path d="M58 32 L55 42" stroke="url(#jagRunGold)" strokeWidth="5" strokeLinecap="round">
                  <animate attributeName="d" values="M58 32 L55 42;M58 32 L61 42;M58 32 L55 42" dur="0.25s" repeatCount="indefinite" begin="0.125s" />
                </path>
                {/* Back leg 1 */}
                <path d="M30 32 L25 42" stroke="url(#jagRunGold)" strokeWidth="5" strokeLinecap="round">
                  <animate attributeName="d" values="M30 32 L25 42;M30 32 L35 42;M30 32 L25 42" dur="0.25s" repeatCount="indefinite" />
                </path>
                {/* Back leg 2 */}
                <path d="M40 32 L45 42" stroke="url(#jagRunGold)" strokeWidth="5" strokeLinecap="round">
                  <animate attributeName="d" values="M40 32 L45 42;M40 32 L38 42;M40 32 L45 42" dur="0.25s" repeatCount="indefinite" begin="0.125s" />
                </path>
              </g>
              
              {/* Tail */}
              <path d="M22 20 Q5 15 8 28" stroke="url(#jagRunGold)" strokeWidth="4" fill="none" strokeLinecap="round">
                <animate attributeName="d" values="M22 20 Q5 15 8 28;M22 20 Q5 25 8 18;M22 20 Q5 15 8 28" dur="0.4s" repeatCount="indefinite" />
              </path>
            </g>
          </svg>
        </div>
        <style>{`
          @keyframes runAcross {
            0% { left: -80px; }
            100% { left: 100%; }
          }
        `}</style>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 text-center">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-4 text-[#b8860b]"
            >
              JAGUAR 
            </motion.h2>
            <p className="text-gray-400 leading-relaxed max-w-md mx-auto">
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
