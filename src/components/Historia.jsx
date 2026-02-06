import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import JaguarFaceAnimation from './JaguarFaceAnimation';

export default function Historia() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  return (
    <section id="historia" ref={ref} className="py-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 spotlight" />
      <div className="morphing-shape w-[600px] h-[600px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10" />

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
        <div className="relative">
          {/* Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4a517] via-[#8b6914] to-transparent"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5 }}
            style={{ originY: 0 }}
          />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
