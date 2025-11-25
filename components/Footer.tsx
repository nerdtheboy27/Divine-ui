import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    const sentence = "RADHE RADHE";
    const letters = sentence.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.2 }
        })
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            }
        },
        hidden: {
            opacity: 0,
            y: 50,
        },
    };

    return (
        <footer className="bg-neutral-950 text-white pt-12 md:pt-24 pb-12 border-t border-neutral-900 relative overflow-hidden group">

            {/* Massive Thank You Typography */}
            <div className="w-full overflow-hidden mb-12 md:mb-16 px-4 flex justify-center pt-8 md:pt-8 pb-8">
                <motion.h1
                    className="flex whitespace-nowrap text-[11vw] xl:text-[160px] leading-tight font-serif font-bold italic tracking-tighter mix-blend-difference text-neutral-200 cursor-default select-none"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {letters.map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={child}
                            className="inline-block hover:text-pink-500 transition-colors duration-300"
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </motion.h1>
            </div>

            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent mt-4 mx-auto max-w-[80vw] mb-12 md:mb-24 origin-center"
            />

            {/* Footer Links Grid */}
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12 md:mb-24 text-center md:text-left">

                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-2xl font-serif italic mb-6 text-white">Divine Love</h3>
                    <p className="text-neutral-500 max-w-sm mx-auto md:mx-0 leading-relaxed">
                        Spreading the message of love, peace, and devotion through the digital medium.
                        <span className="block mt-2 font-serif italic text-yellow-500/80">Jai Shree Krishna.</span>
                    </p>
                </div>

                <div className="col-span-1">
                    <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-widest mb-6">Temples</h4>
                    <ul className="space-y-4 text-neutral-500 text-sm">
                        <li className="hover:text-yellow-500 transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300 inline-block">Vrindavan</li>
                        <li className="block hover:text-yellow-500 transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Mathura</li>
                        <li className="block hover:text-yellow-500 transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Dwarka</li>
                        <li className="block hover:text-yellow-500 transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Mayapur</li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-widest mb-6">Connect</h4>
                    <ul className="space-y-4 text-neutral-500 text-sm">
                        <li className="block">
                            <a href="https://github.com/nerdtheboy27" className="hover:text-yellow-500 transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300 inline-block">Donations</a>
                        </li>
                        <li className="block">
                            <a href="https://github.com/nerdtheboy27" className="hover:text-yellow-500 transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300 inline-block">Seva</a>
                        </li>
                        <li className="block">
                            <a href="https://github.com/nerdtheboy27" className="hover:text-yellow-500 transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300 inline-block">Community</a>
                        </li>
                        <li className="block">
                            <a href="https://github.com/nerdtheboy27" className="hover:text-yellow-500 transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300 inline-block">Events</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 font-mono uppercase tracking-wider border-t border-white/5 pt-8">
                <p> || ॐ नमो भगवते वासुदेवाय नमः ||</p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <a href="https://github.com/nerdtheboy27" className="cursor-pointer hover:text-white transition-colors hover:translate-x-1 transition-transform duration-300"><span >Bhakti</span></a>
                    <a href="https://github.com/nerdtheboy27" className="cursor-pointer hover:text-white transition-colors hover:translate-x-1 transition-transform duration-300"><span >Seva</span></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;