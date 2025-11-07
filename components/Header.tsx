
import React from 'react';

const Header: React.FC = () => {
  const handleScrollToSignUp = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Emo<span className="text-teal-400">Heal</span>
        </h1>
        <button 
          onClick={handleScrollToSignUp}
          className="hidden sm:inline-block bg-teal-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-teal-600 transition-colors duration-300"
        >
          Pre-Order Now
        </button>
      </div>
    </header>
  );
};

export default Header;
