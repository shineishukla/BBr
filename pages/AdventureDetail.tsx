
import React from 'react';
import RollingCounter from '../components/RollingCounter';

const AdventureDetail: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 hero-text-fade">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none">ISLAND <br /> PÅ TVÆRS</h1>
            <p className="text-2xl text-gray-400 mb-12">400 kilometer. 4 dage. -22 grader. En kamp mod elementerne i det islandske højland.</p>
            
            <div className="grid grid-cols-2 gap-8 mb-16">
               <div className="flex flex-col">
                  <span className="text-5xl font-black"><RollingCounter value={400} /></span>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em]">Kilometer</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-5xl font-black"><RollingCounter value={4} /></span>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em]">Dage</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-5xl font-black">-22°C</span>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em]">Laveste Temperatur</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-5xl font-black"><RollingCounter value={5400000} /></span>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em]">Views på YouTube</span>
               </div>
            </div>

            <div className="aspect-video bg-gray-900 rounded-[40px] overflow-hidden border border-gray-800">
               <iframe 
                   className="w-full h-full"
                   src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                   title="Island på Tværs"
                   frameBorder="0"
                   allowFullScreen
                />
            </div>
          </div>

          <div className="lg:w-1/3 flex flex-col gap-8 map-slide-right">
             <div className="bg-gray-900 p-8 rounded-[40px] border border-gray-800">
                <h4 className="text-xl font-black mb-6 uppercase tracking-widest">Udstyr</h4>
                <ul className="space-y-4 text-gray-400 font-bold uppercase text-sm tracking-wider">
                   <li>• Pulk & Skieksperten</li>
                   <li>• Arktisk Beklædning</li>
                   <li>• Frysetørret Mad (12.000 kcal/dag)</li>
                   <li>• Satellit-nødtelefon</li>
                </ul>
             </div>
             <div className="flex-grow bg-white/5 backdrop-blur-xl rounded-[40px] p-8 border border-white/10 overflow-hidden relative">
                <img 
                  src="https://picsum.photos/seed/iceland-map-detail/600/1000" 
                  alt="Iceland Route" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 h-full flex flex-col justify-end">
                   <h4 className="text-4xl font-black mb-2">RUTEN</h4>
                   <p className="text-sm font-bold uppercase text-gray-400">Fra Nord til Syd gennem det ufremkommelige.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureDetail;
