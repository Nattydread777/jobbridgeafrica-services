# Deployment Checklist

## Pre-Deployment

### Code Preparation

- [ ] All code committed and pushed to GitHub
- [ ] .env files are NOT committed (.gitignore configured)
- [ ] Dependencies updated to latest stable versions
- [ ] No console.logs or debug code in production
- [ ] Error handling implemented
- [ ] Code linted and formatted

### Testing

- [ ] All routes tested locally
- [ ] Frontend connects to backend successfully
- [ ] Form validations working
- [ ] Error messages displaying correctly
- [ ] Responsive design tested on mobile/tablet/desktop

## MongoDB Atlas Setup

- [ ] MongoDB Atlas account created
- [ ] Cluster created (free tier M0)
- [ ] Database user created with strong password
- [ ] Network access configured (IP whitelist)
- [ ] Connection string obtained
- [ ] Connection tested locally
- [ ] Database seeded (optional)

## Backend Deployment (Render)

- [ ] Render account created
- [ ] New Web Service created
- [ ] GitHub repository connected
- [ ] Build command configured: `npm install`
- [ ] Start command configured: `npm start`
- [ ] Environment variables set:
  - [ ] NODE_ENV=production
  - [ ] MONGODB_URI
  - [ ] JWT_SECRET
  - [ ] EMAIL credentials
  - [ ] FRONTEND_URL
  - [ ] Other required variables
- [ ] Health check path set to `/health`
- [ ] Auto-deploy enabled from main branch
- [ ] First deployment successful
- [ ] API accessible at Render URL
- [ ] Health endpoint responding correctly

## Frontend Deployment (Vercel)

- [ ] Vercel account created
- [ ] Vercel CLI installed (`npm i -g vercel`)
- [ ] Project linked to Vercel
- [ ] Environment variables set:
  - [ ] VITE_API_URL (pointing to Render backend)
- [ ] Build configuration verified
- [ ] First deployment successful
- [ ] Frontend accessible at Vercel URL
- [ ] API calls working from deployed frontend
- [ ] All pages loading correctly
- [ ] Forms submitting successfully

## CI/CD Setup

### GitHub Secrets

- [ ] VERCEL_TOKEN added to GitHub secrets
- [ ] RENDER_SERVICE_ID added
- [ ] RENDER_API_KEY added
- [ ] VITE_API_URL added
- [ ] Other required secrets configured

### GitHub Actions

- [ ] frontend-ci.yml workflow created
- [ ] backend-ci.yml workflow created
- [ ] frontend-cd.yml workflow created
- [ ] backend-cd.yml workflow created
- [ ] All workflows tested with commits
- [ ] CI pipeline passing (green checkmarks)
- [ ] CD pipeline deploying successfully

## Testing Deployed Application

### Backend API

- [ ] Health check: `GET /health`
- [ ] Get services: `GET /api/services`
- [ ] Submit inquiry: `POST /api/inquiries`
- [ ] Contact form: `POST /api/contact`
- [ ] Error handling working
- [ ] Rate limiting active

### Frontend

- [ ] Home page loads
- [ ] Services page displays services
- [ ] Contact form submits successfully
- [ ] Admin dashboard accessible
- [ ] Navigation working
- [ ] Responsive on mobile
- [ ] No console errors

## Documentation

- [ ] README.md updated with:
  - [ ] Live deployment URLs
  - [ ] Project description
  - [ ] Installation instructions
  - [ ] API documentation
  - [ ] Environment variables documented
  - [ ] Deployment guide
- [ ] Screenshots added to repository
- [ ] Deployment guides created
- [ ] Comments added to code where needed

## Security

- [ ] Environment variables secured (not in code)
- [ ] CORS configured correctly
- [ ] Rate limiting enabled
- [ ] Input validation implemented
- [ ] SQL/NoSQL injection protection
- [ ] HTTPS enabled (automatic with Render/Vercel)
- [ ] Security headers configured (Helmet)

## Performance

- [ ] Frontend build optimized
- [ ] Code splitting implemented
- [ ] Images optimized
- [ ] Database queries optimized
- [ ] Caching headers configured
- [ ] Compression enabled

## Monitoring & Maintenance

- [ ] Render dashboard checked for errors
- [ ] Vercel analytics enabled
- [ ] Error logging configured
- [ ] Deployment notifications set up
- [ ] Backup strategy planned
- [ ] Update schedule established

## Final Checks

- [ ] All assignment requirements met
- [ ] Both frontend and backend deployed
- [ ] CI/CD pipeline functional
- [ ] Documentation complete
- [ ] Screenshots included
- [ ] Code pushed to GitHub
- [ ] Deployment URLs accessible
- [ ] Everything works end-to-end

## Post-Deployment

- [ ] Share deployment URLs with instructor
- [ ] Monitor for errors in first 24 hours
- [ ] Test all features one more time
- [ ] Celebrate! 🎉

---

## Quick Reference URLs

**Your Deployment URLs:**

- Frontend: `https://your-app.vercel.app`
- Backend: `https://your-app.onrender.com`
- GitHub Repo: `https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-Nattydread777`

**Platform Dashboards:**

- MongoDB Atlas: https://cloud.mongodb.com/
- Render: https://dashboard.render.com/
- Vercel: https://vercel.com/dashboard
- GitHub Actions: https://github.com/[your-repo]/actions

---

_Complete this checklist before final submission!_
