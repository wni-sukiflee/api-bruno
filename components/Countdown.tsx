'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TimerBox = ({ label, value }: { label: string; value: number }) => (
  <div className="flex flex-col items-center bg-[#fdfaf5]/80 backdrop-blur-sm p-2 md:p-4 rounded-xl md:rounded-2xl shadow-sm border border-[#5A5A40]/10 w-16 md:w-28">
    <span className="text-xl md:text-4xl font-serif text-[#5A5A40] font-bold">
      {String(Math.max(0, value)).padStart(2, '0')}
    </span>
    <span className="text-[8px] md:text-xs font-serif text-[#5A5A40]/60 uppercase tracking-widest mt-1">
      {label}
    </span>
  </div>
);

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-04-30T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#F2EDE4] py-20 px-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="font-serif italic text-3xl md:text-4xl text-[#5A5A40] mb-2">Countdown</h2>
        <p className="font-serif text-[#5A5A40]/70 text-[10px] md:text-xs tracking-[0.2em] uppercase">
          Until we say &quot;I do&quot;
        </p>
      </motion.div>

      <div className="flex gap-2 md:gap-4">
        <TimerBox label="Days" value={timeLeft.days} />
        <TimerBox label="Hours" value={timeLeft.hours} />
        <TimerBox label="Minutes" value={timeLeft.minutes} />
        <TimerBox label="Seconds" value={timeLeft.seconds} />
      </div>
    </section>
  );
}
