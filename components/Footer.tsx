
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800">
      <div className="container mx-auto px-6 py-6 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} EmoHeal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
