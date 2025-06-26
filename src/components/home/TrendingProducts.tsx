
import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const TrendingProducts = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      rating: 4.8,
      reviews: 234,
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Designer Leather Jacket',
      price: 599,
      originalPrice: 799,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
      rating: 4.9,
      reviews: 156,
      badge: 'Limited Edition'
    },
    {
      id: 3,
      name: 'Smart Fitness Watch',
      price: 249,
      originalPrice: 329,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      rating: 4.7,
      reviews: 892,
      badge: 'Trending'
    },
    {
      id: 4,
      name: 'Luxury Ceramic Vase',
      price: 149,
      originalPrice: 199,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
      rating: 4.6,
      reviews: 67,
      badge: 'New'
    },
    {
      id: 5,
      name: 'Premium Coffee Maker',
      price: 399,
      originalPrice: 499,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e',
      rating: 4.8,
      reviews: 445,
      badge: 'Editor\'s Choice'
    },
    {
      id: 6,
      name: 'Modern Table Lamp',
      price: 129,
      originalPrice: 169,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      rating: 4.5,
      reviews: 123,
      badge: 'Sale'
    }
  ];

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Trending Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover what's hot right now - handpicked items that our customers love most
          </p>
          <Link to="/search">
            <Button variant="outline" className="border-[#D4A373] text-[#D4A373] hover:bg-[#D4A373] hover:text-white">
              View All Products
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D4A373] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.badge}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="bg-white/90 hover:bg-white"
                    >
                      ♡
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-[#D4A373] transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-[#D4A373]">
                      ${product.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="text-sm text-green-600 font-medium">
                      Save ${product.originalPrice - product.price}
                    </span>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-[#D4A373] hover:bg-[#D4A373]/90 text-white"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="px-4">
                      Quick View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-[#D4A373] text-[#D4A373] hover:bg-[#D4A373] hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-[#D4A373] text-[#D4A373] hover:bg-[#D4A373] hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
