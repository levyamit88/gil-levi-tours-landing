
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  const handleWhatsAppClick = () => {
    // Safe check if gtag exists before calling it
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // @ts-ignore
      window.gtag('event', 'whatsapp_click', {
        event_category: 'contact',
        event_label: 'WhatsApp Button',
      });
    }
  };

  return (
    <div
      className="
        fixed top-1/2 right-4 z-50 transform -translate-y-1/2 flex flex-col items-center
        md:right-6
      "
      style={{ direction: 'ltr' }}
    >
      <a
        href="https://wa.me/972524673336"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center justify-center w-16 h-16 rounded-full shadow-xl bg-green-500
          hover:bg-green-600 transition hover:scale-110 focus:outline-none focus:ring-2
        "
        aria-label="וואטסאפ"
        style={{
          boxShadow: '0 4px 24px 0 rgba(34, 197, 94, 0.5)',
        }}
        onClick={handleWhatsAppClick}
      >
        <MessageCircle size={38} />
      </a>
    </div>
  );
};

export default FloatingButtons;
