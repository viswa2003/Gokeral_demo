import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      {/* CTA Section */}
      <section className="bg-gradient-to-r from green-400 to-green-700 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-white mb-8">
            Book your perfect vehicle today and explore Kerala in comfort
          </p>
          <div className="flex gap-6 justify-center">
            <button className="bg-white text-green-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 border-none cursor-pointer">
              Book Vehicle Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-500 transition-all duration-200 cursor-pointer">
              Download App
            </button>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <section className="bg-slate-900 text-gray-300 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-green-500 text-2xl font-bold">🚗</div>
                <h3 className="text-white text-xl font-bold">GoKerala</h3>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Your trusted partner for vehicle booking across Kerala. Safe, reliable, and affordable transportation solutions.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 list-none p-0 m-0">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 no-underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 no-underline">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 no-underline">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 no-underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
              <ul className="space-y-3 list-none p-0 m-0">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 no-underline">
                    Car Rental
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 no-underline">
                    Bus Booking
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 no-underline">
                    Auto Rickshaw
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 no-underline">
                    Bike Rental
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Contact Info</h4>
              <ul className="space-y-4 list-none p-0 m-0">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">📱</span>
                  <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors duration-200 no-underline">
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✉️</span>
                  <a href="mailto:info@gokerala.com" className="text-gray-400 hover:text-white transition-colors duration-200 no-underline">
                    info@gokerala.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">📍</span>
                  <span className="text-gray-400">Kochi, Kerala, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-500 text-sm">
              © 2025 GoKerala. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;