
import React from 'react';

const images = [
  {
    src: "/lovable-uploads/d55ca41b-69ac-46f0-8bfe-5c8020a01dd1.png",
    alt: "בית בזלת בגליל התחתון"
  },
  {
    src: "/lovable-uploads/42e1ee41-9178-44f9-975f-1491a29a5f0f.png",
    alt: "ציור קיר בכנסייה גלילית"
  },
  {
    src: "/lovable-uploads/f8bc3fa5-31bb-43d3-9be2-3fb3a35c3024.png",
    alt: "כנסיה עתיקה בגליל"
  },
  {
    src: "/lovable-uploads/a9057e10-8449-4150-a91a-3d640bf6d085.png",
    alt: "חזית כנסיה בהר תבור"
  },
  {
    src: "/lovable-uploads/18eb8cb3-5138-4db8-98c5-f5605f0eeb97.png",
    alt: "מבנה עתיק ליד הר תבור"
  },
  {
    src: "/lovable-uploads/e5a90b83-9007-4ca4-adcb-902112a9f680.png",
    alt: "נוף ויער בגליל התחתון"
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
