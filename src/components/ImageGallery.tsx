
import React from 'react';

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

const ImageGallery = () => {
  return (
    <section className="w-full px-2 py-8 md:py-12 bg-white">
      <div className="max-w-3xl mx-auto">
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 justify-center"
          style={{ direction: 'rtl' }}
        >
          {images.map((image, idx) => (
            <div
              key={idx}
              className="aspect-square overflow-hidden rounded-lg shadow-md opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.15 + idx * 0.08}s`, animationFillMode: 'forwards' }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
