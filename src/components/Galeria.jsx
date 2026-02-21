import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function Galeria() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 50]);

  const images = [
    {
      src: "/images/1dada3eb-1.png",
      title: "Jaguar en la Selva",
      category: "Vida Silvestre",
      description: "El depredador supreme acechando entre la vegetación tropical"
    },
    {
      src: "/images/1dada3eb-2.png",
      title: "Retrato Majestuoso",
      category: "Retrato",
      description: "La mirada penetrante del rey de la selva americana"
    },
    {
      src: "/images/1dada3eb-3.png",
      title: "Poder y Belleza",
      category: "Belleza",
      description: "La elegante silueta del jaguar en su máximo esplendor"
    },
    {
      src: "/images/1dada3eb-4.png",
      title: "Guardián de la Selva",
      category: "Hábitat",
      description: "El jaguar protegiendo su territorio natural"
    },
    {
      src: "/images/1dada3eb-5.png",
      title: "Instinto Salvaje",
      category: "Acción",
      description: "Capturando la esencia del cazador perfecto"
    },
    {
      src: "/images/1dada3eb-6.png",
      title: "Elegancia Felina",
      category: "Elegancia",
      description: "La grace movimiento del gran felino"
    },
    {
      src: "/images/1dada3eb-7.png",
      title: "Reino Salvaje",
      category: "Naturaleza",
      description: "El jaguar en su elemento natural"
    },
    {
      src: "/images/1dada3eb-8.png",
      title: "Majestad Tropical",
      category: "Realeza",
      description: "La corona de la selva amazónica"
    },
    {
      src: "/images/Fondo-Mundial-para-la-naturazlea.jpg",
      title: "Conservación Mundial",
      category: "Protección",
      description: "Esfuerzos globales para proteger al jaguar"
    },
    {
      src: "/images/nicks-jaguar-pantanal-brasil-header-66656.jpg",
      title: "Jaguar del Pantanal",
      category: "Hábitat",
      description: "El rey del Pantanal brasileiro"
    },
    {
      src: "/images/Nicks-pantanal-jaguar-013-500x400.jpg",
      title: "Cazador del Pantanal",
      category: "Caza",
      description: "Instintos de depredador en acción"
    },
    {
      src: "/images/Screenshot_1.png",
      title: "Belleza Salvaje",
      category: "Arte",
      description: "La belleza del jaguar en estado natural"
    },
    {
      src: "/images/Screenshot_2.png",
      title: "Misterio Selvático",
      category: "Misterio",
      description: "El jaguar escondid en la oscuridad de la selva"
    },
    {
      src: "/images/Screenshot_3.png",
      title: "Majestuosidad Felina",
      category: "Grandeza",
      description: "El porte real del gran felino"
    },
    {
      src: "/images/Screenshot_4.png",
      title: "Entre Sombras",
      category: "Camuflaje",
      description: "El jaguar camuflándose entre la vegetación"
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="galeria" ref={containerRef} className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%)' }}>
      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Backdrop blur */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
          
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-4 right-4 z-50 p-2 text-white hover:text-[#d4a517] transition-colors"
            onClick={closeLightbox}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Full image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="relative max-w-5xl max-h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-center"
            >
              <span 
                className="text-sm tracking-widest uppercase"
                style={{ color: '#d4a517' }}
              >
                {selectedImage.category}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">{selectedImage.title}</h3>
              <p className="text-gray-300 mt-2 max-w-lg mx-auto">{selectedImage.description}</p>
            </motion.div>
          </motion.div>

          {/* Gold border glow */}
          <div className="absolute inset-0 rounded-lg pointer-events-none"
            style={{ 
              boxShadow: '0 0 50px rgba(212, 165, 23, 0.3), inset 0 0 50px rgba(212, 165, 23, 0.1)' 
            }}
          />
        </motion.div>
      )}

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
              onClick={() => openLightbox(image)}
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

              {/* Click indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl"
              >
                <span className="text-[#d4a517] text-sm tracking-widest uppercase">Ver imagen</span>
              </motion.div>
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
