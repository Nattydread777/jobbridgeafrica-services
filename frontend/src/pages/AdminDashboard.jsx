import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaCheck, FaClock, FaTrash } from "react-icons/fa";
import { inquiriesAPI } from "../utils/api";
import { toast } from "react-toastify";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  useEffect(() => {
    fetchInquiries();
  }, [filter]);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const params = filter !== "all" ? { status: filter } : {};
      const response = await inquiriesAPI.getAll(params);
      setInquiries(response.data.data || []);
    } catch (error) {
      toast.error("Failed to fetch inquiries");
      console.error("Error fetching inquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateInquiryStatus = async (id, status) => {
    try {
      await inquiriesAPI.update(id, { status });
      toast.success("Inquiry status updated");
      fetchInquiries();
      setSelectedInquiry(null);
    } catch (error) {
      toast.error("Failed to update inquiry");
    }
  };

  const deleteInquiry = async (id) => {
    if (window.confirm("Are you sure you want to delete this inquiry?")) {
      try {
        await inquiriesAPI.delete(id);
        toast.success("Inquiry deleted");
        fetchInquiries();
        setSelectedInquiry(null);
      } catch (error) {
        toast.error("Failed to delete inquiry");
      }
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      new: "#3b82f6",
      contacted: "#f59e0b",
      "in-progress": "#8b5cf6",
      completed: "#10b981",
      declined: "#ef4444",
    };
    return colors[status] || "#64748b";
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <div className="container">
        <motion.div
          className="dashboard-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Admin Dashboard</h1>
          <p>Manage your client inquiries</p>
        </motion.div>

        <div className="dashboard-filters">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Inquiries
          </button>
          <button
            className={`filter-btn ${filter === "new" ? "active" : ""}`}
            onClick={() => setFilter("new")}
          >
            New
          </button>
          <button
            className={`filter-btn ${filter === "contacted" ? "active" : ""}`}
            onClick={() => setFilter("contacted")}
          >
            Contacted
          </button>
          <button
            className={`filter-btn ${filter === "in-progress" ? "active" : ""}`}
            onClick={() => setFilter("in-progress")}
          >
            In Progress
          </button>
          <button
            className={`filter-btn ${filter === "completed" ? "active" : ""}`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>

        <div className="dashboard-content">
          <div className="inquiries-list">
            {inquiries.length === 0 ? (
              <div className="no-inquiries">
                <FaEnvelope size={48} />
                <p>No inquiries found</p>
              </div>
            ) : (
              inquiries.map((inquiry) => (
                <motion.div
                  key={inquiry._id}
                  className={`inquiry-card ${
                    selectedInquiry?._id === inquiry._id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedInquiry(inquiry)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="inquiry-card-header">
                    <h3>{inquiry.name}</h3>
                    <span
                      className="status-badge"
                      style={{ background: getStatusColor(inquiry.status) }}
                    >
                      {inquiry.status}
                    </span>
                  </div>
                  <p className="inquiry-service">{inquiry.service}</p>
                  <p className="inquiry-email">{inquiry.email}</p>
                  <p className="inquiry-date">
                    {new Date(inquiry.createdAt).toLocaleDateString()}
                  </p>
                </motion.div>
              ))
            )}
          </div>

          {selectedInquiry && (
            <motion.div
              className="inquiry-details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inquiry-details-header">
                <h2>Inquiry Details</h2>
                <button
                  className="close-btn"
                  onClick={() => setSelectedInquiry(null)}
                >
                  ×
                </button>
              </div>

              <div className="detail-section">
                <h3>Contact Information</h3>
                <div className="detail-grid">
                  <div>
                    <label>Name:</label>
                    <p>{selectedInquiry.name}</p>
                  </div>
                  <div>
                    <label>Email:</label>
                    <p>{selectedInquiry.email}</p>
                  </div>
                  <div>
                    <label>Phone:</label>
                    <p>{selectedInquiry.phone || "N/A"}</p>
                  </div>
                  <div>
                    <label>Company:</label>
                    <p>{selectedInquiry.company || "N/A"}</p>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3>Project Information</h3>
                <div className="detail-grid">
                  <div>
                    <label>Service:</label>
                    <p>{selectedInquiry.service}</p>
                  </div>
                  <div>
                    <label>Project Type:</label>
                    <p>{selectedInquiry.projectType || "N/A"}</p>
                  </div>
                  <div>
                    <label>Budget:</label>
                    <p>{selectedInquiry.budget || "N/A"}</p>
                  </div>
                  <div>
                    <label>Timeline:</label>
                    <p>{selectedInquiry.timeline || "N/A"}</p>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3>Message</h3>
                <p className="inquiry-message">{selectedInquiry.message}</p>
              </div>

              <div className="detail-section">
                <h3>Actions</h3>
                <div className="action-buttons">
                  <button
                    className="action-btn contacted"
                    onClick={() =>
                      updateInquiryStatus(selectedInquiry._id, "contacted")
                    }
                  >
                    <FaCheck /> Mark Contacted
                  </button>
                  <button
                    className="action-btn in-progress"
                    onClick={() =>
                      updateInquiryStatus(selectedInquiry._id, "in-progress")
                    }
                  >
                    <FaClock /> In Progress
                  </button>
                  <button
                    className="action-btn completed"
                    onClick={() =>
                      updateInquiryStatus(selectedInquiry._id, "completed")
                    }
                  >
                    <FaCheck /> Mark Completed
                  </button>
                  <button
                    className="action-btn delete"
                    onClick={() => deleteInquiry(selectedInquiry._id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>

              <div className="detail-footer">
                <small>
                  Received:{" "}
                  {new Date(selectedInquiry.createdAt).toLocaleString()}
                </small>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
