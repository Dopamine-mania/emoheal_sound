import React, { useState } from 'react';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (email.trim() === '' || !email.includes('@')) {
      // Basic validation is handled by the "required" and "type='email'" attributes,
      // but this is a fallback.
      return;
    }

    setIsLoading(true);

    try {
      // The placeholder has been replaced with your actual Formspree form ID.
      const response = await fetch('https://formspree.io/f/mrbonnbj', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        if (data.errors) {
          setError(data.errors.map((error: { message: string }) => error.message).join(', '));
        } else {
          setError('An unexpected error occurred. Please try again later.');
        }
      }
    } catch (e) {
      setError('Failed to send message. Please check your network connection.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="signup" className="py-24">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        {!submitted ? (
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              You're In! Your Founder's Discount is Secured.
            </h2>
            <p className="text-slate-400 mb-8">
              EmoHeal is in its final stages of polish. Leave your email below, and we'll notify you the moment we launch with your exclusive discount code. No spam, ever.
            </p>
            <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                disabled={isLoading}
                className="flex-grow w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:outline-none transition-shadow disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-teal-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors duration-300 disabled:bg-teal-800 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Processing...</span>
                  </>
                ) : (
                  'Notify Me'
                )}
              </button>
            </form>
            {error && <p className="text-red-400 mt-4 text-sm">{error}</p>}
          </>
        ) : (
          <div className="bg-slate-800/50 p-8 rounded-lg border border-teal-500">
            <h2 className="text-3xl font-bold text-teal-400 mb-4">Thank you!</h2>
            <p className="text-white text-lg">
              We've saved your spot. You'll be the first to know when EmoHeal is ready.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SignUp;