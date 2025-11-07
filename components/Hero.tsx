
import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToSignUp = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Your Personal AI Sound Therapist
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-8">
          Simply speak your mind. EmoHeal understands the complex emotions in your voice and instantly generates a unique soundscape to bring you calm and clarity.
        </p>
        <button
          onClick={handleScrollToSignUp}
          className="inline-block bg-gradient-to-r from-purple-600 to-teal-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-purple-500 hover:to-teal-400"
        >
          Pre-Order Now & Claim 50% Off
        </button>
        <div className="mt-16 max-w-4xl mx-auto">
            <div className="aspect-[16/9] bg-slate-800/50 rounded-2xl shadow-2xl p-3 border border-slate-700">
                <img 
                    src="https://cdn.pixabay.com/photo/2025/11/07/11/03/hero-landing-page-9942787_1280.png" 
                    alt="EmoHeal App voice input screen" 
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
