'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface EnvelopeProps {
  onOpen: () => void;
}

const Petal = () => {
  const [randoms, setRandoms] = useState<{
    left: number;
    duration: number;
    delay: number;
    rotate: number;
    xOffset: number;
    size: number;
  } | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRandoms({
        left: Math.random() * 100,
        duration: 4 + Math.random() * 5,
        delay: Math.random() * 8,
        rotate: Math.random() * 360,
        xOffset: -80 + Math.random() * 160,
        size: 8 + Math.random() * 12,
      });
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!randoms) return null;

  return (
    <motion.div
      initial={{ y: -50, opacity: 0, rotate: randoms.rotate }}
      animate={{ 
        y: '110vh', 
        opacity: [0, 1, 1, 0.7, 0],
        x: [0, randoms.xOffset, 0, -randoms.xOffset],
        rotate: randoms.rotate + 1080 
      }}
      transition={{ 
        duration: randoms.duration, 
        delay: randoms.delay, 
        repeat: Infinity,
        ease: "linear"
      }}
      className="fixed top-0 pointer-events-none z-[100]"
      style={{ left: `${randoms.left}%` }}
    >
      <div 
        className="bg-red-600/40 rounded-full blur-[0.3px]" 
        style={{ 
          width: randoms.size,
          height: randoms.size * 1.3,
          borderRadius: '60% 40% 70% 30% / 50% 30% 60% 40%',
          boxShadow: 'inset 0 0 10px rgba(0,0,0,0.15)'
        }} 
      />
    </motion.div>
  );
};

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    // Timing for petals and reveal
    setTimeout(onOpen, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
      {/* Rose Petals Animation Overlay */}
      <AnimatePresence>
        {isOpening && (
          <div className="fixed inset-0 pointer-events-none z-[100]">
            {[...Array(80)].map((_, i) => (
              <Petal key={i} />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Top Half of Paper */}
      <motion.div 
        initial={{ y: 0 }}
        animate={isOpening ? { y: '-100%' } : { y: 0 }}
        transition={{ duration: 1.5, ease: [0.7, 0, 0.3, 1], delay: 0.1 }}
        onClick={handleOpen}
        className="absolute inset-0 bottom-1/2 bg-[#FAF7F2] border-b border-[#5A5A40]/10 shadow-lg z-20 pointer-events-auto cursor-pointer"
      />
      
      {/* Bottom Half of Paper */}
      <motion.div 
        initial={{ y: 0 }}
        animate={isOpening ? { y: '100%' } : { y: 0 }}
        transition={{ duration: 1.5, ease: [0.7, 0, 0.3, 1], delay: 0.1 }}
        onClick={handleOpen}
        className="absolute inset-0 top-1/2 bg-[#FAF7F2] border-t border-[#5A5A40]/10 shadow-lg z-20 pointer-events-auto cursor-pointer"
      />

      {/* Design Elements that move with the split or fade */}
      <AnimatePresence>
        {!isOpening && (
          <motion.div 
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center p-4 bg-transparent pointer-events-auto"
          >
            {/* Horizontal Line behind the flowers/seal - Matches the user image perfectly */}
            <div className="absolute w-full h-[2px] bg-[#5A5A40]/30 top-1/2 -translate-y-1/2" />

            {/* Floral Arrangement & Seal Container */}
            <div className="relative w-[90vw] md:w-[500px] h-64 md:h-80 flex items-center justify-center">
              {/* Floral Arrangement (Arranged like the reference image) */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 z-0 flex items-center justify-center"
              >
                <div className="relative w-full h-full transform scale-75 md:scale-90">
                  <Image
                    src="https://freepngimg.com/save/100281-watercolor-flower-art-free-photo/3750x1683"
                    alt="Floral Arrangement"
                    fill
                    className="object-contain pointer-events-none opacity-90"
                    priority
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              {/* Organic Rose Wax Seal - Detailed Organic Shape */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleOpen}
                className="relative z-10 w-28 h-28 md:w-40 md:h-40 flex items-center justify-center cursor-pointer focus:outline-none"
              >
                {/* Seal Base (Perfect Circle) */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-[#c19266] via-[#a67c52] to-[#8a5a44] shadow-2xl rounded-full"
                  style={{
                    boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5), 0 10px 30px rgba(0,0,0,0.4), 0 0 0 4px rgba(255,255,255,0.05)'
                  }}
                />
                
                {/* Initials S A - Reverted Content */}
                <div 
                  className="absolute inset-3 md:inset-4 border border-white/10 flex flex-col items-center justify-center rounded-full"
                >
                   <span className="font-serif text-white/50 text-xl md:text-3xl font-bold tracking-widest leading-none mb-1">S</span>
                   <div className="w-6 md:w-8 h-[0.5px] bg-white/30 my-0.5" />
                   <span className="font-serif text-white/50 text-xl md:text-3xl font-bold tracking-widest leading-none">A</span>
                </div>
              </motion.button>
            </div>

            <motion.p
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mt-6 font-serif tracking-[0.4em] text-[#5A5A40] text-xs uppercase z-10"
            >
              Click to Open
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
