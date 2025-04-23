
import React from 'react';

const MainImage = () => {
  return (
    <div className="w-full aspect-square md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden opacity-0 animate-fade-in-delay-1">
      <img 
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
        alt="נוף מרהיב בגליל התחתון" 
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default MainImage;
