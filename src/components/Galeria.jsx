import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Galeria() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const images = [
    {
      src: "https://www.pexels.com/es-es/foto/primer-plano-de-un-leopardo-del-amur-en-estado-salvaje-30395760/",
      title: "Majestuosidad",
      category: "Retrato",
      description: "La mirada penetrante del depredador perfecto"
    },
    {
      src: "https://pixabay.com/es/illustrations/jaguar-animal-naturaleza-intenso-7485361/",
      title: "Reino Salvaje",
      category: "Vida Silvestre",
      description: "El jaguar en su entorno natural"
    },
    {
      src: "https://pixabay.com/es/illustrations/jaguar-animal-naturaleza-intenso-7485361/",
      title: "Garras de Oro",
      category: "Detalle",
      description: "Las garras retráctiles que definen al cazador supremo"
    },
    {
      src: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "El Puma Americano",
      category: "Primo Salvaje",
      description: "El felino más grande de Norteamérica"
    },
    {
      src: "https://images.pexels.com/photos/13301383/pexels-photo-13301383.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Poder",
      category: "Acción",
      description: "La fuerza de un depredador legendario"
    },
    {
      src: "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "La Pantera Negra",
      category: "Variante",
      description: "La melanía, la variante oscura del jaguar"
    }
  ];

  return (
    <section id="galeria" ref={containerRef} className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            className="text-sm tracking-widest uppercase"
            style={{ color: '#d4a517' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Belleza natural
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-bold mt-4 text-[#b8860b]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Galería del Jaguar
          </motion.h2>
          
          {/* Gold divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#d4a517] to-transparent mx-auto mt-6 w-48" />
          
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-gray-400"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            Instantáneas que capturan la esencia del rey de la selva 
          </motion.p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer h-72"
              whileHover={{ scale: 1.02 }}
            >
              {/* Background Image with blur */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ 
                  backgroundImage: `url(${image.src})`,
                  filter: 'blur(2px) brightness(0.7)'
                }}
              />

              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content always visible */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span 
                  className="text-xs tracking-widest uppercase mb-2"
                  style={{ color: '#d4a517' }}
                >
                  {image.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                <p className="text-gray-300 text-sm">{image.description}</p>
              </div>

              {/* Gold Border */}
              <div className="absolute inset-0 border-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"
                style={{ borderColor: '#d4a517' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Visual separator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2, duration: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-sm tracking-widest">
            <span style={{ color: '#d4a517' }}>★</span> Cada jaguar es único — sus manchas son como huellas digitales <span style={{ color: '#d4a517' }}>★</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
