
import React from 'react';

const ImageGallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      alt: "הר תבור בזריחה"
    },
    {
      src: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
      alt: "נחל בגליל התחתון"
    },
    {
      src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
      alt: "נוף יער בגליל"
    },
    {
      src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
      alt: "נוף הרים בגליל"
    },
    {
      src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
      alt: "יער בגליל"
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      alt: "נוף גלילי"
    }
  ];

  return (
    <section className="tour-section bg-tour-light py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-8 text-center text-tour-dark opacity-0 animate-fade-in">
          הגליל בתמונות
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-lg shadow-md opacity-0"
              style={{ animation: `fade-in 0.5s ease-out ${0.2 + index * 0.1}s forwards` }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
