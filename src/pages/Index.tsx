
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import TrendingProducts from '@/components/home/TrendingProducts';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedCategories />
        <TrendingProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
