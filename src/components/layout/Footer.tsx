
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-[#CCD5AE] mt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#D4A373]">YOGINEERS</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Where Everything You Buy Feels Premium. Our universal e-commerce platform is crafted to elevate any brand into a luxury experience.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="hover:bg-[#D4A373] hover:text-white">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-[#D4A373] hover:text-white">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-[#D4A373] hover:text-white">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-[#D4A373] hover:text-white">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-gray-600 hover:text-[#D4A373] transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-[#D4A373] transition-colors">Contact</a></li>
              <li><a href="/blog" className="text-gray-600 hover:text-[#D4A373] transition-colors">Blog</a></li>
              <li><a href="/faq" className="text-gray-600 hover:text-[#D4A373] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/shipping" className="text-gray-600 hover:text-[#D4A373] transition-colors">Shipping Info</a></li>
              <li><a href="/returns" className="text-gray-600 hover:text-[#D4A373] transition-colors">Returns</a></li>
              <li><a href="/privacy" className="text-gray-600 hover:text-[#D4A373] transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-[#D4A373] transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Stay Updated</h4>
            <p className="text-sm text-gray-600">Subscribe to get special offers and updates</p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 border-gray-300 focus:border-[#D4A373]"
              />
              <Button className="bg-[#D4A373] hover:bg-[#D4A373]/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-300 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-600 mb-2">We Accept:</p>
              <div className="flex space-x-4">
                <div className="w-12 h-8 bg-white rounded border flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-600">VISA</span>
                </div>
                <div className="w-12 h-8 bg-white rounded border flex items-center justify-center">
                  <span className="text-xs font-bold text-red-600">MC</span>
                </div>
                <div className="w-12 h-8 bg-white rounded border flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-800">AMEX</span>
                </div>
                <div className="w-12 h-8 bg-white rounded border flex items-center justify-center">
                  <span className="text-xs font-bold text-yellow-600">PP</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@yogineers.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 border-t border-gray-300 pt-8">
          <p>© 2025 YOGINEERS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
