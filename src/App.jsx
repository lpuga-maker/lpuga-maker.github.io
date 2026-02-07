import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from './components';
import { herobg } from './assets';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <div 
          className="bg-no-repeat bg-center w-full min-h-screen"
          style={{ 
            backgroundColor: '#000D15',
            backgroundImage: `url(${herobg})`,
            backgroundSize: '100% auto',
            backgroundPosition: 'center',
            backgroundAttachment: 'scroll',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <Navbar />
          <Hero />
        </div>
        <div className="bg-primary">
          <About />
        </div>
        <div className="bg-primary">
          <Experience />
        </div>
        <div className="bg-primary">
          <Tech />
        </div>
        <div className="bg-primary">
          <Works />
        </div>
        <div className="relative z-0 bg-primary">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
