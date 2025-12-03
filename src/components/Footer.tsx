import React from "react";

type LinkItem = { label: string; href?: string };

interface FooterProps {
  companyName?: string;
  description?: string;
  phone?: string;
  email?: string;
  address?: string;
  quickLinks?: LinkItem[];
  services?: LinkItem[];
  year?: number;
  compact?: boolean;
  fixed?: boolean;        // if true, footer is fixed to viewport bottom
  height?: string;        // CSS height (e.g. "220px")
}

/**
 * Reusable Footer component.
 * Pass compact={true} to render a smaller footer.
 */
export default function Footer({
  companyName = "Kerala Rides",
  description = "Your trusted partner for vehicle booking across Kerala. Safe, reliable, and affordable transportation solutions.",
  phone = "+91 98765 43210",
  email = "info@keralarides.com",
  address = "Kochi, Kerala, India",
  quickLinks = [
    { label: "About Us", href: "#" },
    { label: "Our Services", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  services = [
    { label: "Car Rental", href: "#" },
    { label: "Bus Booking", href: "#" },
    { label: "Auto Rickshaw", href: "#" },
    { label: "Bike Rental", href: "#" },
  ],
  year = new Date().getFullYear(),
  compact = true,
  fixed = true,
  height = "220px",
}: FooterProps) {
  const rootStyle: React.CSSProperties = {
    height,
    // keep everything inside the footer (no internal scrolling)
    overflow: "hidden",
    // if fixed, position will be handled by CSS class; inline ensures variable height works
  };

  return (
    <footer
      id="contact"
      className={`footer ${compact ? "compact" : ""} ${fixed ? "fixed" : ""}`}
      style={rootStyle}
      aria-label="Site footer"
    >
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="brand-row">
              <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden>
                <path d="M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm14 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="currentColor"/>
              </svg>
              <span className="brand-title">{companyName}</span>
            </div>

            <p className="footer-desc">{description}</p>

            <div className="social-row" aria-hidden>
              <span className="social-pill">fb</span>
              <span className="social-pill">ig</span>
              <span className="social-pill">tw</span>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="col-title">Quick Links</h4>
            <ul className="col-list">
              {quickLinks.map((l) => (
                <li key={l.label}><a href={l.href ?? "#"} className="col-link">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="col-title">Services</h4>
            <ul className="col-list">
              {services.map((s) => (
                <li key={s.label}><a href={s.href ?? "#"} className="col-link">{s.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="col-title">Contact Info</h4>
            <div className="contact-list">
              <div className="contact-item"><span className="contact-icon">📞</span><span className="contact-text">{phone}</span></div>
              <div className="contact-item"><span className="contact-icon">✉️</span><span className="contact-text">{email}</span></div>
              <div className="contact-item"><span className="contact-icon">📍</span><span className="contact-text">{address}</span></div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} {companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}