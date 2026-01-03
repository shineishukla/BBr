
import React, { useEffect } from 'react';
import { calculateAge } from '../utils/helpers';

const About: React.FC = () => {
  const age = calculateAge();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-xl font-black text-blue-600 tracking-[0.4em] uppercase mb-4 hero-text-fade">HISTORIEN</h2>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-16 hero-text-fade">OM <br /> BRUHLIVER</h1>
        
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <div className="rounded-[60px] overflow-hidden bg-gray-100 aspect-[4/5] hero-img-slide shadow-2xl relative group">
             <img 
               src="https://picsum.photos/seed/oliver-bio/1000/1200" 
               alt="Oliver Hvam Bio" 
               className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          
          <div className="hero-text-fade space-y-8" style={{ animationDelay: '0.4s' }}>
             <p className="text-3xl md:text-4xl font-black leading-tight">
               Mit navn er Oliver Hvam. <br />
               Jeg er {age} år gammel.
             </p>
             <div className="space-y-6 text-xl text-gray-500 font-medium leading-relaxed">
                <p>
                  "Eventyr har altid været en del af mit liv, men det var først da jeg vovede mig ud på den første 3000 km rute, at jeg forstod hvad det handlede om."
                </p>
                <p>
                  For mig er et eventyr ikke en ferie. Det er en prøvelse. Det er at finde sine grænser og bevise overfor sig selv, at de kan flyttes. 
                </p>
                <p>
                  Jeg brænder for at motivere andre unge til at slippe skærmen og finde deres egne "Sahara-cykelture" i livet – hvad end det er en gåtur til Zagreb eller bare at turde være sig selv.
                </p>
             </div>
             
             <div className="pt-8">
                <div className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] mb-4">Mærkepunkter</div>
                <div className="flex flex-wrap gap-4">
                  {['Autentisk', 'Grit', 'Mod', 'Ærlighed'].map(tag => (
                    <span key={tag} className="px-6 py-2 bg-gray-50 border border-gray-100 rounded-full text-xs font-black uppercase tracking-widest text-black">
                      {tag}
                    </span>
                  ))}
                </div>
             </div>
          </div>
        </div>

        <div className="bg-black text-white p-12 md:p-20 rounded-[60px] hero-text-fade relative overflow-hidden">
           <div className="relative z-10">
              <h3 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter">Hvorfor Bruhliver?</h3>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12 max-w-3xl">
                Navnet er en fusion af "Bruh" og "Gulliver". Det repræsenterer min generation's sprog kombineret med de klassiske eventyr-fortællinger. Jeg vil fortælle de store historier på en måde, der giver mening i dag.
              </p>
              <div className="flex flex-col md:flex-row gap-12">
                 <div className="flex-1">
                    <span className="text-blue-500 font-black text-5xl">9K+</span>
                    <p className="text-xs font-black uppercase tracking-widest mt-2 text-gray-500">Kilometer tilbagelagt</p>
                 </div>
                 <div className="flex-1">
                    <span className="text-blue-500 font-black text-5xl">38M+</span>
                    <p className="text-xs font-black uppercase tracking-widest mt-2 text-gray-500">Video visninger</p>
                 </div>
                 <div className="flex-1">
                    <span className="text-blue-500 font-black text-5xl">400</span>
                    <p className="text-xs font-black uppercase tracking-widest mt-2 text-gray-500">Foredrag holdt</p>
                 </div>
              </div>
           </div>
           {/* Background decorative element */}
           <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
