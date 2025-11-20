# MongoDB Atlas Setup Guide

## Step 1: Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create a Cluster

1. Click "Build a Cluster"
2. Choose **FREE Shared Cluster** (M0)
3. Select a cloud provider and region (choose closest to your users)
4. Cluster Name: `jobbridge-services`
5. Click "Create Cluster" (takes 3-5 minutes)

## Step 3: Database Access

1. Navigate to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose authentication method: **Password**
4. Username: `jobbridge-admin` (or your choice)
5. Password: Generate secure password (save it!)
6. Database User Privileges: **Read and write to any database**
7. Click "Add User"

## Step 4: Network Access

1. Navigate to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. For development: Click "Allow Access from Anywhere" (0.0.0.0/0)
4. For production: Add specific IPs from Render/Railway
5. Click "Confirm"

## Step 5: Get Connection String

1. Navigate to "Clusters"
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Driver: **Node.js**
5. Version: **4.1 or later**
6. Copy the connection string

Example:

```
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

## Step 6: Configure Connection String

1. Replace `<username>` with your database username
2. Replace `<password>` with your database password
3. Add database name after `.net/`: `jobbridge-services`

Final connection string:

```
mongodb+srv://jobbridge-admin:YourPassword@cluster0.xxxxx.mongodb.net/jobbridge-services?retryWrites=true&w=majority
```

## Step 7: Update Environment Variables

### For Local Development (backend/.env):

```env
MONGODB_URI=mongodb+srv://jobbridge-admin:YourPassword@cluster0.xxxxx.mongodb.net/jobbridge-services?retryWrites=true&w=majority
```

### For Render (Production):

Add the same connection string as `MONGODB_URI` environment variable in Render dashboard

## Step 8: Test Connection

1. Navigate to backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env` file and add your connection string

4. Test the connection:

   ```bash
   npm run dev
   ```

5. You should see: "MongoDB Connected: cluster0.xxxxx.mongodb.net"

## Step 9: Seed the Database (Optional)

Populate with initial service data:

```bash
cd backend
node utils/seedDatabase.js
```

## Database Collections

Your application will create these collections:

- **services**: Service offerings
- **inquiries**: Client inquiries/contact submissions

## MongoDB Atlas Dashboard Features

### Monitor Performance

- Database → Metrics
- View operations, connections, and queries

### Browse Collections

- Database → Collections
- View and edit documents directly

### Set Up Backups (Recommended)

- Cloud Provider Snapshots
- Scheduled automatic backups

### Performance Indexes

The application automatically creates indexes for:

- Inquiry status and creation date
- Inquiry email
- Service slug

## Security Best Practices

1. ✅ Use strong, unique passwords
2. ✅ Enable IP whitelisting for production
3. ✅ Use separate databases for dev/staging/production
4. ✅ Regularly rotate database passwords
5. ✅ Enable MongoDB Atlas audit logs (paid tiers)
6. ✅ Set up alerts for unusual activity

## Connection Pooling

The application is configured with:

- Max pool size: 10 connections
- Server selection timeout: 5 seconds
- Socket timeout: 45 seconds

## Troubleshooting

### Cannot connect to cluster

- Check IP whitelist settings
- Verify username/password
- Ensure cluster is active (not paused)

### Connection timeout

- Check firewall settings
- Verify network access configuration
- Try different region/cloud provider

### Authentication failed

- Double-check username and password
- Ensure user has proper permissions
- Check if password contains special characters (URL encode them)

## Support

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Community Forums](https://www.mongodb.com/community/forums/)
