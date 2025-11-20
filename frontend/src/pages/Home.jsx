import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaTasks,
  FaDatabase,
  FaBrain,
  FaRocket,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "MERN Full Stack Development",
      description:
        "Build modern, scalable web applications using MongoDB, Express.js, React, and Node.js.",
      image: "/logo-mern.png",
    },
    {
      icon: <FaTasks />,
      title: "Project Management",
      description:
        "Agile and Waterfall methodologies with tools like Monday.com, Asana, and ClickUp.",
      image: "/logo-project-mgt2.png",
    },
    {
      icon: <FaDatabase />,
      title: "Database Administration",
      description:
        "Expert database design, optimization, and management for MongoDB and SQL databases.",
      image: "/logo-databaseadmin.png",
    },
    {
      icon: <FaBrain />,
      title: "AI Integration",
      description:
        "Implement cutting-edge AI solutions to enhance your applications and workflows.",
      image: "/logo-AI-int.png",
    },
  ];

  const features = [
    {
      icon: <FaRocket />,
      title: "Fast, Predictable Delivery",
      description:
        "Time-boxed sprints, clear milestones, and weekly demos keep progress visible and on track.",
    },
    {
      icon: <FaUsers />,
      title: "Senior-Only Execution",
      description:
        "Work directly with experienced engineers and PMs—no handoffs, no bloated teams.",
    },
    {
      icon: <FaDatabase />,
      title: "Secure & Scalable",
      description:
        "Cloud-native patterns, robust security, and performance tuned from day one.",
    },
    {
      icon: <FaBrain />,
      title: "AI Where It Matters",
      description:
        "Practical AI integrations that improve outcomes—recommendations, automation, insights.",
    },
  ];

  const slides = [
    {
      title: "MERN Solutions for Growth",
      subtitle: "High-performance web apps built for scale",
      image: "/logo-mern1.jpg",
    },
    {
      title: "AI-Powered Experiences",
      subtitle: "Integrate intelligence into your workflows",
      image: "/logo-AI-int.png",
    },
    {
      title: "From Africa to the World",
      subtitle: "We deliver globally, headquartered in Nigeria",
      image: "/logo-africanservices.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((p) => (p + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <section
        className="hero"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            key={currentSlide}
          >
            <h1 className="hero-title">
              {slides[currentSlide].title}
              <span className="highlight"> – JobBridge Services</span>
            </h1>
            <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              {slides.map((_, idx) => (
                <span
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background:
                      idx === currentSlide
                        ? "var(--accent-color)"
                        : "rgba(255,255,255,0.5)",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/services" className="btn btn-secondary">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Our Services</h2>
            <p>Comprehensive solutions tailored to your business needs</p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: 160,
                      objectFit: "cover",
                      borderRadius: 8,
                      marginBottom: 16,
                    }}
                  />
                ) : (
                  <div className="service-icon">{service.icon}</div>
                )}
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: "3rem" }}>
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section featured-project">
        <div className="container">
          <div className="featured-content">
            <motion.div
              className="featured-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Featured Project</h2>
              <h3>JobBridge Africa</h3>
              <a
                href="https://jobbridgeafrica.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                Visit JobBridge Africa
              </a>
            </motion.div>
            <motion.div
              className="featured-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/hero-mission.jpg"
                alt="JobBridge Africa Platform"
                style={{
                  width: "100%",
                  maxWidth: 500,
                  height: "auto",
                  borderRadius: 12,
                  boxShadow: "0 10px 40px rgba(37, 99, 235, 0.3)",
                }}
                onError={(e) => {
                  e.currentTarget.src = "/logo-africanservices.png";
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section projects-showcase">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Recent Projects</h2>
            <p>A selection of work and initiatives we're proud of</p>
          </motion.div>

          <div className="services-grid">
            {[
              {
                title: "JobBridge Africa",
                description:
                  "AI-powered platform connecting African talent with decent work opportunities.",
                link: "https://jobbridgeafrica.org",
              },
              {
                title: "HRMS Dashboard (Demo)",
                description:
                  "Modern HR management toolkit with roles, analytics, and workflows.",
                link: "#",
              },
              {
                title: "E-commerce PWA (Demo)",
                description:
                  "Headless commerce with MERN, payments, and offline-first experience.",
                link: "#",
              },
            ].map((proj, idx) => (
              <motion.a
                key={idx}
                href={proj.link}
                target={proj.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  proj.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{ textDecoration: "none" }}
              >
                <div className="service-icon">
                  <FaCode />
                </div>
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-choose">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose Us</h2>
            <p>We deliver excellence in every project</p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>
              Based in Nigeria, delivering globally — 24/7 support available.
            </p>
            <Link to="/contact" className="btn btn-large btn-white">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
