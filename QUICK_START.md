# Quick Start Guide - JobBridge Africa Services

This guide will help you get the application running locally and deployed to production in under 30 minutes.

## 📋 Prerequisites Checklist

Before starting, ensure you have:

- [ ] Node.js 18+ installed
- [ ] Git installed
- [ ] Code editor (VS Code recommended)
- [ ] GitHub account
- [ ] MongoDB Atlas account (free)
- [ ] Vercel account (free)
- [ ] Render account (free)

## 🚀 Part 1: Local Development (10 minutes)

### Step 1: Clone and Setup

```powershell
# Clone the repository
git clone https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-Nattydread777.git
cd deployment-and-devops-essentials-Nattydread777

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Step 2: MongoDB Atlas Setup (5 minutes)

1. Go to https://cloud.mongodb.com/
2. Create account → Create Free Cluster (M0)
3. Database Access → Add New User → Save password
4. Network Access → Allow Access from Anywhere
5. Clusters → Connect → Connect your application → Copy connection string

### Step 3: Configure Environment Variables

```powershell
# Backend environment
cd backend
copy .env.example .env
# Edit .env and add your MongoDB connection string
```

Example `.env`:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/jobbridge-services
JWT_SECRET=your-super-secret-key-change-this
FRONTEND_URL=http://localhost:5173
```

```powershell
# Frontend environment
cd ../frontend
copy .env.example .env
```

Example `.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

### Step 4: Start Development Servers

```powershell
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend (new terminal)
cd frontend
npm run dev
```

### Step 5: Test Locally

- Frontend: http://localhost:5173
- Backend: http://localhost:5000/health
- Test the contact form and see it in action!

---

## 🌐 Part 2: Deploy to Production (15 minutes)

### Step 1: Prepare for Deployment

```powershell
# Make sure everything is committed
git add .
git commit -m "Initial project setup"
git push origin main
```

### Step 2: Deploy Backend to Render (7 minutes)

1. Go to https://dashboard.render.com/
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:

   - **Name**: jobbridge-backend (or your choice)
   - **Root Directory**: `backend`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

5. Add Environment Variables (click "Advanced"):

   ```
   NODE_ENV=production
   MONGODB_URI=<your-atlas-connection-string>
   JWT_SECRET=<generate-strong-secret>
   FRONTEND_URL=<will-add-after-vercel-deploy>
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   ```

6. Click "Create Web Service"
7. Wait for deployment (3-5 minutes)
8. Copy your Render URL: `https://your-app.onrender.com`

### Step 3: Deploy Frontend to Vercel (5 minutes)

**Option A: Vercel CLI (Recommended)**

```powershell
# Install Vercel CLI
npm install -g vercel

# Navigate to frontend
cd frontend

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? jobbridge-services
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

**Option B: Vercel Dashboard**

1. Go to https://vercel.com/
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add Environment Variable:
   - `VITE_API_URL` = `https://your-render-url.onrender.com/api`
6. Click "Deploy"

### Step 4: Update Backend Environment

1. Go back to Render dashboard
2. Find your service → Environment
3. Add/Update:
   ```
   FRONTEND_URL=https://your-vercel-url.vercel.app
   ```
4. Save changes (service will redeploy)

### Step 5: Test Production Deployment

1. Visit your Vercel URL
2. Navigate through the site
3. Fill out the contact form
4. Check if it submits successfully
5. Visit `/admin` to see inquiries

---

## 🔄 Part 3: Setup CI/CD (5 minutes)

### Step 1: Add GitHub Secrets

1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Add these secrets:

**For Vercel:**

```
VERCEL_TOKEN (from https://vercel.com/account/tokens)
VITE_API_URL (your Render backend URL)
```

**For Render:**

```
RENDER_SERVICE_ID (from Render dashboard → Settings)
RENDER_API_KEY (from Render account settings)
BACKEND_URL (your Render URL)
```

### Step 2: Enable GitHub Actions

The workflows are already created! They will automatically:

- ✅ Test code on every push
- ✅ Deploy to production on push to `main`
- ✅ Run health checks after deployment

Test it:

```powershell
# Make a small change
echo "# Test CI/CD" >> README.md
git add .
git commit -m "Test CI/CD pipeline"
git push origin main
```

Go to GitHub → Actions tab and watch your pipeline run! 🎉

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Frontend loads at Vercel URL
- [ ] Backend API responds at Render URL `/health`
- [ ] Services page displays correctly
- [ ] Contact form submits successfully
- [ ] Admin dashboard shows inquiries
- [ ] GitHub Actions workflows are green
- [ ] No errors in browser console
- [ ] Mobile responsive works

---

## 🆘 Troubleshooting

### Backend won't start on Render

- Check Environment Variables are set correctly
- Verify MongoDB connection string
- Check Render logs for errors

### Frontend can't connect to backend

- Verify `VITE_API_URL` in Vercel environment variables
- Check CORS settings in backend
- Ensure backend is deployed and running

### MongoDB connection fails

- Check IP whitelist (should allow all: 0.0.0.0/0)
- Verify username and password
- Ensure database name is in connection string

### CI/CD pipeline failing

- Check GitHub Secrets are set correctly
- Verify workflow files syntax
- Check Actions logs for specific errors

---

## 📚 Next Steps

1. **Customize the content**

   - Update service descriptions
   - Add your contact information
   - Customize colors and branding

2. **Add features**

   - User authentication for admin
   - Service request workflow
   - Email notifications
   - Analytics dashboard

3. **Optimize performance**

   - Add image optimization
   - Implement caching
   - Monitor with Vercel Analytics

4. **Secure the application**
   - Add admin authentication
   - Implement rate limiting
   - Set up monitoring alerts

---

## 📞 Support

If you encounter issues:

1. Check the detailed guides in `/deployment` folder
2. Review error logs in Render/Vercel dashboards
3. Check MongoDB Atlas metrics
4. Review GitHub Actions logs

---

## 🎉 Congratulations!

You now have a fully deployed MERN stack application with CI/CD!

**Your deployed URLs:**

- Frontend: `https://your-app.vercel.app`
- Backend: `https://your-app.onrender.com`
- Repository: `https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-Nattydread777`

Share your deployment URLs with your instructor and celebrate! 🚀
