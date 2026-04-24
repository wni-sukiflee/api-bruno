'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    setRandoms({
      left: Math.random() * 100,
      duration: 6 + Math.random() * 8, // Slower for background
      delay: Math.random() * 10,
      rotate: Math.random() * 360,
      xOffset: -100 + Math.random() * 200,
      size: 10 + Math.random() * 15,
    });
  }, []);

  if (!randoms) return null;

  return (
    <motion.div
      initial={{ y: -50, opacity: 0, rotate: randoms.rotate }}
      animate={{ 
        y: '110vh', 
        opacity: [0, 0.7, 0.7, 0.4, 0],
        x: [0, randoms.xOffset, 0, -randoms.xOffset],
        rotate: randoms.rotate + 720 
      }}
      transition={{ 
        duration: randoms.duration, 
        delay: randoms.delay, 
        repeat: Infinity,
        ease: "linear"
      }}
      className="fixed top-0 pointer-events-none z-[5]"
      style={{ left: `${randoms.left}%` }}
    >
      <div 
        className="bg-red-400/20 rounded-full blur-[0.5px]" 
        style={{ 
          width: randoms.size,
          height: randoms.size * 1.2,
          borderRadius: '60% 40% 70% 30% / 50% 30% 60% 40%',
        }} 
      />
    </motion.div>
  );
};

export default function FallingFlowers({ count = 40 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      {[...Array(count)].map((_, i) => (
        <Petal key={i} />
      ))}
    </div>
  );
}
