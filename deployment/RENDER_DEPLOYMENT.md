# Render Deployment Configuration

## Service Configuration

- **Type**: Web Service
- **Environment**: Node
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Node Version**: 18.x

## Environment Variables

Set the following environment variables in your Render dashboard:

```
NODE_ENV=production
PORT=10000
MONGODB_URI=<your-mongodb-atlas-connection-string>
JWT_SECRET=<your-secure-jwt-secret>
JWT_EXPIRE=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=<your-email>
EMAIL_PASSWORD=<your-app-password>
EMAIL_FROM=JobBridge Africa Services <noreply@jobbridgeservices.com>
ADMIN_EMAIL=<admin-email>
FRONTEND_URL=<your-vercel-frontend-url>
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## Health Check Configuration

- **Path**: `/health`
- **Initial Delay**: 30 seconds

## Auto-Deploy

- Enable auto-deploy from the `main` branch
- Deploy on push to main branch

## Scaling

- Start with Basic plan (512 MB RAM)
- Scale up based on traffic needs

## Domain Setup

1. Add custom domain in Render dashboard
2. Update DNS records
3. Enable HTTPS (automatic with Render)

## Monitoring

- Enable Render's built-in monitoring
- Set up email alerts for service failures
- Configure uptime checks
