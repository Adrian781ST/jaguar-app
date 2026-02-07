import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function Ejemplares() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(null);
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
      descripcion: "Aproximadamente el 6% de los jaguares presentan melanismo, siendo más comunes en las selvas densas donde esta coloración ofrece ventajas de camuflaje.",
      image: "/images/jaguar-negro.svg",
      photoUrl: "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      nombre: "Jaguar de Pantanal",
      nombreCientifico: "Panthera onca",
      region: "Pantanal, Brasil",
      caracteristica: "La población más densa del mundo",
      descripcion: "El Pantanal alberga la mayor concentración de jaguares del planeta, con aproximadamente 1,000 individuos en un ecosistema único de humedales.",
      image: "/images/jaguar-pantanal.svg",
      photoUrl: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      nombre: "Jaguar del Amazonas",
      nombreCientifico: "Panthera onca",
      region: "Amazonía",
      caracteristica: "El felino más grande de América",
      descripcion: "En la selva amazónica, los jaguares pueden alcanzar hasta 150 kg, siendo los depredadores apex más poderosos del ecosistema.",
      image: "/images/jaguar-amazonas.svg",
      photoUrl: "https://images.pexels.com/photos/748837/pexels-photo-748837.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      nombre: "Jaguar del Chocó",
      nombreCientifico: "Panthera onca",
      region: "Chocó biogeográfico",
      caracteristica: "Población en peligro crítico",
      descripcion: "La población del Pacífico colombiano y ecuatoriano está amenazada por la pérdida de hábitat y la fragmentación del territorio.",
      image: "/images/jaguar-choco.svg",
      photoUrl: "https://images.pexels.com/photos/69372/pexels-photo-69372.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const openImageModal = (ejemplar) => {
    setSelectedImage(ejemplar);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="ejemplares" ref={containerRef} className="py-20 relative overflow-hidden">
      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeImageModal}
        >
          {/* Backdrop blur */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />
          
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-4 right-4 z-50 p-2 text-white hover:text-[#d4a517] transition-colors"
            onClick={closeImageModal}
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
            className="relative max-w-4xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.photoUrl}
              alt={selectedImage.nombre}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-center"
            >
              <span className="text-sm tracking-widest uppercase text-[#d4a517]">
                {selectedImage.region}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">{selectedImage.nombre}</h3>
              <p className="text-[#d4a517] italic mt-1">{selectedImage.nombreCientifico}</p>
              <p className="text-gray-300 mt-2 max-w-lg mx-auto">{selectedImage.caracteristica}</p>
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

      {/* Background - Pantera Dorada */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.pexels.com/photos/70849/pexels-photo-70849.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
          filter: 'brightness(0.4) blur(3px)'
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />

      {/* Golden spots overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="30" cy="30" r="4" fill="%23b8860b"/%3E%3C/svg%3E')`,
        backgroundSize: '60px 60px'
      }}/>

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
            className="text-5xl md:text-6xl font-bold mt-4 text-[#b8860b]"
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
            <span style={{ color: '#d4a517' }}>★</span> Cada jaguar es una obra maestra de la evolución <span style={{ color: '#d4a517' }}>★</span>
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
              className="group relative overflow-hidden rounded-2xl h-96"
            >
              {/* Background Image with blur */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ 
                  backgroundImage: `url(${ejemplar.image})`,
                  filter: 'blur(2px) brightness(0.5)'
                }}
              />

              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <motion.h3
                      className="text-2xl font-bold text-white"
                      whileHover={{ scale: 1.02 }}
                    >
                      {ejemplar.nombre}
                    </motion.h3>
                    <p className="text-[#d4a517] text-sm italic mt-1">{ejemplar.nombreCientifico}</p>
                  </div>
                  <motion.button
                    className="w-10 h-10 rounded-full bg-[#d4a517] flex items-center justify-center opacity-80 hover:opacity-100 transition-all cursor-pointer hover:scale-110"
                    whileHover={{ rotate: 180 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      openImageModal(ejemplar);
                    }}
                    title="Ver imagen del jaguar"
                  >
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </motion.button>
                </div>

                {/* Region */}
                <div className="flex items-center mb-3">
                  <svg className="w-4 h-4 text-[#d4a517] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300 text-sm">{ejemplar.region}</span>
                </div>

                {/* Característica */}
                <div className="glass-effect rounded-lg p-3 mb-3">
                  <p className="text-[#d4a517] text-xs font-semibold uppercase tracking-wide">Característica</p>
                  <p className="text-white text-sm mt-1">{ejemplar.caracteristica}</p>
                </div>

                {/* Descripción */}
                <p className="text-gray-400 leading-relaxed text-sm">{ejemplar.descripcion}</p>
              </div>

              {/* Gold Border */}
              <div className="absolute inset-0 border-2 opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ borderColor: '#d4a517' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
