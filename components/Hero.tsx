'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#FAF7F2] flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Floral Corners */}
      <div className="absolute -top-10 -right-10 w-48 h-48 md:w-80 md:h-80 pointer-events-none overflow-hidden">
        <Image
          src="https://png.pngtree.com/png-vector/20241009/ourmid/pngtree-minimalist-flower-corner-border-png-image_14023427.png"
          alt="Floral ornament"
          fill
          className="object-contain rotate-180"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute -bottom-10 -left-10 w-48 h-48 md:w-80 md:h-80 pointer-events-none overflow-hidden">
        <Image
          src="https://png.pngtree.com/png-vector/20241009/ourmid/pngtree-minimalist-flower-corner-border-png-image_14023427.png"
          alt="Floral ornament"
          fill
          className="object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center z-10 flex flex-col items-center"
      >
        <p className="font-sans text-[#5A5A40] tracking-[0.5em] uppercase text-[10px] md:text-sm mb-1 leading-relaxed">
          Welcome
        </p>
        <p className="font-sans text-[#5A5A40] tracking-[0.4em] uppercase text-[10px] md:text-sm mb-16">
          to the wedding of
        </p>

        <h1 className="font-cursive text-7xl md:text-8xl lg:text-[8rem] text-[#B99A6E] leading-none mb-4 lowercase italic opacity-80 text-center">
          sa
        </h1>

        <div className="w-40 md:w-64 h-[1px] bg-[#B99A6E]/30 mb-10" />

        <h2 className="font-serif text-[#5A5A40] tracking-[0.4em] uppercase text-base md:text-2xl mb-16 font-medium">
          Sukiflee & Asyah
        </h2>

        <p className="font-serif text-[#5A5A40] tracking-[0.4em] text-xs md:text-base opacity-80 font-medium">
          30.04.2026
        </p>
      </motion.div>
    </section>
  );
}
