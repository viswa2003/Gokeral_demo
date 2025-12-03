import React from "react";

type NavLink = { label: string; href: string };
interface NavbarProps {
  links?: NavLink[];
  logo?: React.ReactNode;
  cta?: { label: string; href: string };
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
        <a className="nav-cta" href={cta.href}>
          {cta.label}
        </a>
      ) : null}
    </nav>
  );
}