
import React from 'react';
import { Whatsapp, Mail } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div
      className="
        fixed top-1/2 right-4 z-50 transform -translate-y-1/2 flex flex-col items-center space-y-4
        md:right-6
      "
      style={{ direction: 'ltr' }}
    >
      <a
        href="https://wa.me/972524673336"
        target="_blank"
        rel="noopener noreferrer"
        className="
          action-button w-14 h-14 flex items-center justify-center rounded-full shadow-lg bg-green-500 text-white
          hover:bg-green-600 transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400
        "
        aria-label="צ'אט בוואטסאפ"
      >
        <Whatsapp size={32} />
      </a>
      <a
        href="mailto:gil@example.com"
        className="
          action-button w-14 h-14 flex items-center justify-center rounded-full shadow-lg bg-blue-500 text-white
          hover:bg-blue-600 transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400
        "
        aria-label="שלח אימייל"
      >
        <Mail size={32} />
      </a>
    </div>
  );
};

export default FloatingButtons;
