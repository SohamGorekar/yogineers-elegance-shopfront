
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const CategoriesPage = () => {
  const categories = [
    {
      name: 'Fashion',
      description: 'Timeless style meets modern comfort',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050',
      itemCount: '2,500+ items',
      subcategories: ['Clothing', 'Shoes', 'Bags', 'Jewelry']
    },
    {
      name: 'Electronics',
      description: 'Latest technology for your lifestyle',
      image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece',
      itemCount: '1,800+ items',
      subcategories: ['Smartphones', 'Laptops', 'Audio', 'Gaming']
    },
    {
      name: 'Home & Living',
      description: 'Transform your space into a sanctuary',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
      itemCount: '3,200+ items',
      subcategories: ['Furniture', 'Decor', 'Kitchen', 'Bedding']
    },
    {
      name: 'Accessories',
      description: 'Perfect finishing touches',
      image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93',
      itemCount: '950+ items',
      subcategories: ['Watches', 'Sunglasses', 'Belts', 'Wallets']
    },
    {
      name: 'Art & Decor',
      description: 'Curated pieces for your personal gallery',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0',
      itemCount: '750+ items',
      subcategories: ['Paintings', 'Sculptures', 'Prints', 'Crafts']
    },
    {
      name: 'Sports & Fitness',
      description: 'Gear up for an active lifestyle',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      itemCount: '1,200+ items',
      subcategories: ['Equipment', 'Apparel', 'Supplements', 'Outdoor']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#FEFAE0] to-[#E9EDC9] py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Explore All Categories
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our complete collection of carefully curated categories, 
              each designed to elevate your lifestyle with premium quality products.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div
                  key={category.name}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative h-80">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Category Info */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                      <p className="text-sm opacity-90 mb-2">{category.description}</p>
                      <p className="text-xs opacity-75 mb-4">{category.itemCount}</p>
                      
                      {/* Subcategories */}
                      <div className="flex flex-wrap gap-1 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {category.subcategories.map((sub) => (
                          <span
                            key={sub}
                            className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                      
                      <Button 
                        className="bg-[#D4A373] hover:bg-[#D4A373]/90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-16 bg-gradient-to-b from-white to-[#FEFAE0]/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Why Shop by Category?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-16 h-16 bg-[#D4A373] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Curated Selection</h3>
                <p className="text-gray-600">
                  Each category features hand-picked items that meet our premium quality standards.
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-[#D4A373] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Navigation</h3>
                <p className="text-gray-600">
                  Find exactly what you're looking for with our intuitive category organization.
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-[#D4A373] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Deals</h3>
                <p className="text-gray-600">
                  Discover exclusive offers and promotions within each category.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoriesPage;
