import React from 'react';
import { SlideData } from '../types';

interface Props {
    data: SlideData[];
}

const CarouselTilted: React.FC<Props> = ({ data }) => {
    // Duplicate data for marquee effect
    const marqueeData = [...data, ...data, ...data];

    return (
        <div id="tilted" className="w-full py-24 md:py-48 bg-black overflow-hidden relative">
            <div className="absolute top-8 left-4 md:top-12 md:left-24 z-10 pointer-events-none w-full">
                <h2 className="text-[10vw] md:text-[6rem] lg:text-[12rem] font-bold text-neutral-900 tracking-tighter leading-none select-none font-yatra break-all md:break-normal">
                    MAHAMANTRA
                </h2>
            </div>

            {/* Tilted Container */}
            <div className="rotate-[-6deg] scale-110 flex flex-col gap-4 md:gap-8 mt-12 md:mt-0">

                {/* Row 1 - Left */}
                <div className="flex gap-4 md:gap-8 marquee-left w-max">
                    {marqueeData.map((item, i) => (
                        <div key={`r1-${i}`} className="w-[200px] h-[120px] md:w-[400px] md:h-[250px] rounded-lg overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 border border-white/5">
                            <img src={item.image} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                    ))}
                </div>

                {/* Row 2 - Right */}
                <div className="flex gap-4 md:gap-8 marquee-right w-max ml-[-100px] md:ml-[-200px]">
                    {marqueeData.map((item, i) => (
                        <div key={`r2-${i}`} className="w-[200px] h-[120px] md:w-[400px] md:h-[250px] rounded-lg overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 border border-white/5">
                            <img src={item.image} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                    ))}
                </div>

                {/* Row 3 - Left */}
                <div className="flex gap-4 md:gap-8 marquee-left w-max">
                    {marqueeData.map((item, i) => (
                        <div key={`r3-${i}`} className="w-[200px] h-[120px] md:w-[400px] md:h-[250px] rounded-lg overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 border border-white/5">
                            <img src={item.image} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                    ))}
                </div>

            </div>

            <div className="absolute bottom-12 right-4 md:bottom-24 md:right-24 max-w-xs md:max-w-md text-right pointer-events-none px-4">
                <p className="text-white text-sm md:text-lg font-serif">
                    Hare Krishna Hare Krishna, Krishna Krishna Hare Hare.
                    <br />
                    Hare Rama Hare Rama, Rama Rama Hare Hare.
                </p>
            </div>

            <style>{`
                @keyframes marqueeLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                @keyframes marqueeRight {
                    0% { transform: translateX(-33.33%); }
                    100% { transform: translateX(0); }
                }
                .marquee-left {
                    animation: marqueeLeft 30s linear infinite;
                }
                .marquee-right {
                    animation: marqueeRight 30s linear infinite;
                }
             `}</style>
        </div>
    );
};

export default CarouselTilted;