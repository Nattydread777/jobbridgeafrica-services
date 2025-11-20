const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email'
    ]
  },
  phone: {
    type: String,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  service: {
    type: String,
    required: [true, 'Please select a service'],
    enum: [
      'MERN Full Stack Development',
      'Project Management',
      'Database Administration',
      'AI Integration',
      'Consultation',
      'Other'
    ]
  },
  projectType: {
    type: String,
    enum: ['New Project', 'Existing Project Enhancement', 'Maintenance', 'Consultation']
  },
  budget: {
    type: String,
    enum: ['< $5,000', '$5,000 - $15,000', '$15,000 - $50,000', '> $50,000', 'Not Sure']
  },
  timeline: {
    type: String,
    enum: ['Urgent (< 1 month)', '1-3 months', '3-6 months', '6+ months', 'Flexible']
  },
  message: {
    type: String,
    required: [true, 'Please provide a message'],
    maxlength: [1000, 'Message cannot be more than 1000 characters']
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'in-progress', 'completed', 'declined'],
    default: 'new'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  notes: {
    type: String
  }
}, {
  timestamps: true
});

// Index for faster queries
InquirySchema.index({ status: 1, createdAt: -1 });
InquirySchema.index({ email: 1 });

module.exports = mongoose.model('Inquiry', InquirySchema);
