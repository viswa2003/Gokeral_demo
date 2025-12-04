<<<<<<< HEAD
import React from "react";
import { useState, useEffect } from "react";
=======
import React, { useState } from "react";
>>>>>>> 2d927cd5182ea242b10cdc696d9ca963019397f8
import Navbar from "../components/navbar";
import homebg from "../assets/homebg.jpg";
import "../styles/styles.css";
import Footer from "../components/Footer";
<<<<<<< HEAD
import { Car, Truck,  MapPin, Star, Users, ArrowRight, Phone, Mail,Ambulance,Facebook, Instagram, Twitter, CheckCircle } from "lucide-react";

export default function HomePage() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const vehicles = [
    { name: "Luxury Cars", icon: Car, count: "50+" },
    { name: "Buses", icon: Truck, count: "30+" },
    { name: "Auto Rickshaw", icon: Car, count: "100+" },
    { name: "Ambulance", icon: Ambulance, count: "200+" }
  ];

  const features = [
    { icon: CheckCircle, title: "24/7 Support", desc: "Round the clock customer service" },
    { icon: MapPin, title: "All Kerala", desc: "Coverage across entire Kerala state" },
    { icon: Star, title: "Top Rated", desc: "4.8+ rating from 10,000+ customers" },
    { icon: Users, title: "Verified Drivers", desc: "All drivers are background verified" }
  ];

  const destinations = [
    { name: "Munnar", image: "https://plus.unsplash.com/premium_photo-1697730314165-2cd71dc3a6a4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Alleppey", image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Palakkad", image: "https://images.unsplash.com/photo-1730458555257-887039de379e?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Wayanad", image: "https://images.unsplash.com/photo-1572408992122-a530c9a09dbb?q=80&w=839&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ];

  const testimonials = [
    { name: "Adhil Ahmed", location: "Kochi", rating: 5, text: "Excellent service! Booked a car for Munnar trip. Driver was professional and vehicle was clean." },
    { name: "Hrejul Shekhar", location: "Thiruvananthapuram", rating: 5, text: "Best vehicle booking platform in Kerala. Used for my wedding functions. Highly recommended!" },
    { name: "Viswa", location: "Malappuram", rating: 5, text: "Quick booking, fair prices, and reliable service. Will definitely use again for my business trips." },
    { name: "Sajir", location: "Kozhikode", rating: 5, text: "Clean UI, very attractive, gave me orgasms." }

  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

=======
import LoginModal from "../components/modals/login_modal";
import SignupModal from "../components/modals/signup_modal";

export default function HomePage() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
>>>>>>> 2d927cd5182ea242b10cdc696d9ca963019397f8

  return (
    <div className="page-root min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${homebg})` }}>
      <Navbar
        links={[
          { label: "About Us", href: "#about" },
          { label: "Destinations", href: "#destinations" },
          { label: "Contact", href: "#contact" },
        ]}
        cta={{ label: "Login", href: "#login" }}
        onCtaClick={() => setLoginOpen(true)}
      />

      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLogin={(payload) => {
          console.log("Login payload:", payload);
          setLoginOpen(false);
        }}
        onSignup={() => {
          // open signup modal from login modal
          setLoginOpen(false);
          setSignupOpen(true);
        }}
      />

      <SignupModal
        isOpen={signupOpen}
        onClose={() => setSignupOpen(false)}
        onSignup={(payload) => {
          console.log("Signup payload:", payload);
          setSignupOpen(false);
        }}
        onLogin={() => {
          // if signup modal wants to switch back to login
          setSignupOpen(false);
          setLoginOpen(true);
        }}
      />

      <div className="hero-container" >
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-headline">
<<<<<<< HEAD
              DISCOVER KERALA 
=======
              DISCOVER KERALA

>>>>>>> 2d927cd5182ea242b10cdc696d9ca963019397f8
              <br />
              IN COMFORT
            </h1>

            <p className="hero-sub">
              Book any vehicle across Kerala - from luxury cars to auto rickshaws. Explore God's Own Country with verified drivers and transparent pricing..
            </p>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <section id="vehicles" className="py-20 bg-[linear-gradient(90deg,var(--overlay-color),var(--overlay-color))] backdrop-blur-[6px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white text-4xl font-semibold-900 mb-4">
              Choose Your Vehicle
            </h2>
            <p className="text-xl text-white font-semibold">
              We have the perfect vehicle for every journey in Kerala
            </p>
          </div>
          
          <div className="flex gap-8 justify-center items-stretch">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="w-56 bg-white rounded-2xl p-8 text-center shadow-md border-2 border-green-500 hover:border-green-700 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <vehicle.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-lg text-green-600 font-semibold">
                  {vehicle.count} Available
                </p>
              </div>
            ))}
          </div>
=======

>>>>>>> 2d927cd5182ea242b10cdc696d9ca963019397f8
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[linear-gradient(90deg,var(--overlay-color),var(--overlay-color))] backdrop-blur-[6px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Kerala Rides?</h2>
            <p className="text-xl text-white">Experience the best vehicle booking service in Kerala</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="py-20 bg-[linear-gradient(90deg,var(--overlay-color),var(--overlay-color))] backdrop-blur-[6px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Popular Destinations</h2>
            <p className="text-xl text-white">Explore the most beautiful places in Kerala</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-xl font-semibold">{destination.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[linear-gradient(90deg,var(--overlay-color),var(--overlay-color))] backdrop-blur-[6px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-xl text-white">Read reviews from satisfied customers across Kerala</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-600 mb-6 italic">"{testimonials[currentSlide].text}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[currentSlide].name}</h4>
                  <p className="text-gray-500">{testimonials[currentSlide].location}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}