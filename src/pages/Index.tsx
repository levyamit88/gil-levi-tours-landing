
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import TourDetails from '@/components/TourDetails';
import ImageGallery from '@/components/ImageGallery';
import TourHighlights from '@/components/TourHighlights';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const Index = () => {
  useEffect(() => {
    document.title = "גיל לוי - מורה דרך";
    window.scrollTo(0, 0);

    // Add scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <HeroSection />
      <div className="flex-1 flex flex-col">
        <ImageGallery />
        <TourHighlights />
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
