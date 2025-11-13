
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800">
      <div className="container mx-auto px-6 py-8 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} EmoHeal. All rights reserved.</p>
        <div className="mt-6 text-xs space-y-1 text-slate-600">
          <p className="font-semibold text-slate-500">In Resonance Well Ltd</p>
          <p>Company Number: 16848374</p>
          <p>Registered in England and Wales</p>
          <p>Registered Address: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
