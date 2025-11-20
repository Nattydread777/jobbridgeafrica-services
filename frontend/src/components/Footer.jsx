import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobeAfrica,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="logo-text">JobBridge</span>
              <span className="logo-accent">Services</span>
            </h3>
            <p className="footer-description">
              Professional MERN Stack, Project Management, and AI Integration.
              Based in Nigeria, delivering globally with 24/7 support.
            </p>
            <div className="footer-social">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaTwitter />
              </a>
              <a href="mailto:info@jobbridgeafrica.com" className="social-icon">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li>
                <Link to="/services">MERN Stack Development</Link>
              </li>
              <li>
                <Link to="/services">Project Management</Link>
              </li>
              <li>
                <Link to="/services">Database Administration</Link>
              </li>
              <li>
                <Link to="/services">AI Integration</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/services">Our Work</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <a
                  href="https://jobbridgeafrica.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JobBridge Africa
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Get in Touch</h4>
            <ul className="footer-links">
              <li>
                <FaEnvelope style={{ marginRight: 6 }} /> Email:
                info@jobbridgeafrica.com
              </li>
              <li>
                <FaPhone style={{ marginRight: 6 }} /> Phone: +234 807 320 8945
              </li>
              <li>
                <FaWhatsapp style={{ marginRight: 6, color: "#25D366" }} />
                WhatsApp:{" "}
                <a
                  href="https://wa.me/2348073208945"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat Now
                </a>
              </li>
              <li>
                <FaMapMarkerAlt style={{ marginRight: 6 }} /> Delta State,
                Nigeria (WAT)
              </li>
              <li>
                <FaGlobeAfrica style={{ marginRight: 6 }} /> Serving clients
                across Africa, Europe & North America
              </li>
              <li>Supporting SDG 8: Decent Work and Economic Growth</li>
              <li>
                <Link to="/contact" className="footer-cta">
                  Start Your Project →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} JobBridge Africa Services. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
