
import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tour-dark text-white py-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-xl font-bold mb-2">גיל לוי - טיולי איכות עם משמעות</h3>
        <p className="mb-4">מורה דרך ומדריך טיולי חו"ל</p>
        <p className="mb-6">נייד: 052-4673336</p>
        
        <div className="flex justify-center space-x-4 mb-8">
          <a 
            href="#" 
            className="text-white hover:text-tour-light transition-colors"
            aria-label="פייסבוק"
          >
            <Facebook size={24} />
          </a>
          <a 
            href="#" 
            className="text-white hover:text-tour-light transition-colors mr-4"
            aria-label="אינסטגרם"
          >
            <Instagram size={24} />
          </a>
        </div>
        
        <div className="text-sm text-gray-400">
          <ul className="flex justify-center flex-wrap">
            <li className="mx-2 mb-2">
              <a href="#" className="hover:underline">מדיניות פרטיות</a>
            </li>
            <li className="mx-2 mb-2">
              <a href="#" className="hover:underline">תנאי שימוש</a>
            </li>
            <li className="mx-2 mb-2">
              <a href="#" className="hover:underline">צור קשר</a>
            </li>
          </ul>
          <p className="mt-4">&copy; {new Date().getFullYear()} כל הזכויות שמורות</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
