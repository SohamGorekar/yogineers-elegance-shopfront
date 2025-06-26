
import React from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-24">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h1>
              <p className="text-gray-600 mb-8">Start shopping to add items to your cart.</p>
              <Link to="/">
                <Button className="bg-[#D4A373] hover:bg-[#D4A373]/90">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-[#D4A373] font-bold text-lg">${item.price}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span>Items ({getTotalItems()})</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${(getTotalPrice() * 1.08).toFixed(2)}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-[#D4A373] hover:bg-[#D4A373]/90 mb-3">
                    Proceed to Checkout
                  </Button>
                  <Link to="/">
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
