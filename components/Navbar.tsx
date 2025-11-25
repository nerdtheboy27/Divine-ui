import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Mantra', id: 'typography' },
    { name: 'Trimurti', id: 'split-flip' },
    { name: 'Dharma', id: 'dual' },
    { name: 'Leela', id: 'horizontal' },
    { name: 'Avatars', id: 'perspective' },
    { name: 'Bhakti', id: 'tilted' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white"
    >
      <div className="text-xl font-bold tracking-tighter cursor-pointer z-50 flex items-center gap-2" onClick={() => window.scrollTo(0,0)}>
        <span className="text-yellow-500 text-2xl">ॐ</span> DIVINE UI
      </div>
      <nav className="hidden md:block z-50">
        <ul className="flex gap-8 text-xs font-medium uppercase tracking-widest opacity-90">
          {navItems.map((item) => (
            <li key={item.name}>
              <button 
                onClick={() => scrollToSection(item.id)}
                className="hover:text-yellow-500 transition-colors duration-300 relative group font-bold"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-yellow-500 transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;