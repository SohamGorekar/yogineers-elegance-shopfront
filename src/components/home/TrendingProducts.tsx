
import React from 'react';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TrendingProducts = () => {
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      rating: 4.8,
      reviews: 124,
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Minimalist Watch Collection",
      price: 189.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      rating: 4.9,
      reviews: 89,
      badge: "New"
    },
    {
      id: 3,
      name: "Artisan Coffee Maker",
      price: 249.99,
      originalPrice: 299.99,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      rating: 4.7,
      reviews: 156,
      badge: "Hot"
    },
    {
      id: 4,
      name: "Luxury Leather Handbag",
      price: 449.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
      rating: 4.9,
      reviews: 67,
      badge: "Premium"
    },
    {
      id: 5,
      name: "Smart Fitness Tracker",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6",
      rating: 4.6,
      reviews: 203,
      badge: "Sale"
    },
    {
      id: 6,
      name: "Designer Sunglasses",
      price: 159.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
      rating: 4.8,
      reviews: 91,
      badge: "Trending"
    }
  ];

  const getBadgeStyle = (badge) => {
    switch (badge) {
      case 'Bestseller':
        return 'bg-[#D4A373] text-white';
      case 'New':
        return 'bg-green-500 text-white';
      case 'Hot':
        return 'bg-red-500 text-white';
      case 'Premium':
        return 'bg-purple-500 text-white';
      case 'Sale':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Trending Now
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what's popular this season with our carefully curated selection
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getBadgeStyle(product.badge)}`}>
                  {product.badge}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                </button>

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-2 font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Quick View
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-[#D4A373] transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-[#D4A373]">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button 
                  className="w-full bg-[#D4A373] hover:bg-[#D4A373]/90 text-white rounded-full py-3 font-semibold transition-all duration-300 hover:scale-105"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-[#D4A373] text-[#D4A373] hover:bg-[#D4A373] hover:text-white px-8 py-3 rounded-full transition-all duration-300"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
