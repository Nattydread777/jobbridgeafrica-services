import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaTasks,
  FaDatabase,
  FaBrain,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";
import { servicesAPI } from "../utils/api";
import { toast } from "react-toastify";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback services data
  const defaultServices = [
    {
      _id: "1",
      title: "MERN Full Stack Development",
      icon: "FaCode",
      description:
        "Build modern, scalable web applications using MongoDB, Express.js, React, and Node.js.",
      features: [
        "Custom web application development",
        "RESTful API design and implementation",
        "Real-time features with WebSockets",
        "Database design and optimization",
        "Authentication and authorization",
        "Responsive UI/UX design",
      ],
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Redux",
        "TypeScript",
      ],
      category: "Development",
    },
    {
      _id: "2",
      title: "Project Management",
      icon: "FaTasks",
      description:
        "Expert project management using Agile and Waterfall methodologies with industry-leading tools.",
      features: [
        "Agile/Scrum methodology implementation",
        "Sprint planning and management",
        "Team collaboration facilitation",
        "Resource allocation and tracking",
        "Risk management and mitigation",
        "Stakeholder communication",
      ],
      technologies: [
        "Monday.com",
        "Asana",
        "ClickUp",
        "Jira",
        "Trello",
        "Slack",
      ],
      category: "Management",
    },
    {
      _id: "3",
      title: "Database Administration",
      icon: "FaDatabase",
      description:
        "Comprehensive database design, optimization, and management services.",
      features: [
        "Database schema design",
        "Query optimization",
        "Performance tuning",
        "Backup and recovery strategies",
        "Security and access control",
        "Data migration services",
      ],
      technologies: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Elasticsearch",
      ],
      category: "Database",
    },
    {
      _id: "4",
      title: "AI Integration & Development",
      icon: "FaBrain",
      description:
        "Implement cutting-edge AI solutions to enhance your applications and workflows.",
      features: [
        "AI-powered recommendations",
        "Natural Language Processing",
        "Machine Learning models",
        "Chatbot development",
        "Predictive analytics",
        "Computer vision solutions",
      ],
      technologies: [
        "TensorFlow",
        "OpenAI API",
        "Python",
        "Scikit-learn",
        "Hugging Face",
      ],
      category: "AI",
    },
    {
      _id: "5",
      title: "Consulting & Strategy",
      icon: "FaChartLine",
      description:
        "Strategic technology consulting to help you make informed decisions.",
      features: [
        "Technology stack selection",
        "Architecture design",
        "Code review and audits",
        "Performance optimization",
        "Security assessments",
        "Team training and mentorship",
      ],
      technologies: ["Various based on needs"],
      category: "Consulting",
    },
    {
      _id: "6",
      title: "Team Augmentation",
      icon: "FaUsers",
      description:
        "Extend your development team with our skilled professionals.",
      features: [
        "Dedicated developers",
        "Flexible engagement models",
        "Quick onboarding",
        "Cultural fit assessment",
        "Ongoing support",
        "Knowledge transfer",
      ],
      technologies: ["All MERN stack technologies"],
      category: "Consulting",
    },
  ];

  const getIcon = (iconName) => {
    const icons = {
      FaCode: <FaCode />,
      FaTasks: <FaTasks />,
      FaDatabase: <FaDatabase />,
      FaBrain: <FaBrain />,
      FaChartLine: <FaChartLine />,
      FaUsers: <FaUsers />,
    };
    return icons[iconName] || <FaCode />;
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await servicesAPI.getAll();
      if (response.data.data && response.data.data.length > 0) {
        setServices(response.data.data);
      } else {
        setServices(defaultServices);
      }
    } catch (error) {
      console.log("Using default services data");
      setServices(defaultServices);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <motion.div
            className="services-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Services</h1>
            <p>
              Comprehensive technology solutions tailored to your business
              needs. From development to deployment, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-list">
            {services.map((service, index) => (
              <motion.div
                key={service._id}
                className="service-detail-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="service-detail-header">
                  <div className="service-detail-icon">
                    {getIcon(service.icon)}
                  </div>
                  <div>
                    <h2>{service.title}</h2>
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>

                <div className="service-detail-content">
                  <div className="service-features">
                    <h3>What We Offer</h3>
                    <ul>
                      {service.features.map((feature, idx) => (
                        <li key={idx}>✓ {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-technologies">
                    <h3>Technologies & Tools</h3>
                    <div className="tech-tags">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="services-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how we can help bring your project to life</p>
            <a href="/contact" className="btn btn-primary btn-large">
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
