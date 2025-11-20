# JobBridge Africa Services - MERN Stack Application

[![Frontend CI](https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-Nattydread777/actions/workflows/frontend-ci.yml/badge.svg)](https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-Nattydread777/actions/workflows/frontend-ci.yml)
[![Backend CI](https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-Nattydread777/actions/workflows/backend-ci.yml/badge.svg)](https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-Nattydread777/actions/workflows/backend-ci.yml)

> Professional MERN Stack Development, Project Management, Database Administration, and AI Integration Services

## 🌟 Live Deployment

- **Frontend (Vercel)**: [Coming Soon - Will be deployed]
- **Backend API (Render)**: [Coming Soon - Will be deployed]
- **API Documentation**: [Coming Soon]

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [CI/CD Pipeline](#cicd-pipeline)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## 🎯 About the Project

**JobBridge Africa Services** is a comprehensive platform showcasing professional technology services, including:

- MERN Full Stack Development
- Project Management (Agile/Waterfall)
- Database Administration
- AI Integration & Development

The platform features a client inquiry system, service portfolio, and admin dashboard for managing client requests. It serves as the service arm of **JobBridge Africa** - an AI-powered platform connecting African youth and professionals with decent work opportunities (supporting UN SDG 8).

## ✨ Features

### Frontend

- ✅ Responsive, modern UI built with React
- ✅ Smooth animations with Framer Motion
- ✅ Service portfolio showcase
- ✅ Interactive contact form
- ✅ Admin dashboard for inquiry management
- ✅ SEO optimized
- ✅ Performance optimized with code splitting

### Backend

- ✅ RESTful API with Express.js
- ✅ MongoDB database with Mongoose ODM
- ✅ Input validation and sanitization
- ✅ Error handling middleware
- ✅ Rate limiting and security headers
- ✅ Email notifications
- ✅ Health check endpoint
- ✅ Comprehensive logging

## 🛠 Technology Stack

### Frontend

- **React** 18.2 - UI library
- **Vite** 5.0 - Build tool
- **React Router** 6.21 - Routing
- **Axios** - HTTP client
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **React Toastify** - Notifications

### Backend

- **Node.js** 18+ - Runtime
- **Express.js** 4.18 - Web framework
- **MongoDB** - Database
- **Mongoose** 8.0 - ODM
- **JWT** - Authentication
- **Nodemailer** - Email service
- **Winston** - Logging
- **Helmet** - Security headers
- **Express Rate Limit** - Rate limiting

### DevOps & Deployment

- **GitHub Actions** - CI/CD
- **Vercel** - Frontend hosting
- **Render** - Backend hosting
- **MongoDB Atlas** - Database hosting

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account
- Git installed

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-Nattydread777.git
   cd deployment-and-devops-essentials-Nattydread777
   ```

2. **Backend Setup**

   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your configuration
   npm run dev
   ```

3. **Frontend Setup**

   ```bash
   cd frontend
   npm install
   cp .env.example .env
   # Edit .env with your configuration
   npm run dev
   ```

4. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000
   - API Health: http://localhost:5000/health

### Environment Variables

#### Backend (.env)

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:5173
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email
EMAIL_PASSWORD=your_app_password
ADMIN_EMAIL=admin@example.com
```

#### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=JobBridge Africa Services
```

## 📦 Deployment

### MongoDB Atlas Setup

See detailed guide: [deployment/MONGODB_ATLAS_SETUP.md](deployment/MONGODB_ATLAS_SETUP.md)

### Backend Deployment (Render)

See detailed guide: [deployment/RENDER_DEPLOYMENT.md](deployment/RENDER_DEPLOYMENT.md)

**Quick Steps:**

1. Create new Web Service on Render
2. Connect GitHub repository
3. Configure environment variables
4. Deploy from `main` branch

### Frontend Deployment (Vercel)

See detailed guide: [deployment/VERCEL_DEPLOYMENT.md](deployment/VERCEL_DEPLOYMENT.md)

**Quick Steps:**

1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to frontend: `cd frontend`
3. Deploy: `vercel --prod`
4. Configure environment variables in Vercel dashboard

## 🔄 CI/CD Pipeline

### Continuous Integration

- **Frontend CI**: Runs on push to `frontend/**`

  - Linting
  - Testing
  - Build verification
  - Artifact upload

- **Backend CI**: Runs on push to `backend/**`
  - Linting
  - Testing
  - Security audit
  - Test coverage

### Continuous Deployment

- **Frontend CD**: Auto-deploy to Vercel on push to `main`
- **Backend CD**: Auto-deploy to Render on push to `main`
- Health checks after deployment

### GitHub Actions Workflows

- `.github/workflows/frontend-ci.yml`
- `.github/workflows/backend-ci.yml`
- `.github/workflows/frontend-cd.yml`
- `.github/workflows/backend-cd.yml`

## 📚 API Documentation

### Base URL

```
Production: https://your-backend.onrender.com/api
Development: http://localhost:5000/api
```

### Endpoints

#### Services

```
GET    /api/services           - Get all services
GET    /api/services/:slug     - Get service by slug
POST   /api/services           - Create service (admin)
PUT    /api/services/:id       - Update service (admin)
DELETE /api/services/:id       - Delete service (admin)
```

#### Inquiries

```
POST   /api/inquiries          - Submit inquiry
GET    /api/inquiries          - Get all inquiries (admin)
GET    /api/inquiries/:id      - Get inquiry by ID (admin)
PUT    /api/inquiries/:id      - Update inquiry (admin)
DELETE /api/inquiries/:id      - Delete inquiry (admin)
```

#### Contact

```
POST   /api/contact            - Send contact email
```

#### Health Check

```
GET    /health                 - API health status
```

### Sample Request

```javascript
// Submit inquiry
POST /api/inquiries
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "service": "MERN Full Stack Development",
  "message": "I need a web application built..."
}
```

## 📸 Screenshots

### Home Page

![Home Page](screenshots/home.png)
_Coming Soon - Screenshot of landing page_

### Services Page

![Services](screenshots/services.png)
_Coming Soon - Screenshot of services showcase_

### Contact Form

![Contact](screenshots/contact.png)
_Coming Soon - Screenshot of contact form_

### Admin Dashboard

![Admin Dashboard](screenshots/admin.png)
_Coming Soon - Screenshot of admin panel_

### CI/CD Pipeline

![GitHub Actions](screenshots/github-actions.png)
_Coming Soon - Screenshot of CI/CD in action_

## 🔧 Development

### Running Tests

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

### Linting

```bash
# Backend
cd backend
npm run lint

# Frontend
cd frontend
npm run lint
```

### Database Seeding

```bash
cd backend
node utils/seedDatabase.js
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

**JobBridge Africa Services**

- Website: [Coming Soon]
- Email: info@jobbridgeservices.com
- Main Platform: [JobBridge Africa](https://jobbridgeafrica.com)

## 🙏 Acknowledgments

- Part of PLP MERN Stack Development Program
- Supporting UN SDG 8: Decent Work and Economic Growth
- Built with modern web technologies and best practices

---

**Week 7 Assignment - Deployment and DevOps Essentials**  
_PLP MERN Stack Development Program_
