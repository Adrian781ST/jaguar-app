import { useEffect, useState, useCallback } from 'react';

export default function PantherSpots() {
  const [spots, setSpots] = useState([]);

  const createSpot = useCallback((x, y) => ({
    id: Date.now() + Math.random(),
    x,
    y,
    size: 60 + Math.random() * 120,
    rotation: Math.random() * 360,
    opacity: 0.1 + Math.random() * 0.15,
    duration: 5 + Math.random() * 5
  }), []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (Math.random() > 0.6) {
        const newSpot = createSpot(e.clientX, e.clientY);
        setSpots(prev => [...prev.slice(-5), newSpot]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [createSpot]);

  return (
    <>
      {spots.map((spot) => (
        <div
          key={spot.id}
          className="fixed pointer-events-none z-5"
          style={{
            left: spot.x - spot.size / 2,
            top: spot.y - spot.size / 3,
            width: spot.size,
            height: spot.size * 0.7,
            background: 'radial-gradient(ellipse at 30% 30%, rgba(212, 165, 23, 0.5) 0%, rgba(212, 165, 23, 0.2) 40%, transparent 70%)',
            animation: `spotFade ${spot.duration}s ease-out forwards`,
            transform: `rotate(${spot.rotation}deg)`
          }}
        />
      ))}
      <style>{`
        @keyframes spotFade {
          0% { opacity: 0; transform: scale(0.5) rotate(var(--rotation)); }
          15% { opacity: var(--opacity); }
          50% { opacity: calc(var(--opacity) * 0.8); }
          100% { opacity: 0; transform: scale(2) rotate(calc(var(--rotation) + 45deg)); }
        }
      `}</style>
    </>
  );
}
