import React, { useRef, useState, useEffect, useCallback } from 'react';
import { QuoteIcon, ArrowLeftIcon, ArrowRightIcon } from '../constants';

const testimonials = [
  {
    avatarSrc: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&dpr=1",
    name: "Jessica M.",
    quote: "I've never felt so heard, not even by people. EmoHeal just gets it. The soundscapes it creates after I vent are... magical. It’s become my go-to for late-night anxiety."
  },
  {
    avatarSrc: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&dpr=1",
    name: "David L.",
    quote: "As someone who hates journaling, this is a game-changer. Just talking for a minute and getting a personalized sound bath is incredible. It helps me reset my mind after a stressful day."
  },
  {
    avatarSrc: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&dpr=1",
    name: "Alex R.",
    quote: "The AI's ability to pick up on subtle emotions is uncanny. It's more than a wellness app; it feels like a compassionate listener that responds with exactly what I need to hear, without words."
  },
  {
    avatarSrc: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&dpr=1",
    name: "Sarah K.",
    quote: "I was skeptical about an AI understanding my feelings, but I was wrong. The emotional breakdown is so accurate it's a little spooky. The sounds it creates are incredibly soothing. It's like a warm hug for your brain."
  },
  {
    avatarSrc: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&dpr=1",
    name: "Michael B.",
    quote: "Finally, a wellness app that doesn't feel generic. The soundscapes are unique every single time. It's the perfect way to decompress after work without having to think or type. Just speak and relax."
  }
];

const TestimonialCard: React.FC<{ avatarSrc: string; name: string; quote: string; }> = ({ avatarSrc, name, quote }) => (
  <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 flex flex-col h-full">
    <QuoteIcon />
    <blockquote className="text-slate-400 italic mb-6 flex-grow">
      "{quote}"
    </blockquote>
    <div className="flex items-center mt-auto">
      <img src={avatarSrc} alt={name} className="w-12 h-12 rounded-full mr-4 border-2 border-slate-600 object-cover" />
      <div>
        <p className="font-bold text-white">{name}</p>
        <p className="text-sm text-slate-500">Early Access User</p>
      </div>
    </div>
  </div>
);


const Testimonials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      const isAtStart = el.scrollLeft <= 0;
      const isAtEnd = Math.ceil(el.scrollLeft) + el.clientWidth >= el.scrollWidth;
      setCanScrollLeft(!isAtStart);
      setCanScrollRight(!isAtEnd);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      checkScrollability();
      el.addEventListener('scroll', checkScrollability, { passive: true });
      window.addEventListener('resize', checkScrollability);
      
      return () => {
        el.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, [checkScrollability]);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = el.clientWidth * 0.9; // Scroll by 90% of the visible width
      el.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          What Early Users Are Saying
        </h2>
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide -mx-2" 
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-2 snap-start">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
          
          <button
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            aria-label="Previous testimonial"
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-slate-700/60 backdrop-blur-sm hover:bg-slate-600/80 disabled:opacity-0 disabled:cursor-not-allowed text-white p-3 rounded-full transition-opacity duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            aria-label="Next testimonial"
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-slate-700/60 backdrop-blur-sm hover:bg-slate-600/80 disabled:opacity-0 disabled:cursor-not-allowed text-white p-3 rounded-full transition-opacity duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;