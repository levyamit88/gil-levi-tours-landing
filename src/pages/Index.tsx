
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import MainImage from '@/components/MainImage';
import TourDetails from '@/components/TourDetails';
import ImageGallery from '@/components/ImageGallery';
import TourHighlights from '@/components/TourHighlights';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "גיל לוי - מורה דרך";
    
    // Scroll to top on load
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
    
    // Select elements with .animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      // Clean up
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <MainImage />
      <TourDetails />
      <ImageGallery />
      <TourHighlights />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
