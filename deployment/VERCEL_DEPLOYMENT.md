# Vercel Deployment Configuration

## Project Configuration

- **Framework**: Vite
- **Output Directory**: dist
- **Install Command**: npm install
- **Build Command**: npm run build
- **Node Version**: 18.x

## Environment Variables

Set the following in your Vercel project settings:

```
VITE_API_URL=<your-render-backend-url>/api
VITE_APP_NAME=JobBridge Africa Services
VITE_APP_DESCRIPTION=Professional MERN Stack Development & Consulting Services
```

## Deployment Steps

### Option 1: Vercel CLI (Recommended)

1. Install Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:

   ```bash
   vercel login
   ```

3. Navigate to frontend directory:

   ```bash
   cd frontend
   ```

4. Deploy:
   ```bash
   vercel --prod
   ```

### Option 2: GitHub Integration

1. Connect your GitHub repository to Vercel
2. Configure the following in Vercel dashboard:
   - Root Directory: `frontend`
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Add environment variables
4. Deploy

## Custom Domain

1. Add domain in Vercel dashboard
2. Configure DNS:

   - Type: A
   - Name: @ (or subdomain)
   - Value: 76.76.21.21

   OR

   - Type: CNAME
   - Name: @ (or subdomain)
   - Value: cname.vercel-dns.com

3. SSL is automatic with Vercel

## Deployment Settings

- **Production Branch**: main
- **Auto Deploy**: Enabled
- **Preview Deployments**: Enabled for all branches

## Performance Optimization

- Vercel automatically optimizes:
  - Image optimization
  - Code splitting
  - Compression
  - Edge caching
  - CDN distribution

## Monitoring

- Use Vercel Analytics for performance monitoring
- Enable Web Vitals tracking
- Set up deployment notifications
