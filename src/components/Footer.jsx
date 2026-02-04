import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-16 relative overflow-hidden glass-effect">
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
              className="text-4xl font-bold mb-4"
              style={{ 
                background: 'linear-gradient(135deg, #d4a517, #f4d03f)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              JAGUAR
            </motion.h2>
            <p className="text-gray-400 leading-relaxed max-w-md">
              El Panthera onca, símbolo de poder y misterio, necesita nuestra protección. 
              Cada jaguar salvado es un ecosistema completo preservado.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#d4a517] text-sm tracking-widest uppercase mb-6">Explorar</h3>
            <ul className="space-y-4">
              {['Historia', 'Ejemplares', 'Galería', 'Conservación'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#d4a517] transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#d4a517] text-sm tracking-widest uppercase mb-6">Contacto</h3>
            <ul className="space-y-4 text-gray-400">
              <li>info@jaguarconservation.org</li>
              <li>+52 (555) 123-4567</li>
              <li>México, Centro América</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#d4a517] to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2024 Jaguar Conservation. Todos los derechos reservados.</p>
          <div className="flex items-center mt-4 md:mt-0 space-x-6">
            <motion.a
              href="#"
              whileHover={{ color: '#d4a517' }}
              className="transition-colors"
            >
              Facebook
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: '#d4a517' }}
              className="transition-colors"
            >
              Instagram
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: '#d4a517' }}
              className="transition-colors"
            >
              Twitter
            </motion.a>
          </div>
        </div>
      </div>

      {/* Gold glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-[#d4a517] opacity-5 blur-[100px]" />
    </footer>
  );
}
