'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Calendar, Clock, Heart, Utensils, Send, CalendarPlus } from 'lucide-react';

export default function InvitationDetails() {
  return (
    <section className="bg-[#FAF7F2] pb-20 px-4 flex flex-col items-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="font-serif italic text-3xl md:text-4xl text-[#5A5A40] mb-2">Details of the Day</h2>
        <p className="font-serif text-[#5A5A40]/70 text-[10px] md:text-xs tracking-[0.2em] uppercase">
          Everything you need to know about our special day
        </p>
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-[#fdfaf5] rounded-3xl overflow-hidden shadow-xl mb-20"
      >
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src="https://png.pngtree.com/thumb_back/fh260/background/20250520/pngtree-elegant-wedding-rings-and-white-rose-bouquet-image_17319559.jpg"
            alt="Wedding Rings"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="p-8 md:p-12">
          <h3 className="font-serif text-2xl text-[#5A5A40] font-bold mb-6">Location</h3>
          <p className="font-serif text-[#5A5A40]/80 mb-8">PuPo, Rueso, Narathiwat</p>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#A0815C]/20 flex items-center justify-center text-[#5A5A40]">
                <MapPin size={20} />
              </div>
              <span className="font-serif text-sm text-[#5A5A40]/80">PuPo, Rueso, Narathiwat, Thailand</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#A0815C]/20 flex items-center justify-center text-[#5A5A40]">
                <Calendar size={20} />
              </div>
              <span className="font-serif text-sm text-[#5A5A40]/80">Thursday, April 30, 2026</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#A0815C]/20 flex items-center justify-center text-[#5A5A40]">
                <Clock size={20} />
              </div>
              <span className="font-serif text-sm text-[#5A5A40]/80">From 09:00 AM</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="flex-1 bg-[#A0815C] text-white py-4 rounded-full font-serif flex items-center justify-center gap-2 hover:bg-[#8B6B45] transition-colors shadow-md">
              <Send size={18} />
              How to get there
            </button>
            <button className="flex-1 bg-transparent border border-[#5A5A40]/30 text-[#5A5A40] py-4 rounded-full font-serif flex items-center justify-center gap-2 hover:bg-[#5A5A40]/5 transition-colors">
              <CalendarPlus size={18} />
              Add to Calendar
            </button>
          </div>
        </div>
      </motion.div>

      {/* Program Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif italic text-3xl md:text-4xl text-[#5A5A40] mb-2">Program of the Day</h2>
        <p className="font-serif text-[#5A5A40]/70 text-[10px] md:text-xs tracking-[0.2em] uppercase">
          Join us through every moment of our celebration
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="w-full max-w-xl relative">
        <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-[#5A5A40]/20 hidden md:block" />
        
        <div className="space-y-12">
          {/* Item 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative">
            <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#5A5A40] z-10 shrink-0">
              <Heart size={20} />
            </div>
            <div className="flex-1 bg-[#fdfaf5]/80 p-6 rounded-2xl shadow-sm border border-white/50 w-full">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-serif text-xl text-[#5A5A40] font-bold">Wedding Ceremony</h4>
                <span className="text-xs font-serif bg-[#5A5A40]/10 px-2 py-1 rounded text-[#5A5A40]">09:00</span>
              </div>
              <p className="font-serif text-[#5A5A40]/70 text-sm leading-relaxed">
                We invite you to witness this momentous occasion, to record a new chapter in our lives as we begin our vows together.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative">
            <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#5A5A40] z-10 shrink-0">
              <Utensils size={20} />
            </div>
            <div className="flex-1 bg-[#fdfaf5]/80 p-6 rounded-2xl shadow-sm border border-white/50 w-full">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-serif text-xl text-[#5A5A40] font-bold">Eating</h4>
                <span className="text-xs font-serif bg-[#5A5A40]/10 px-2 py-1 rounded text-[#5A5A40]">11:00</span>
              </div>
              <p className="font-serif text-[#5A5A40]/70 text-sm leading-relaxed italic">
                Dining is available until 6 pm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
