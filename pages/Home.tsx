
import React from 'react';
import Hero from '../components/Hero';
import LogoCarousel from '../components/LogoCarousel';
import AdventureCards from '../components/AdventureCards';
import Lectures from '../components/Lectures';
import QuotesCarousel from '../components/QuotesCarousel';

const Home: React.FC = () => {
  const seenOnLogos = [
    'https://picsum.photos/seed/tv2/200/100',
    'https://picsum.photos/seed/dr/200/100',
    'https://picsum.photos/seed/bt/200/100',
    'https://picsum.photos/seed/eb/200/100',
    'https://picsum.photos/seed/jp/200/100',
    'https://picsum.photos/seed/pol/200/100',
  ];

  const workedWithLogos = [
    'https://picsum.photos/seed/client1/200/100',
    'https://picsum.photos/seed/client2/200/100',
    'https://picsum.photos/seed/client3/200/100',
    'https://picsum.photos/seed/client4/200/100',
    'https://picsum.photos/seed/client5/200/100',
    'https://picsum.photos/seed/client6/200/100',
  ];

  return (
    <div>
      <Hero />
      <LogoCarousel title="OGSÅ SET PÅ" logos={seenOnLogos} />
      <AdventureCards />
      <LogoCarousel title="HAVE WORKED WITH" logos={workedWithLogos} />
      <Lectures />
      <QuotesCarousel />
    </div>
  );
};

export default Home;
