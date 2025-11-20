# Setup Instructions

## Automated Setup (Windows PowerShell)

Run this script to quickly set up your development environment:

```powershell
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file
if (-not (Test-Path .env)) {
    Copy-Item .env.example .env
    Write-Host "✅ Created backend/.env - Please configure it with your values" -ForegroundColor Green
} else {
    Write-Host "⚠️  backend/.env already exists" -ForegroundColor Yellow
}

# Navigate to frontend
cd ../frontend

# Install dependencies
npm install

# Create .env file
if (-not (Test-Path .env)) {
    Copy-Item .env.example .env
    Write-Host "✅ Created frontend/.env - Please configure it with your values" -ForegroundColor Green
} else {
    Write-Host "⚠️  frontend/.env already exists" -ForegroundColor Yellow
}

cd ..

Write-Host ""
Write-Host "🎉 Setup Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Configure backend/.env with your MongoDB URI" -ForegroundColor White
Write-Host "2. Configure frontend/.env if needed" -ForegroundColor White
Write-Host "3. Start backend: cd backend && npm run dev" -ForegroundColor White
Write-Host "4. Start frontend: cd frontend && npm run dev" -ForegroundColor White
Write-Host ""
```

## Manual Setup

### Step 1: Install Backend Dependencies

```powershell
cd backend
npm install
```

### Step 2: Configure Backend Environment

```powershell
copy .env.example .env
# Edit .env file with your configuration
```

### Step 3: Install Frontend Dependencies

```powershell
cd ../frontend
npm install
```

### Step 4: Configure Frontend Environment

```powershell
copy .env.example .env
# Edit .env file if needed
```

### Step 5: Start Development Servers

Terminal 1 (Backend):

```powershell
cd backend
npm run dev
```

Terminal 2 (Frontend):

```powershell
cd frontend
npm run dev
```

## Required Configuration

### Backend .env

You must configure:

- `MONGODB_URI` - Your MongoDB Atlas connection string

Optional:

- `JWT_SECRET` - For authentication (use strong random string)
- `EMAIL_*` - Email service credentials

### Frontend .env

Default values should work for local development.
Change `VITE_API_URL` only if backend runs on different port.

## Verification

After setup:

1. Backend should be running on http://localhost:5000
2. Frontend should be running on http://localhost:5173
3. Visit http://localhost:5000/health to verify backend
4. Visit http://localhost:5173 to see the application

## Troubleshooting

### Port already in use

```powershell
# Backend (5000)
netstat -ano | findstr :5000
# Kill the process using that port

# Frontend (5173)
netstat -ano | findstr :5173
# Kill the process using that port
```

### MongoDB connection fails

- Verify your MongoDB Atlas IP whitelist includes 0.0.0.0/0
- Check username and password in connection string
- Ensure cluster is running (not paused)

### Dependencies installation fails

```powershell
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# Reinstall
npm install
```

## Quick Commands Reference

```powershell
# Install everything
cd backend; npm install; cd ../frontend; npm install; cd ..

# Start backend
cd backend; npm run dev

# Start frontend
cd frontend; npm run dev

# Run backend tests
cd backend; npm test

# Build frontend for production
cd frontend; npm run build

# Lint backend code
cd backend; npm run lint

# Lint frontend code
cd frontend; npm run lint
```

## Ready to Deploy?

Follow the [QUICK_START.md](QUICK_START.md) guide for deployment instructions.
