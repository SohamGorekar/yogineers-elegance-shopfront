
import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'fashion', 'electronics', 'home', 'accessories', 'art'];
  
  const mockProducts = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      category: 'electronics',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Designer Leather Jacket',
      price: 599,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
      category: 'fashion',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Modern Table Lamp',
      price: 149,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      category: 'home',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Luxury Watch',
      price: 899,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      category: 'accessories',
      rating: 4.9
    }
  ];

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-8">
          {/* Search Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Search Products</h1>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-4">
            <p className="text-gray-600">
              {filteredProducts.length} products found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-[#D4A373]">${product.price}</span>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-3 bg-[#D4A373] hover:bg-[#D4A373]/90">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your search.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;
