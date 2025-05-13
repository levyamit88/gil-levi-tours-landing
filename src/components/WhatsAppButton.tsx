
import React from "react";
import { Phone } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/972548351210"
      className="whatsapp-float bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="WhatsApp Contact"
    >
      <Phone size={28} />
    </a>
  );
};

export default WhatsAppButton;
