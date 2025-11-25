import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import HeroModern from './components/HeroModern';
import TypographySection from './components/TypographySection';
import SplitFlipSection from './components/SplitFlipSection';
import CarouselDual from './components/CarouselDual';
import CarouselHorizontal from './components/CarouselHorizontal';
import CarouselPerspective from './components/CarouselPerspective';
import CarouselTilted from './components/CarouselTilted';
import Footer from './components/Footer';
import { CAROUSEL_DATA, CAROUSEL_DATA_2 } from './types';

const App: React.FC = () => {
  return (
    <SmoothScroll>
      <main className="bg-neutral-950 text-neutral-100 min-h-screen selection:bg-yellow-500 selection:text-black">
        
        <Navbar />
        
        {/* New Modern Landing Page */}
        <HeroModern />

        {/* Updated Funky Scroll Typography */}
        <TypographySection />

        {/* Complex Scroll Component */}
        <SplitFlipSection />

        {/* Dual Column Parallax */}
        <CarouselDual data={CAROUSEL_DATA} />

        {/* Horizontal Scroll Trigger */}
        <section id="horizontal">
            <CarouselHorizontal data={CAROUSEL_DATA} />
        </section>
        
        <CarouselPerspective data={CAROUSEL_DATA} />
        
        <CarouselTilted data={CAROUSEL_DATA_2} />

        {/* New Footer with Typography Ending */}
        <Footer />
        
      </main>
    </SmoothScroll>
  );
};

export default App;