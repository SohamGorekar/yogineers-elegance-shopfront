
import React, { useState } from 'react';
import { User, Settings, ShoppingBag, Heart, MapPin, Phone, Mail } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const mockOrders = [
    { id: '#12345', date: '2024-01-15', status: 'Delivered', total: 299 },
    { id: '#12346', date: '2024-01-10', status: 'Shipped', total: 599 },
    { id: '#12347', date: '2024-01-05', status: 'Processing', total: 149 }
  ];

  const mockWishlist = [
    { id: 1, name: 'Premium Headphones', price: 299, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
    { id: 2, name: 'Designer Jacket', price: 599, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-[#D4A373] rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
                    <p className="text-gray-600">Premium Member</p>
                  </div>
                  <nav className="space-y-2">
                    {tabs.map((tab) => {
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                            activeTab === tab.id
                              ? 'bg-[#D4A373] text-white'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          {tab.label}
                        </button>
                      );
                    })}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {activeTab === 'profile' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          defaultValue="John Doe"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          defaultValue="john@example.com"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          defaultValue="+1 (555) 123-4567"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                        <input
                          type="text"
                          defaultValue="123 Main St, City, State 12345"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
                        />
                      </div>
                    </div>
                    <Button className="bg-[#D4A373] hover:bg-[#D4A373]/90">
                      Update Profile
                    </Button>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'orders' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Order History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div>
                            <p className="font-semibold">{order.id}</p>
                            <p className="text-sm text-gray-600">{order.date}</p>
                          </div>
                          <div className="text-center">
                            <span className={`px-3 py-1 rounded-full text-sm ${
                              order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                              order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">${order.total}</p>
                            <Button variant="outline" size="sm">View Details</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'wishlist' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Wishlist</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {mockWishlist.map((item) => (
                        <div key={item.id} className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                          <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                          <div className="flex-1">
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-[#D4A373] font-bold">${item.price}</p>
                            <div className="flex gap-2 mt-2">
                              <Button size="sm" className="bg-[#D4A373] hover:bg-[#D4A373]/90">Add to Cart</Button>
                              <Button variant="outline" size="sm">Remove</Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'settings' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3">Notifications</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-3" />
                          Email notifications for orders
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-3" />
                          SMS notifications for shipping updates
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" />
                          Marketing emails
                        </label>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Privacy</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-3" />
                          Make profile public
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-3" />
                          Allow data collection for personalization
                        </label>
                      </div>
                    </div>
                    <Button className="bg-[#D4A373] hover:bg-[#D4A373]/90">
                      Save Settings
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
