
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const getBackTarget = () => {
    if (location.pathname === '/om-bruhliver') return { path: '/', label: 'Forside' };
    if (location.pathname.startsWith('/eventyr/')) return { path: '/', hash: 'mine-eventyr', label: 'Mine Eventyr' };
    if (location.pathname === '/island-pa-tvaers') return { path: '/', hash: 'mine-eventyr', label: 'Mine Eventyr' };
    return null;
  };

  const backLink = getBackTarget();

  const handleBack = () => {
    if (backLink?.hash) {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(backLink.hash);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (backLink) {
      navigate(backLink.path);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-start pointer-events-none">
      <div className="pointer-events-auto">
        {!isHome && backLink && (
          <button 
            onClick={handleBack}
            className="flex items-center space-x-3 bg-white text-black px-6 py-3 rounded-full shadow-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 transform hover:-translate-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span className="font-black text-[10px] uppercase tracking-[0.3em]">{backLink.label}</span>
          </button>
        )}
      </div>

      <div className="pointer-events-auto flex flex-col items-end gap-4">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-2xl hover:scale-110 transition-transform duration-500 bg-gray-100 group cursor-pointer">
            <img 
              src="https://picsum.photos/seed/bruhliver-face/400/400" 
              alt="Oliver Hvam Face Logo" 
              className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale-0 grayscale"
            />
          </div>
        </Link>
        {isHome && (
          <div className="hidden md:flex flex-col gap-2 items-end font-black text-[9px] tracking-[0.4em] text-black uppercase">
            <a href="#mine-eventyr" className="hover:text-blue-600 transition-colors bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-gray-100">MINE EVENTYR</a>
            <a href="#book-foredrag" className="hover:text-blue-600 transition-colors bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-gray-100">BOOK FOREDRAG</a>
            <Link to="/om-bruhliver" className="hover:text-blue-600 transition-colors bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-gray-100">OM BRUHLIVER</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
