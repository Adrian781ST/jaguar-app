import { motion } from 'framer-motion';

export default function JaguarFaceAnimation() {
  return (
    <div className="flex justify-center my-8">
      <motion.svg
        width="120"
        height="120"
        viewBox="0 0 200 200"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="overflow-visible"
      >
        {/* Face background */}
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#d4a517"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        
        {/* Left side opening */}
        <motion.path
          d="M100 20 L100 100 L20 100 Z"
          fill="#d4a517"
          opacity="0.8"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        
        {/* Right side opening */}
        <motion.path
          d="M100 20 L100 100 L180 100 Z"
          fill="#d4a517"
          opacity="0.8"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        
        {/* Eyes */}
        <motion.ellipse
          cx="70"
          cy="80"
          rx="15"
          ry="20"
          fill="#0a0a0a"
          stroke="#d4a517"
          strokeWidth="2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        />
        <motion.ellipse
          cx="130"
          cy="80"
          rx="15"
          ry="20"
          fill="#0a0a0a"
          stroke="#d4a517"
          strokeWidth="2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        />
        
        {/* Nose */}
        <motion.path
          d="M90 120 L110 120 L100 140 Z"
          fill="#d4a517"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        />
        
        {/* Mouth lines */}
        <motion.path
          d="M100 140 Q80 160 60 150"
          fill="none"
          stroke="#d4a517"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
        />
        <motion.path
          d="M100 140 Q120 160 140 150"
          fill="none"
          stroke="#d4a517"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
        />
      </motion.svg>
    </div>
  );
}
