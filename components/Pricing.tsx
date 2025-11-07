
import React from 'react';
import { CheckIcon } from '../constants';

const Pricing: React.FC = () => {
  const handleScrollToSignUp = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
          
          <div className="w-full lg:w-1/3 bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-2">Grounded in Science</h3>
            <p className="text-slate-400">
              EmoHeal's core technology is born from postgraduate research in Sound and Music Computing at Queen Mary University of London.
            </p>
          </div>

          <div className="w-full lg:w-2/3 bg-gradient-to-br from-purple-600/30 via-slate-800/50 to-teal-600/30 p-8 rounded-2xl border-2 border-teal-500 shadow-2xl">
            <h4 className="text-lg font-semibold text-teal-400 mb-2">Founder's Early Bird Offer</h4>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-5xl font-extrabold text-white">$4.99<span className="text-lg font-medium text-slate-400">/month</span></span>
              <span className="text-xl text-slate-500 line-through">$9.99</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <CheckIcon />
                <span className="text-slate-300">Unlimited Voice Journaling</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon />
                <span className="text-slate-300">Full Emotional Insight Reports</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon />
                <span className="text-slate-300">Infinite Generative Soundscapes</span>
              </li>
               <li className="flex items-center gap-3">
                <CheckIcon />
                <span className="text-slate-300">Lifetime 50% Founder's Discount</span>
              </li>
            </ul>
            
            <button
              onClick={handleScrollToSignUp}
              className="w-full block text-center bg-gradient-to-r from-purple-600 to-teal-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Yes, I'm In! Lock In My Founder's Discount
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
