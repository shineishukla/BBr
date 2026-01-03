
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AdventurePage from './pages/AdventurePage';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/om-bruhliver" element={<About />} />
            <Route path="/eventyr/:slug" element={<AdventurePage />} />
            {/* Legacy redirect for the specific island link in prompt */}
            <Route path="/island-pa-tvaers" element={<AdventurePage slugOverride="island-pa-tvaers" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
