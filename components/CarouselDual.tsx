import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SlideData } from '../types';

interface Props {
  data: SlideData[];
}

const CarouselDual: React.FC<Props> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Duplicate data to ensure we have enough height
  const col1Data = [...data, ...data].slice(0, 6);
  const col2Data = [...data, ...data].slice(1, 7).reverse();

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section ref={containerRef} id="dual" className="relative h-[150vh] bg-neutral-950 overflow-hidden flex items-center justify-center">
      
      {/* Center Overlay Content */}
      <div className="absolute z-20 pointer-events-none mix-blend-difference text-center">
          <h2 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-4">DHARMA</h2>
          <p className="text-white/60 text-lg uppercase tracking-[0.5em]">&</p>
          <h2 className="text-7xl md:text-9xl font-serif italic tracking-tighter text-white mb-4">KARMA</h2>
      </div>

      <div className="w-full max-w-7xl h-full flex gap-8 md:gap-16 px-4 md:px-16 overflow-hidden">
        
        {/* Column 1 - Moves Up */}
        <div className="w-1/2 h-full relative">
            <motion.div style={{ y: y1 }} className="absolute top-0 w-full flex flex-col gap-8 md:gap-16">
                {col1Data.map((item, idx) => (
                    <div key={`col1-${idx}`} className="w-full aspect-[3/4] relative overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-500">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        <div className="absolute bottom-4 left-4 text-white">
                            <p className="text-xs text-yellow-500 font-bold uppercase">{item.subtitle}</p>
                            <h3 className="text-xl font-serif">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>

        {/* Column 2 - Moves Down */}
        <div className="w-1/2 h-full relative">
            <motion.div style={{ y: y2 }} className="absolute -top-1/2 w-full flex flex-col gap-8 md:gap-16">
                 {col2Data.map((item, idx) => (
                    <div key={`col2-${idx}`} className="w-full aspect-[3/4] relative overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-500">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                         <div className="absolute bottom-4 left-4 text-white">
                            <p className="text-xs text-yellow-500 font-bold uppercase">{item.subtitle}</p>
                            <h3 className="text-xl font-serif">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default CarouselDual;