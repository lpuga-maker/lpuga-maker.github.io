import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from './components';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center section-gradient-1">
          <Navbar />
          <Hero />
        </div>
        <div className="section-gradient-2">
          <About />
        </div>
        <div className="section-gradient-3">
          <Experience />
        </div>
        <div className="section-gradient-4">
          <Tech />
        </div>
        <div className="section-gradient-5">
          <Works />
        </div>
        <div className="relative z-0 section-gradient-2">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
