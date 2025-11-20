import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="JobBridge Services Logo"
            style={{ height: 100, width: "auto", marginRight: 16 }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span className="logo-text">JobBridge</span>
          <span className="logo-accent">Services</span>
        </Link>

        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <Link to="/" className="navbar-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/services" className="navbar-link" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/contact" className="navbar-link" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/contact" className="navbar-cta" onClick={closeMenu}>
            Get Started
          </Link>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
