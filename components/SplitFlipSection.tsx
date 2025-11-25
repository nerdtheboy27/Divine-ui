
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import fluteImg from '../assets/flute.png';
import chakraImg from '../assets/chakra.png';
import mayuraImg from '../assets/mayura.png';

const SplitFlipSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animation Timeline (Desktop Only)
  // We define the transforms unconditionally to prevent React hook errors.
  const xLeft = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "-5%"]);
  const xRight = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "5%"]);
  const borderRadius = useTransform(scrollYProgress, [0.1, 0.4], [0, 32]);
  const rotateY = useTransform(scrollYProgress, [0.4, 0.7], [0, 180]);

  // Define opacity transforms at top level
  const overlayOpacity = useTransform(scrollYProgress, [0.1, 0.2], [1, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Image Source
  const bgImage = "https://i.pinimg.com/736x/1d/7b/87/1d7b87734a0e818d7018bda6f4fca207.jpg";

  const cards = [
    {
      id: 1,
      x: xLeft,
      title: "Murali",
      subtitle: "The Flute",
      desc: "The divine music that calls every soul back to the eternal abode.",
      icon: fluteImg,
      accent: "text-cyan-400"
    },
    {
      id: 2,
      x: undefined,
      title: "Sudarshan",
      subtitle: "The Disc",
      desc: "The ultimate power used to uphold Dharma and protect the devotees.",
      icon: chakraImg,
      accent: "text-amber-500"
    },
    {
      id: 3,
      x: xRight,
      title: "Mayura",
      subtitle: "The Feather",
      desc: "Symbolizing beauty, grace, and the Lord's connection to nature.",
      icon: mayuraImg,
      accent: "text-pink-500"
    }
  ];

  return (
    <section
      ref={containerRef}
      id="split-flip"
      className={`${isMobile ? 'h-auto py-24' : 'h-[300vh]'} bg-neutral-900 relative z-10`}
    >
      <div className={`${isMobile ? 'relative' : 'sticky top-0 h-screen'} flex flex-col items-center justify-center overflow-hidden perspective-container px-4`}>

        {/* Header fading out on desktop, static on mobile */}
        <motion.div
          style={{ opacity: isMobile ? 1 : headerOpacity }}
          className={`text-center pointer-events-none mb-12 md:absolute md:top-24 md:mb-0 z-20`}
        >
          <h2 className="text-white font-serif text-3xl md:text-4xl mb-2">Divine Aspects</h2>
          <p className="text-neutral-400 text-xs md:text-sm uppercase tracking-widest">
            {isMobile ? "Symbols of Divinity" : "Scroll to reveal the symbols"}
          </p>
        </motion.div>

        {/* Card Container */}
        <div className={`flex ${isMobile ? 'flex-col gap-8 w-full' : 'flex-row w-[90vw] h-[60vh] md:max-w-6xl gap-0'} items-center justify-center relative`}>
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              style={{
                x: isMobile ? 0 : card.x,
                rotateY: isMobile ? 0 : rotateY,
                borderRadius: isMobile ? 24 : borderRadius,
              }}
              className={`relative ${isMobile ? 'w-full h-auto min-h-[250px]' : 'w-1/3 h-full'} preserve-3d group cursor-pointer flex-1`}
            >
              {/* FRONT FACE (Desktop Only) */}
              {!isMobile && (
                <motion.div
                  className="absolute inset-0 backface-hidden overflow-hidden bg-neutral-800"
                  style={{ borderRadius: borderRadius }}
                >
                  <div
                    className="absolute top-0 h-full w-[300%]"
                    style={{
                      left: i === 0 ? '0%' : i === 1 ? '-100%' : '-200%',
                      backgroundImage: `url(${bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

                  <motion.div
                    style={{ opacity: overlayOpacity }}
                    className="absolute bottom-6 left-6 text-white/70 text-xs font-mono uppercase"
                  >

                  </motion.div>
                </motion.div>
              )}

              {/* BACK FACE (Always visible on Mobile, Rotated on Desktop) */}
              <motion.div
                className={`
                    ${isMobile ? 'relative w-full h-full' : 'absolute inset-0 backface-hidden'} 
                    bg-neutral-900 flex flex-col items-center justify-center p-8 text-center border border-white/10 shadow-2xl
                `}
                style={{
                  transform: isMobile ? "none" : "rotateY(180deg)",
                  borderRadius: isMobile ? 24 : borderRadius
                }}
              >
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black to-neutral-800 opacity-50 pointer-events-none rounded-[inherit]" />

                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div className={`w-24 h-24 rounded-full bg-neutral-800/50 border border-white/10 flex items-center justify-center mb-6 mx-auto shadow-[0_0_30px_rgba(0,0,0,0.3)] p-5 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500`}>
                    <img src={card.icon} alt={card.title} className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                  </div>
                  <p className={`text-[10px] md:text-xs uppercase tracking-widest mb-2 ${card.accent} font-bold`}>{card.subtitle}</p>
                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 leading-tight">{card.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed font-light">{card.desc}</p>
                </div>

                {/* Minimal Corner Accents */}
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/10 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/10 rounded-bl-lg" />

              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-container { perspective: 2000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </section>
  );
};

export default SplitFlipSection;
