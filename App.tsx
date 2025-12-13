import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import Procedure from './components/Procedure';
import ValuePhilosophy from './components/ValuePhilosophy';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import Legal from './components/Legal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Background />
      <Navbar onNavigate={handleNavigate} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <LogoCloud />
            <Procedure />
            <ValuePhilosophy />
            <Services />
            <CaseStudies />
            <Contact />
          </>
        ) : (
          <Legal 
            type={currentPage as 'legal' | 'privacy'} 
            onBack={() => handleNavigate('home')} 
          />
        )}
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </>
  );
};

export default App;