import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';

const HeroModern: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth);
      mouseY.set(clientY / innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Text reveal animation
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVars = {
    hidden: { y: 100, opacity: 0, skewY: 10 },
    visible: {
      y: 0,
      opacity: 1,
      skewY: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div ref={containerRef} className="relative w-full min-h-screen overflow-hidden bg-neutral-950 flex flex-col items-center justify-center py-20">

      {/* Animated Background Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-cyan-900/30 rounded-full blur-[100px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] bg-amber-600/20 rounded-full blur-[100px]"
          animate={{ x: [0, -30, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] bg-emerald-900/20 rounded-full blur-[120px]"
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      {/* Main Content */}
      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center flex flex-col items-center justify-center w-full px-4"
      >
        <div className="overflow-hidden mb-6 md:mb-12">
          <motion.p variants={itemVars} className="text-yellow-500 font-mono text-xs md:text-sm tracking-[0.5em] uppercase">
            The Supreme Personality
          </motion.p>
        </div>

        {/* Text Container */}
        <div className="relative flex flex-col items-center justify-center">
          <motion.div style={{ y: y2 }} className="absolute -left-16 top-0 w-24 h-24 border-t border-l border-white/20 hidden md:block" />
          <motion.div style={{ y: y1 }} className="absolute -right-16 bottom-0 w-24 h-24 border-b border-r border-white/20 hidden md:block" />

          {/* Hindi Text */}
          <div className="overflow-visible relative z-20">
            <motion.h1
              variants={itemVars}
              className="text-[120px] md:text-[200px] leading-tight font-bold text-white tracking-wide font-yatra"
            >
              श्री
            </motion.h1>
          </div>

          {/* English Text - Removed negative margin to fix overlap on Windows */}
          <div className="overflow-visible mt-2 md:mt-4 relative z-10">
            <motion.h1
              variants={itemVars}
              className="text-[60px] md:text-[140px] leading-none font-serif italic text-cyan-500/90 tracking-tighter"
            >
              KRISHNA
            </motion.h1>
          </div>
        </div>

        <div className="mt-12 md:mt-16 overflow-hidden px-4">
          <motion.p variants={itemVars} className="text-neutral-400 max-w-lg text-sm md:text-lg leading-relaxed font-light mx-auto">
            <span className="font-serif italic text-white">Govindam Adi Purusham.</span><br />
            Experiencing the absolute truth through <span className="text-yellow-500 font-medium">love</span> and <span className="text-yellow-500 font-medium">devotion</span>.
          </motion.p>
        </div>

        <motion.div variants={itemVars} className="mt-12 md:mt-16">
          <div className="h-16 w-[1px] bg-gradient-to-b from-yellow-500 to-transparent mx-auto" />
        </motion.div>
      </motion.div>

      {/* Bottom Info */}
      <div className="absolute bottom-8 w-full px-8 md:px-24 flex justify-between items-end text-[10px] md:text-xs font-mono text-neutral-600 uppercase tracking-widest">
        <div className="text-left">Mathura<br />Vrindavan</div>
        <div className="hidden md:block text-yellow-500/50">Chant Hare Krishna</div>
        <div className="text-right">Yuga: Kalyug<br />Time: Eternal</div>
      </div>

    </div>
  );
};

export default HeroModern;