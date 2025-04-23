
import React from 'react';
import { Facebook, Instagram, Globe, Home } from 'lucide-react';

const iconData = [
  {
    Icon: Instagram,
    label: "אינסטגרם",
    link: "https://www.instagram.com/exploringil?igsh=OGNmaTV5MTdpOHFk"
  },
  {
    Icon: Facebook,
    label: "פייסבוק",
    link: "https://www.facebook.com/share/1BrsX97Jh2/"
  },
  {
    Icon: Globe,
    label: "אתר אינטרנט",
    link: "https://exploringil.com/"
  },
  // Optionally, home icon can link to website again or to '/'.
  {
    Icon: Home,
    label: "עמוד הבית",
    link: "https://exploringil.com/"
  }
];

const Footer = () => {
  return (
    <footer className="bg-tour-dark text-white py-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-xl font-bold mb-2">גיל לוי - טיולי איכות עם משמעות</h3>
        <p className="mb-4">מורה דרך ומדריך טיולי חו"ל</p>
        <p className="mb-6">נייד: 052-4673336</p>
        
        <div className="flex justify-center flex-wrap gap-6 mb-8">
          {iconData.map(({ Icon, label, link }, i) => (
            <a
              href={link}
              key={label}
              className="text-white hover:text-tour-primary transition-colors duration-150 p-2"
              style={{ fontSize: 0 }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              tabIndex={0}
            >
              <Icon size={28} />
            </a>
          ))}
        </div>
        
        <div className="text-sm text-gray-400">
          <p className="mt-4">&copy; {new Date().getFullYear()} כל הזכויות שמורות</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
