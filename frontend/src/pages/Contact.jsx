import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGlobeAfrica,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";
import { inquiriesAPI } from "../utils/api";
import { toast } from "react-toastify";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await inquiriesAPI.create(formData);
      toast.success(
        response.data.message || "Thank you! We will get back to you soon."
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      const errorMsg =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Get in Touch</h1>
            <p>Let's discuss how we can help bring your project to life</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Contact Information</h2>
              <p className="contact-intro">
                Have a project in mind? We partner with startups, SMEs and
                global teams. Reach out and our team will respond within 24
                hours.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p>info@jobbridgeafrica.com</p>
                    <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                      24/7 Support Inbox
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <FaPhone />
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <p>+234 807 320 8945</p>
                    <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                      Calls Mon–Sun
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <FaWhatsapp style={{ color: "#25D366" }} />
                  </div>
                  <div>
                    <h3>WhatsApp</h3>
                    <p>
                      <a
                        href="https://wa.me/2348073208945"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Chat Now
                      </a>
                    </p>
                    <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                      Instant messaging 24/7
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3>Location</h3>
                    <p>Delta State, Nigeria (WAT)</p>
                    <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                      Serving clients globally
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <FaGlobeAfrica />
                  </div>
                  <div>
                    <h3>Global Reach</h3>
                    <p>
                      Projects delivered across Africa, Europe & North America
                    </p>
                  </div>
                </div>
              </div>

              <div className="business-hours">
                <h3>
                  <FaClock style={{ marginRight: 8 }} /> Business Hours
                </h3>
                <p>
                  <strong>Primary (WAT - Lagos):</strong> Mon–Fri 08:00 – 18:00
                </p>
                <p>
                  Weekend engineering standby & 24/7 support desk for critical
                  issues.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 807 320 8945"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="MERN Full Stack Development">
                      MERN Full Stack Development
                    </option>
                    <option value="Project Management">
                      Project Management
                    </option>
                    <option value="Database Administration">
                      Database Administration
                    </option>
                    <option value="AI Integration">AI Integration</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="projectType">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="">Select project type</option>
                      <option value="New Project">New Project</option>
                      <option value="Existing Project Enhancement">
                        Existing Project Enhancement
                      </option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="Consultation">Consultation</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select budget range</option>
                      <option value="< $5,000">{"< $5,000"}</option>
                      <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                      <option value="$15,000 - $50,000">
                        $15,000 - $50,000
                      </option>
                      <option value="> $50,000">{" > $50,000"}</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="timeline">Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="">Select timeline</option>
                    <option value="Urgent (< 1 month)">
                      Urgent ({"< 1 month"})
                    </option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-small"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
