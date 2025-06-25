
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Premium Collection",
      subtitle: "Discover Luxury",
      description: "Where Everything You Buy Feels Premium",
      cta: "Shop Now",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      overlay: "bg-black/40"
    },
    {
      title: "New Arrivals",
      subtitle: "Fresh & Modern",
      description: "Curated selections for the modern lifestyle",
      cta: "Explore",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
      overlay: "bg-black/30"
    },
    {
      title: "Limited Edition",
      subtitle: "Exclusive Designs",
      description: "Unique pieces for the discerning customer",
      cta: "View Collection",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      overlay: "bg-black/35"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${slide.overlay}`} />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h3 className="text-lg md:text-xl font-light mb-2 opacity-90 animate-fade-in">
                  {slide.subtitle}
                </h3>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in">
                  {slide.description}
                </p>
                <Button 
                  size="lg" 
                  className="bg-[#D4A373] hover:bg-[#D4A373]/90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 animate-fade-in"
                >
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
