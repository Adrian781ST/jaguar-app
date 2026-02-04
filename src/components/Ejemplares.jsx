import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Ejemplares() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);

  const ejemplares = [
    {
      nombre: "Jaguar Negro",
      nombreCientifico: "Panthera onca",
      region: "Selvas de América Central",
      caracteristica: "Melanismo - exceso de pigmentación negra",
      descripcion: "Aproximadamente el 6% de los jaguares presentan melanismo, siendo más comunes en las selvas densas donde esta coloración ofrece ventajas de camuflaje."
    },
    {
      nombre: "Jaguar de Pantanal",
      nombreCientifico: "Panthera onca",
      region: "Pantanal, Brasil",
      caracteristica: "La población más densa del mundo",
      descripcion: "El Pantanal alberga la mayor concentración de jaguares del planeta, con aproximadamente 1,000 individuos en un ecosistema único de humedales."
    },
    {
      nombre: "Jaguar del Amazonas",
      nombreCientifico: "Panthera onca",
      region: "Amazonía",
      caracteristica: "El felino más grande de América",
      descripcion: "En la selva amazónica, los jaguares pueden alcanzar hasta 150 kg, siendo los depredadores apex más poderosos del ecosistema."
    },
    {
      nombre: "Jaguar del Chocó",
      nombreCientifico: "Panthera onca",
      region: "Chocó biogeográfico",
      caracteristica: "Población en peligro crítico",
      descripcion: "La población del Pacífico colombiano y ecuatoriano está amenazada por la pérdida de hábitat y la fragmentación del territorio."
    }
  ];

  return (
    <section id="ejemplares" ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a] to-transparent" />

      {/* Rotating Element */}
      <motion.div
        style={{ rotate, scale }}
        className="absolute top-20 right-10 w-64 h-64 opacity-5 pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#d4a517" strokeWidth="0.5" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="50" y1="5" x2="50" y2="15"
              transform={`rotate(${i * 30} 50 50)`}
              stroke="#d4a517"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            className="text-[#d4a517] text-sm tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Diversidad genética
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-bold mt-4 gold-gradient bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Ejemplares Únicos
          </motion.h2>
          <motion.p
            className="text-gray-400 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            Cada jaguar es una obra maestra de la evolución
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {ejemplares.map((ejemplar, index) => (
            <motion.div
              key={ejemplar.nombre}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl p-8 hover:bg-white/5 transition-all duration-500 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <motion.h3
                    className="text-2xl font-bold"
                    whileHover={{ scale: 1.02 }}
                    style={{ 
                      background: 'linear-gradient(135deg, #d4a517, #f4d03f)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    {ejemplar.nombre}
                  </motion.h3>
                  <p className="text-[#d4a517] text-sm italic mt-1">{ejemplar.nombreCientifico}</p>
                </div>
                <motion.div
                  className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </motion.div>
              </div>

              {/* Region */}
              <div className="flex items-center mb-4">
                <svg className="w-5 h-5 text-[#d4a517] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 text-sm">{ejemplar.region}</span>
              </div>

              {/* Característica */}
              <div className="glass-effect rounded-lg p-4 mb-4">
                <p className="text-[#d4a517] text-sm font-semibold uppercase tracking-wide">Característica</p>
                <p className="text-white mt-1">{ejemplar.caracteristica}</p>
              </div>

              {/* Descripción */}
              <p className="text-gray-400 leading-relaxed text-lg">{ejemplar.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
