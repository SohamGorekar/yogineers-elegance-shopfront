
import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Fashion', href: '/categories' },
    { name: 'Electronics', href: '/categories' },
    { name: 'Home & Living', href: '/categories' },
    { name: 'Accessories', href: '/categories' },
    { name: 'Art & Decor', href: '/categories' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-lg shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <h1 className="text-2xl font-bold text-[#D4A373] cursor-pointer">YOGINEERS</h1>
            </Link>
            <span className="text-sm text-gray-600 hidden md:block">Modern Shopping Experience</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/categories" className="text-gray-700 hover:text-[#D4A373] transition-colors duration-200 font-medium">
              All Categories
            </Link>
            {navItems.slice(0, 4).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-[#D4A373] transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/search">
              <Button variant="ghost" size="icon" className="hover:bg-[#FEFAE0] transition-colors">
                <Search className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="hover:bg-[#FEFAE0] transition-colors relative">
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#D4A373] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="hover:bg-[#FEFAE0] transition-colors">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 mt-4">
              <Link
                to="/categories"
                className="text-gray-700 hover:text-[#D4A373] transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                All Categories
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-[#D4A373] transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
