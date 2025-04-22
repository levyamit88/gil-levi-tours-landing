
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-b from-tour-light to-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843')] bg-cover bg-center opacity-10 z-0"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center opacity-0 animate-fade-in">
        <h1 className="tour-title mb-6 text-tour-dark">
          <span className="text-tour-primary">🥾</span> הצטרפו אליי לטיול יחיד ומיוחד
        </h1>
        <h2 className="tour-subtitle mb-8">
          דתות ותרבויות בגליל התחתון
        </h2>
        <p className="text-xl md:text-2xl font-medium mb-8">
          יום שישי | 16.5 | שעה 09:00 | פסגת הר תבור
        </p>
        <p className="tour-text text-xl italic text-tour-dark font-medium">
          🌿 יש טיולים שלא מפספסים. נקודה.
        </p>
        <p className="tour-text mt-4">
          קחו מקל, קחו תרמיל, והצטרפו אליי לטיול מרתק ומרגש בגליל!
        </p>
        <div className="mt-8">
          <button className="bg-tour-primary hover:bg-tour-secondary text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
            הרשמה לטיול
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
