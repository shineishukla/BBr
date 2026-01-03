
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-black tracking-tighter">OLIVER HVAM</div>
        <div className="flex gap-8 text-sm font-bold text-gray-400 uppercase tracking-widest">
          <a href="#" className="hover:text-black transition-colors">Instagram</a>
          <a href="#" className="hover:text-black transition-colors">TikTok</a>
          <a href="#" className="hover:text-black transition-colors">YouTube</a>
          <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
        </div>
        <div className="text-xs font-bold text-gray-300">© {new Date().getFullYear()} BRUHLIVER</div>
      </div>
    </footer>
  );
};

export default Footer;
