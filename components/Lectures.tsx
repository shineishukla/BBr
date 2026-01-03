
import React from 'react';
import { calculateAge } from '../utils/helpers';

const lectures = [
  { 
    title: "OMVEJEN", 
    desc: "3000km gang Odense-Zagreb. En fortælling om at turde tage den lange vej for at finde sig selv." 
  },
  { 
    title: "DRÆB DINE FORDOMME", 
    desc: "4500km cykel Jylland-Marokko. Et hudløst ærligt opgør med frygten for det ukendte og mødet med andre kulturer." 
  },
  { 
    title: "EN UNG EVENTYRER", 
    desc: "En rejse gennem mine største projekter. Hvordan man går fra idé til virkelighed, når ingen tror på en." 
  },
  { 
    title: "ALVERDENS RØVERHISTORIER", 
    desc: "De skøreste, vildeste og mest lærerige anekdoter fra landevejen. Grin, gys og gode minder." 
  }
];

const Lectures: React.FC = () => {
  const age = calculateAge();

  return (
    <section id="book-foredrag" className="py-32 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          <div className="sticky top-32">
            <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter">BOOK <br /> FOREDRAG</h2>
            <div className="space-y-6 text-xl text-gray-400 font-medium leading-relaxed max-w-xl">
              <p>
                "Eventyr har altid været en del af mit liv, men det er gennem foredragene, at historierne virkelig får vinger."
              </p>
              <p>
                Som {age}-årig har jeg allerede oplevet mere end de fleste tør drømme om. Jeg elsker at dele mine erfaringer med skoler, virksomheder og foreninger, hvor jeg taler om mod, vedholdenhed og det at turde fejle.
              </p>
            </div>
            
            <div className="mt-16 p-10 border-4 border-white/10 rounded-[50px] inline-block hover:border-blue-600/50 transition-colors duration-500 group">
               <span className="block text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Er du klar?</span>
               <button className="text-3xl md:text-4xl font-black group-hover:text-blue-500 transition-all duration-300 flex items-center gap-4">
                  KONTAKT & TILBUD
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
               </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {lectures.map((l, i) => (
              <div key={i} className="group relative bg-white/5 p-10 rounded-[50px] hover:bg-white hover:text-black transition-all duration-700 cursor-default hover:scale-105 border border-white/10 hover:border-transparent hover:shadow-[0_0_80px_rgba(59,130,246,0.2)]">
                <h3 className="text-3xl font-black mb-6 tracking-tight">{l.title}</h3>
                <p className="text-lg opacity-50 group-hover:opacity-80 leading-relaxed font-medium">{l.desc}</p>
                <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                      </svg>
                   </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Lectures;
