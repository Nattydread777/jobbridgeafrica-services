const mongoose = require('mongoose');
const Service = require('../models/Service');
const dotenv = require('dotenv');

dotenv.config();

const services = [
  {
    title: 'MERN Full Stack Development',
    description: 'Build modern, scalable web applications using MongoDB, Express.js, React, and Node.js.',
    icon: 'FaCode',
    features: [
      'Custom web application development',
      'RESTful API design and implementation',
      'Real-time features with WebSockets',
      'Database design and optimization',
      'Authentication and authorization',
      'Responsive UI/UX design'
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'TypeScript'],
    category: 'Development',
    pricing: {
      startingPrice: 5000,
      priceUnit: 'project'
    },
    order: 1
  },
  {
    title: 'Project Management',
    description: 'Expert project management using Agile and Waterfall methodologies with industry-leading tools.',
    icon: 'FaTasks',
    features: [
      'Agile/Scrum methodology implementation',
      'Sprint planning and management',
      'Team collaboration facilitation',
      'Resource allocation and tracking',
      'Risk management and mitigation',
      'Stakeholder communication'
    ],
    technologies: ['Monday.com', 'Asana', 'ClickUp', 'Jira', 'Trello', 'Slack'],
    category: 'Management',
    pricing: {
      startingPrice: 80,
      priceUnit: 'hour'
    },
    order: 2
  },
  {
    title: 'Database Administration',
    description: 'Comprehensive database design, optimization, and management services.',
    icon: 'FaDatabase',
    features: [
      'Database schema design',
      'Query optimization',
      'Performance tuning',
      'Backup and recovery strategies',
      'Security and access control',
      'Data migration services'
    ],
    technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch'],
    category: 'Database',
    pricing: {
      startingPrice: 100,
      priceUnit: 'hour'
    },
    order: 3
  },
  {
    title: 'AI Integration & Development',
    description: 'Implement cutting-edge AI solutions to enhance your applications and workflows.',
    icon: 'FaBrain',
    features: [
      'AI-powered recommendations',
      'Natural Language Processing',
      'Machine Learning models',
      'Chatbot development',
      'Predictive analytics',
      'Computer vision solutions'
    ],
    technologies: ['TensorFlow', 'OpenAI API', 'Python', 'Scikit-learn', 'Hugging Face'],
    category: 'AI',
    pricing: {
      startingPrice: 10000,
      priceUnit: 'project'
    },
    order: 4
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected for seeding...');

    // Clear existing services
    await Service.deleteMany({});
    console.log('Cleared existing services');

    // Insert new services
    await Service.insertMany(services);
    console.log('Services seeded successfully');

    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedDatabase();
