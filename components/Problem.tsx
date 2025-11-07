import React from 'react';
import { MoonIcon, HeadphonesIcon, KeyboardIcon } from '../constants';

const ProblemCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 text-center">
    <div className="flex justify-center mb-4">
      <div className="bg-slate-700 p-3 rounded-full">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </div>
);

const Problem: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Does This Sound Familiar?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProblemCard 
            icon={<MoonIcon />}
            title="Late-Night Overwhelm"
            description="You're carrying heavy emotions with nowhere to turn. You want to talk, but you don't want to be a burden."
          />
          <ProblemCard 
            icon={<HeadphonesIcon />}
            // Fix: Use a JavaScript string expression for the title to avoid JSX parsing issues with escaped quotes.
            title={'"One-Size-Fits-All" Fails'}
            description="Wellness apps miss the mark. Their generic playlists don't connect with how you truly feel right now."
          />
          <ProblemCard 
            icon={<KeyboardIcon />}
            title="Journaling Feels Like a Chore"
            description="Typing out your feelings is draining, especially when you're exhausted and the words won't come."
          />
        </div>
      </div>
    </section>
  );
};

export default Problem;