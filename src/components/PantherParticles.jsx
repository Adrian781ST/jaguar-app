import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const particles = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: `${(i * 2) % 100}%`,
  delay: `${(i * 0.2) % 8}s`,
  duration: `${15 + (i % 10)}s`,
  size: 2 + (i % 3)
}));

export default function PantherParticles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-5">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full bg-[#d4a517]"
          style={{
            left: particle.left,
            width: particle.size,
            height: particle.size,
            opacity: 0.8,
            bottom: '-10px'
          }}
          animate={{
            y: [-10, -window.innerHeight],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: parseFloat(particle.duration),
            delay: parseFloat(particle.delay),
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
