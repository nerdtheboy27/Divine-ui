import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { SlideData } from '../types';

interface Props {
  data: SlideData[];
}

const CarouselHorizontal: React.FC<Props> = ({ data }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Title Overlay */}
        <div className="absolute top-12 left-12 z-10 mix-blend-difference pointer-events-none">
           <h3 className="text-white/20 text-9xl font-bold uppercase tracking-tighter">
             LEELAS
           </h3>
           <p className="text-white/20 text-xl font-serif italic ml-2">Divine Pastimes</p>
        </div>

        <motion.div style={{ x }} className="flex gap-16 px-24">
          {data.map((item, index) => (
            <div key={item.id} className="relative group w-[50vw] md:w-[600px] h-[70vh] flex-shrink-0">
              <div className="w-full h-full overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 relative transform transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs font-bold text-yellow-500 tracking-wider uppercase mb-2 block">
                    CHAPTER 0{index + 1} — {item.subtitle}
                  </span>
                  <h4 className="text-4xl font-serif text-white mb-2">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
          {/* Filler to ensure full scroll */}
          <div className="w-[10vw]" />
        </motion.div>
      </div>
    </section>
  );
};

export default CarouselHorizontal;