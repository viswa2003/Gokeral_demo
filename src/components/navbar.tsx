import React from "react";

type NavLink = { label: string; href: string };
interface NavbarProps {
  links?: NavLink[];
  logo?: React.ReactNode;
  // cta can be a simple link or a clickable action (onClick). href is optional when using onClick.
  cta?: { label: string; href?: string; onClick?: () => void };
}

export default function Navbar({ links = [], logo, cta }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">{logo ?? <span className="logo-text">GoKeral</span>}</div>
        <div className="nav-links" >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {cta ? (
        cta.onClick ? (
          <button className="nav-cta" onClick={cta.onClick} type="button">
            {cta.label}
          </button>
        ) : (
          <a className="nav-cta" href={cta.href}>
            {cta.label}
          </a>
        )
      ) : null}
    </nav>
  );
}