
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import RollingCounter from '../components/RollingCounter';
import { adventuresData } from '../data/adventures';

interface AdventurePageProps {
  slugOverride?: string;
}

const AdventurePage: React.FC<AdventurePageProps> = ({ slugOverride }) => {
  const { slug } = useParams<{ slug: string }>();
  const currentSlug = slugOverride || slug;
  const data = currentSlug ? adventuresData[currentSlug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSlug]);

  if (!data) {
    return <Navigate to="/" />;
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="flex-1 hero-text-fade">
            <h2 className="text-xl font-black text-blue-500 tracking-[0.4em] uppercase mb-4">EVENTYR</h2>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-none">
              {data.title.split(' ').map((word, i) => (
                <React.Fragment key={i}>
                  {word} {i === 0 && <br />}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-2xl text-gray-400 mb-12 max-w-2xl leading-relaxed">{data.desc}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-16">
               {data.stats.map((s, i) => (
                 <div key={i} className="flex flex-col">
                    <span className="text-4xl md:text-6xl font-black">
                      {s.prefix}
                      {s.static ? s.value : <RollingCounter value={s.value} decimals={s.decimals} duration={3500} />}
                      {s.suffix}
                    </span>
                    <span className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] mt-2">{s.label}</span>
                 </div>
               ))}
            </div>

            <div className="aspect-video bg-gray-900 rounded-[50px] overflow-hidden border-8 border-white/5 shadow-2xl">
               <iframe 
                   className="w-full h-full"
                   src={`https://www.youtube.com/embed/${data.ytId}?modestbranding=1&rel=0`}
                   title={data.title}
                   frameBorder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen
                />
            </div>
          </div>

          <div className="lg:w-1/3 flex flex-col gap-8 map-slide-right">
             <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[50px] border border-white/10">
                <h4 className="text-2xl font-black mb-8 uppercase tracking-widest text-blue-500">HIGHLIGHTS</h4>
                <ul className="space-y-6">
                   {data.highlights.map((h, i) => (
                     <li key={i} className="flex items-center gap-4 text-lg font-bold">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        {h}
                     </li>
                   ))}
                </ul>
             </div>
             
             <div className="flex-grow bg-gray-900 rounded-[50px] p-2 border border-white/10 overflow-hidden relative group min-h-[400px]">
                <img 
                  src={data.map} 
                  alt={`${data.title} Rute`} 
                  className="w-full h-full object-cover rounded-[48px] grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute bottom-10 left-10 z-10">
                   <h4 className="text-4xl font-black mb-2 tracking-tighter">RUTEN</h4>
                   <p className="text-xs font-black uppercase text-blue-500 tracking-[0.2em]">Interaktivt overblik</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventurePage;
