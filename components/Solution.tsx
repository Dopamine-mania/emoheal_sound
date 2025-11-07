import React from 'react';

interface FeatureProps {
  imageSrc: string;
  title: string;
  description: string;
  imageLeft?: boolean;
}

const Feature: React.FC<FeatureProps> = ({ imageSrc, title, description, imageLeft = false }) => {
  const imageOrder = imageLeft ? 'md:order-1' : 'md:order-2';
  const textOrder = imageLeft ? 'md:order-2' : 'md:order-1';

  return (
    <div className="group grid md:grid-cols-2 gap-12 items-center mb-20">
      <div className={`order-2 ${imageOrder}`}>
        <div className="bg-slate-800/50 rounded-2xl shadow-lg p-3 border border-slate-700 overflow-hidden">
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-auto object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105" 
            />
        </div>
      </div>
      <div className={`order-1 ${textOrder}`}>
        <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-lg text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
};

const Solution: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-20">
          How EmoHeal Creates Your Personal Sanctuary
        </h2>
        <Feature
          imageSrc="https://cdn.pixabay.com/photo/2025/11/07/11/24/11-24-06-90_1280.png"
          title="1. Speak, Don't Type"
          description="Healing begins the moment you speak. Express yourself freely in a completely safe, private, and non-judgmental space."
          imageLeft={true}
        />
        <Feature
          imageSrc="https://cdn.pixabay.com/photo/2025/11/07/11/42/11-42-35-577_1280.png"
          title="2. Feel Truly Understood"
          description="Our advanced AI goes beyond words, analyzing vocal nuances to identify 27 distinct emotions for profound validation."
          imageLeft={false}
        />
        <Feature
          imageSrc="https://cdn.pixabay.com/photo/2025/11/07/12/20/12-20-55-25_1280.png"
          title="3. Heal with Generative Sound"
          description="Based on this deep understanding, EmoHeal instantly composes a therapeutic soundscape just for you. It's not from a library; it's created for your heart."
          imageLeft={true}
        />
      </div>
    </section>
  );
};

export default Solution;