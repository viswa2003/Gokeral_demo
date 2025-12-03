import React from "react";
import Navbar from "../components/Navbar";
import homebg from "../assets/homebg.jpg";
import "../styles/styles.css";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="page-root">
      <Navbar
        links={[
          { label: "About Us", href: "#about" },
          { label: "Destinations", href: "#destinations" },
          { label: "Contact", href: "#contact" },
        ]}
        cta={{ label: "Login", href: "#login" }}
      />

      <header className="hero-container" style={{ backgroundImage: `url(${homebg})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-headline">
              DISCOVER KERALA 
              
              <br />
              IN COMFORT
            </h1>

            <p className="hero-sub">
              Book any vehicle across Kerala - from luxury cars to auto rickshaws. Explore God's Own Country with verified drivers and transparent pricing..
            </p>
          </div>

          <div className="hero-right">
            <img src={homebg} alt="island" className="hero-side-img" />
          </div>
        </div>
      </header>

      {/* reusable footer component */}
      <Footer />
    </div>
  );
}