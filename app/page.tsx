'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Envelope from '@/components/Envelope';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import InvitationDetails from '@/components/InvitationDetails';
import FallingFlowers from '@/components/FallingFlowers';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <FallingFlowers count={60} />
      <AnimatePresence>
        {!isOpen && (
          <Envelope key="envelope" onOpen={() => setIsOpen(true)} />
        )}
      </AnimatePresence>

      <div className="relative">
        <Hero />
        <Countdown />
        <InvitationDetails />
        
        {/* Footer Decoration */}
        <footer className="bg-[#FAF7F2] py-10 flex justify-center gap-4">
           <div className="w-2 h-2 rounded-full bg-[#fdfaf5]" />
           <div className="w-3 h-3 rounded-full bg-[#A07B50]" />
           <div className="w-2 h-2 rounded-full bg-[#8B6B45]" />
           <div className="w-2 h-2 rounded-full bg-[#C4A484]" />
        </footer>
      </div>
    </main>
  );
}
