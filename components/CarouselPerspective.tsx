import React, { useRef, useState, useEffect } from 'react';
import { SlideData } from '../types';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { DASHAVATAR_DATA } from '../types';
import { motion, useMotionValue, animate } from 'framer-motion';

interface Props {
    data: SlideData[];
}

const CarouselPerspective: React.FC<Props> = ({ data }) => {
    // Always use Dashavatar data for this section as intended
    const avatars = DASHAVATAR_DATA;
    const [width, setWidth] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, [carouselRef.current]);

    const scroll = (direction: 'left' | 'right') => {
        const currentX = x.get();
        const containerWidth = carouselRef.current?.offsetWidth || 0;
        const scrollAmount = containerWidth * 0.75; // Scroll 75% of screen width

        let newX = direction === 'left' ? currentX + scrollAmount : currentX - scrollAmount;

        // Clamp values
        if (newX > 0) newX = 0;
        if (newX < -width) newX = -width;

        animate(x, newX, {
            type: "spring",
            stiffness: 300,
            damping: 30
        });
    };

    return (
        <div id="perspective" className="w-full min-h-[100vh] bg-neutral-950 flex flex-col items-center justify-center py-24 relative overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-yellow-600 rounded-full blur-[128px]" />
                <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-cyan-800 rounded-full blur-[128px]" />
            </div>

            <div className="text-center z-20 px-4 mb-12">
                <span className="text-yellow-500 font-mono text-xs md:text-sm tracking-widest uppercase">Visualization 03</span>
                <h2 className="text-4xl md:text-5xl text-white font-bold mt-2 font-yatra">The Incarnations</h2>
                <p className="text-neutral-500 mt-2">Dashavatar</p>
            </div>

            {/* Navigation Buttons (Desktop) */}
            <div className="hidden md:flex absolute z-30 w-full max-w-[95vw] justify-between px-8 pointer-events-none">
                <button
                    onClick={() => scroll('left')}
                    className="pointer-events-auto p-4 rounded-full border border-white/10 bg-black/50 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md group"
                    aria-label="Scroll left"
                >
                    <ChevronLeft size={24} className="group-active:scale-90 transition-transform" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="pointer-events-auto p-4 rounded-full border border-white/10 bg-black/50 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md group"
                    aria-label="Scroll right"
                >
                    <ChevronRight size={24} className="group-active:scale-90 transition-transform" />
                </button>
            </div>

            {/* Carousel Container */}
            <div className="w-full overflow-hidden" ref={carouselRef}>
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    whileTap={{ cursor: "grabbing" }}
                    style={{ x }}
                    className="flex gap-4 md:gap-8 px-4 md:px-0 pb-12 items-center cursor-grab touch-pan-y"
                >
                    {/* Left Padding Spacer for center alignment feel */}
                    <div className="shrink-0 w-4 md:w-[10vw]" />

                    {avatars.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="relative flex-shrink-0 w-[85vw] md:w-[320px] group"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 transition-all duration-500 group-hover:border-yellow-500/30 group-hover:shadow-2xl group-hover:shadow-yellow-900/10 pointer-events-none select-none">
                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 pointer-events-none"
                                    loading="lazy"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-yellow-500 text-xs font-bold tracking-widest uppercase mb-2 block opacity-70 group-hover:opacity-100">
                                        Avatar {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                    </span>
                                    <h3 className="text-3xl font-serif text-white mb-2">{item.title}</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Hover Border Effect */}
                                <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-2xl transition-colors duration-300 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}

                    {/* Right Padding Spacer */}
                    <div className="shrink-0 w-4 md:w-[10vw]" />
                </motion.div>
            </div>

            {/* Scroll Hint (Mobile Only) */}
            <div className="md:hidden flex gap-2 items-center text-neutral-600 text-xs uppercase tracking-widest animate-pulse mt-4">
                <ArrowLeft size={14} />
                <span>Drag to Explore</span>
                <ArrowRight size={14} />
            </div>

        </div>
    );
};

export default CarouselPerspective;