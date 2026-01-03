
import React, { useState, useEffect } from 'react';

const quotes = [
  {
    author: "Odsherreds Efterskole",
    role: "Efterskole",
    text: "Oliver var virkelig god til at fange elevernes opmærksomhed. Hans historie er inspirerende og jordnær på samme tid."
  },
  {
    author: "Nyborg Ungdomsskole",
    role: "Ungdomsskole",
    text: "Oliver Hvams oplæg er fyldt med energi og mod. Man går derfra med lysten til at udfordre sig selv."
  },
  {
    author: "Tanja",
    role: "Viceungdomsskoleleder",
    text: "En fantastisk oplevelse for vores unge mennesker. Oliver taler i øjenhøjde og rammer plet med sine budskaber."
  }
];

const QuotesCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <h3 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-16">UVALGTE UDTALELSER</h3>
        <div className="relative min-h-[400px] flex items-center justify-center">
          {quotes.map((q, i) => (
            <div 
              key={i} 
              className={`absolute inset-0 flex flex-col items-center justify-center ${index === i ? 'block z-10' : 'hidden z-0'}`}
            >
              <div className="text-4xl md:text-6xl font-black mb-12 text-black leading-tight tracking-tighter">
                "{q.text}"
              </div>
              <div className="flex flex-col items-center">
                <div className="text-xl font-black uppercase tracking-widest text-black">
                  {q.author}
                </div>
                <div className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mt-2">
                  {q.role}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-12">
          {quotes.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setIndex(i)}
              className={`h-1 transition-all duration-300 ${index === i ? 'w-12 bg-black' : 'w-4 bg-gray-200'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesCarousel;
