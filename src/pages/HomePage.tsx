import React ,{useState} from "react";
import Navbar from "../components/navbar";
import homebg from "../assets/homebg.jpg"
import "../styles/styles.css";
import LoginModal from "../components/modals/login_modal";


export default function HomePage() {
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <div className="page-root">
      <Navbar
        links={[
          { label: "About Us", href: "#about" },
          { label: "Destinations", href: "#destinations" },
          { label: "Contact", href: "#contact" },
        ]}
        cta={{ label: "Login", onClick: () => setLoginOpen(true) }}
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
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLogin={(p) => {
          console.log("Login payload:", p);
          setLoginOpen(false);
        }}
        onSignup={() => {
          console.log("Navigate to signup (implement routing)");
        }}
      />
    </div>
  );
}