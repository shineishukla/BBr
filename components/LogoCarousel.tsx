
import React from 'react';

interface LogoCarouselProps {
  title: string;
  logos: string[];
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ title, logos }) => {
  // Double the logos to ensure a seamless loop
  const displayLogos = [...logos, ...logos, ...logos];

  return (
    <div className="py-12 bg-gray-50 overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">{title}</h3>
      </div>
      <div className="relative">
        <div className="animate-scroll whitespace-nowrap">
          {displayLogos.map((logo, index) => (
            <div key={index} className="inline-block px-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img 
                src={logo} 
                alt="Client Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
