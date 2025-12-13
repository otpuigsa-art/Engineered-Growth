import React from 'react';
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

const App: React.FC = () => {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Procedure />
        <ValuePhilosophy />
        <Services />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;