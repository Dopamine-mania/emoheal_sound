import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import { initGA } from './lib/analytics';

const App: React.FC = () => {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen overflow-x-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vw] bg-gradient-to-br from-purple-900/50 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[50vw] h-[50vw] bg-gradient-to-tl from-teal-900/50 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Problem />
          <Solution />
          <Testimonials />
          <Pricing />
          <SignUp />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;