import React, { useState } from "react";
import Navbar from "../components/navbar";
import homebg from "../assets/homebg.jpg";
import "../styles/styles.css";
import Footer from "../components/Footer";
import LoginModal from "../components/modals/login_modal";
import SignupModal from "../components/modals/signup_modal";

export default function HomePage() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <div className="page-root">
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


        </div>
      </header>

      {/* reusable footer component */}
      <Footer />
    </div>
  );
}