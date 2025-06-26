
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FeaturedCategories = () => {
  const categories = [
    {
      name: 'Fashion',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050',
      description: 'Timeless style meets modern comfort',
      itemCount: '2.5k+ items'
    },
    {
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece',
      description: 'Latest technology for your lifestyle',
      itemCount: '1.8k+ items'
    },
    {
      name: 'Home & Living',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
      description: 'Transform your space into a sanctuary',
      itemCount: '3.2k+ items'
    },
    {
      name: 'Accessories',
      image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93',
      description: 'Perfect finishing touches',
      itemCount: '950+ items'
    },
    {
      name: 'Art & Decor',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0',
      description: 'Curated pieces for your personal gallery',
      itemCount: '750+ items'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FEFAE0]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore Our Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover carefully curated categories designed to elevate your lifestyle
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Featured Category */}
          <Link to="/categories" className="md:col-span-2 lg:row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
            <img
              src={categories[0].image}
              alt={categories[0].name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{categories[0].name}</h3>
              <p className="text-lg mb-2 opacity-90">{categories[0].description}</p>
              <p className="text-sm opacity-75 mb-4">{categories[0].itemCount}</p>
              <Button 
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm"
              >
                Shop Now
              </Button>
            </div>
          </Link>

          {/* Secondary Categories */}
          {categories.slice(1).map((category, index) => (
            <Link
              key={category.name}
              to="/categories"
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-80"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                <p className="text-sm opacity-90 mb-1">{category.description}</p>
                <p className="text-xs opacity-75">{category.itemCount}</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button 
                  size="sm" 
                  className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm"
                >
                  View
                </Button>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center">
          <Link to="/categories">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#D4A373] text-[#D4A373] hover:bg-[#D4A373] hover:text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              View All Categories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
