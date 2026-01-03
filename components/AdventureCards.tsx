
import React from 'react';
import RollingCounter from './RollingCounter';
import { Link } from 'react-router-dom';
import { adventuresData } from '../data/adventures';

const AdventureCards: React.FC = () => {
  const adventures = Object.values(adventuresData);

  return (
    <section id="mine-eventyr" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-6xl md:text-8xl font-black mb-20 tracking-tighter">MINE EVENTYR</h2>
        <div className="grid grid-cols-1 gap-24">
          {adventures.map((adv, idx) => (
            <Link 
              key={idx} 
              to={`/eventyr/${adv.slug}`} 
              className="group relative flex flex-col lg:flex-row bg-gray-50 rounded-[60px] overflow-hidden hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 hover:scale-[1.02] cursor-pointer"
            >
              {/* Left Content */}
              <div className="flex-1 p-10 md:p-16 flex flex-col justify-between z-10">
                <div>
                  <h3 className="text-4xl md:text-6xl font-black mb-6 group-hover:text-blue-600 transition-colors">{adv.title}</h3>
                  <p className="text-xl md:text-2xl text-gray-500 mb-12 font-medium leading-relaxed">{adv.desc}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                    {adv.stats.slice(0, 3).map((s, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-3xl md:text-4xl font-black text-black">
                          {s.prefix}{s.static ? s.value : <RollingCounter value={s.value} decimals={s.decimals} duration={3000} />}
                          {s.suffix}
                        </span>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mt-1">{s.label}</span>
                      </div>
                    ))}
                    <div className="flex flex-col">
                      <span className="text-3xl md:text-4xl font-black text-black">
                        <RollingCounter value={adv.stats[adv.stats.length - 1].value} decimals={1} duration={3500} />M
                      </span>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mt-1">VIEWS</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-6">
                   <div className="text-xs font-black uppercase tracking-[0.3em] bg-black text-white px-6 py-3 rounded-full group-hover:bg-blue-600 transition-colors">
                      LÆS MERE
                   </div>
                   <div className="flex -space-x-3">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden grayscale">
                           <img src={`https://picsum.photos/seed/sponsor${i+idx}/100/100`} alt="Sponsor" />
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              {/* Right Content: Media */}
              <div className="flex-1 min-h-[500px] relative overflow-hidden bg-black">
                 <iframe 
                   className="absolute inset-0 w-full h-full z-0 opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 pointer-events-none"
                   src={`https://www.youtube.com/embed/${adv.ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${adv.ytId}`}
                   title={adv.title}
                   frameBorder="0"
                 />
                 
                 {/* Map Overlay */}
                 <div className="absolute bottom-8 right-8 w-1/3 aspect-[4/3] bg-white rounded-3xl overflow-hidden border-8 border-white shadow-2xl z-20 translate-x-32 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-1000 delay-200 shadow-blue-500/20">
                    <img src={adv.map} alt="Adventure Map" className="w-full h-full object-cover" />
                 </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdventureCards;
