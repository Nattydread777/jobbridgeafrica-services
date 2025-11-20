const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a service title'],
    trim: true,
    unique: true
  },
  slug: {
    type: String,
    unique: true
  },
  description: {
    type: String,
    required: [true, 'Please provide a description']
  },
  icon: {
    type: String,
    default: 'FaCode'
  },
  features: [{
    type: String
  }],
  technologies: [{
    type: String
  }],
  category: {
    type: String,
    enum: ['Development', 'Management', 'Database', 'AI', 'Consulting'],
    required: true
  },
  pricing: {
    startingPrice: Number,
    priceUnit: {
      type: String,
      enum: ['hour', 'project', 'month'],
      default: 'project'
    }
  },
  active: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Create slug before saving
ServiceSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = this.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }
  next();
});

module.exports = mongoose.model('Service', ServiceSchema);
