import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity, useAnimationFrame, useMotionValue } from 'framer-motion';
import { wrap } from '@motionone/utils';

interface ParallaxTextProps {
  children: React.ReactNode;
  baseVelocity: number;
}

const ParallaxText: React.FC<ParallaxTextProps> = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Change direction based on scroll direction
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax-text flex whitespace-nowrap overflow-hidden letter-spacing-tighter leading-[0.85]">
      <motion.div className="flex flex-nowrap" style={{ x }}>
        <span className="block mr-8">{children}</span>
        <span className="block mr-8">{children}</span>
        <span className="block mr-8">{children}</span>
        <span className="block mr-8">{children}</span>
      </motion.div>
    </div>
  );
};

const TypographySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Skew effect based on scroll velocity
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const skewVelocity = useSpring(scrollVelocity, {
    stiffness: 100,
    damping: 30
  });
  const skew = useTransform(skewVelocity, [-1000, 1000], [-10, 10]);

  return (
    <section ref={containerRef} id="typography" className="py-24 md:py-48 bg-neutral-950 overflow-hidden relative">
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5" />
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-white/5" />

      <div className="relative z-10 flex flex-col gap-12 md:gap-24 pointer-events-none select-none">
        
        <motion.div style={{ skewX: skew }} className="origin-center">
            <ParallaxText baseVelocity={-2}>
                <span className="text-8xl md:text-[10vw] font-bold text-white uppercase tracking-tighter">
                    Hare <span className="font-serif italic font-light text-cyan-500">Krishna</span> Hare <span className="font-serif italic font-light text-yellow-500">Rama</span>
                </span>
            </ParallaxText>
        </motion.div>

        <motion.div style={{ skewX: skew }} className="origin-center">
            <ParallaxText baseVelocity={2}>
                 <span className="text-8xl md:text-[10vw] font-serif italic text-neutral-400 tracking-tighter">
                    Prem <span className="font-sans font-black text-transparent text-stroke-white uppercase not-italic">Bhakti</span> Moksha
                </span>
            </ParallaxText>
        </motion.div>

        <motion.div style={{ skewX: skew }} className="origin-center">
             <ParallaxText baseVelocity={-3}>
                <span className="text-8xl md:text-[10vw] font-bold text-white uppercase tracking-tighter">
                     Radhe <span className="font-serif italic font-light text-pink-500">Radhe</span> Shyam <span className="font-serif italic font-light text-cyan-500">Shyam</span>
                </span>
             </ParallaxText>
        </motion.div>

      </div>

      <div className="mt-32 max-w-4xl mx-auto px-8 text-center relative z-20">
          <p className="text-xl md:text-3xl text-neutral-300 font-light leading-relaxed">
            "You have a right to perform your prescribed duties, but you are not entitled to the <span className="font-serif italic text-yellow-500">fruits of your actions</span>."
            <br/><span className="text-sm text-neutral-500 mt-4 block uppercase tracking-widest">— Bhagavad Gita 2.47</span>
          </p>
      </div>

      <style>{`
        .text-stroke-white {
          -webkit-text-stroke: 2px rgba(255,255,255,0.8);
        }
      `}</style>
    </section>
  );
};

export default TypographySection;