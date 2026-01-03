
import React, { useState, useEffect } from 'react';
import RollingCounter from './RollingCounter';
import { fetchSocialStats } from '../utils/helpers';

const Hero: React.FC = () => {
  const [stats, setStats] = useState({ instagram: 0, tiktok: 0, youtube: 0 });

  useEffect(() => {
    fetchSocialStats().then(setStats);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-white px-8 md:px-24">
      {/* Background Hero Image - Slides Left */}
      <div className="absolute top-0 right-0 w-full h-full md:w-[60%] hero-img-slide z-0 pointer-events-none">
        <img 
          src="https://picsum.photos/seed/bruhliver-hero-large/1600/1600" 
          alt="Oliver Hvam Adventure" 
          className="w-full h-full object-cover grayscale brightness-105 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full flex flex-col items-start">
        {/* Staggered Text Animations */}
        <div className="hero-text-fade space-y-4">
          <h2 className="text-xl font-black text-blue-600 tracking-[0.4em] uppercase">BRUHLIVER</h2>
          <h1 className="text-7xl md:text-[10rem] font-black text-black leading-[0.85] tracking-tighter">
            MINE <br /> EVENTYR
          </h1>
          <p className="mt-8 text-xl md:text-3xl font-bold text-gray-500 max-w-2xl leading-tight">
            Fra Odense til Sahara. Benhårde udfordringer, ægte historier og minder for livet.
          </p>
        </div>

        {/* Rolling Counters */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 hero-text-fade" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col">
             <span className="text-4xl md:text-6xl font-black text-black">
                <RollingCounter value={stats.instagram || 52300} duration={3500} />
             </span>
             <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mt-2">Instagram</span>
          </div>
          <div className="flex flex-col">
             <span className="text-4xl md:text-6xl font-black text-black">
                <RollingCounter value={stats.tiktok || 214500} duration={4000} />
             </span>
             <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mt-2">TikTok</span>
          </div>
          <div className="flex flex-col">
             <span className="text-4xl md:text-6xl font-black text-black">
                <RollingCounter value={stats.youtube || 152000} duration={4500} />
             </span>
             <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mt-2">YouTube</span>
          </div>
          <div className="flex flex-col">
             <span className="text-4xl md:text-6xl font-black text-black">
                <RollingCounter value={400} staticValue={true} />
             </span>
             <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mt-2">Foredrag</span>
          </div>
        </div>

        {/* Secondary Navigation Labels */}
        <div className="mt-20 flex gap-8 hero-text-fade" style={{ animationDelay: '1s' }}>
          <div className="flex flex-col items-start">
             <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-2">Navigation</span>
             <div className="flex gap-4">
                <a href="#mine-eventyr" className="text-xs font-black border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">MINE EVENTYR</a>
                <a href="#book-foredrag" className="text-xs font-black border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">BOOK FOREDRAG</a>
                <a href="#om-bruhliver" className="text-xs font-black border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">OM BRUHLIVER</a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
