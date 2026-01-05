# 🌐 Deployment Guide - Workblox Next.js App

## Overview
This guide covers deploying your Next.js 16.1.1 application to various platforms.

---

## 🚀 Option 1: Vercel (Recommended)

**Why Vercel?**
- Created by Next.js team
- Zero configuration
- Automatic SSL/HTTPS
- Global CDN
- Automatic deployments from git
- Free tier available

### Steps

#### Method 1: Deploy via Git (Recommended)

1. **Push to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your Git repository
   - Vercel auto-detects Next.js
   - Click "Deploy"

3. **Configure Environment Variables** (if needed)
   - In Vercel dashboard → Settings → Environment Variables
   - Add your variables from `.env.example`

4. **Done!**
   - Your app is live at `https://your-project.vercel.app`
   - Every git push triggers automatic deployment

#### Method 2: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Custom Domain
1. Vercel dashboard → Settings → Domains
2. Add your domain (e.g., `workblox.com`)
3. Update DNS records as instructed
4. SSL certificate auto-provisioned

### Environment Variables
```bash
# Add via CLI
vercel env add NEXT_PUBLIC_API_URL production
# Enter value when prompted

# Or via dashboard
# Settings → Environment Variables → Add
```

---

## 🟦 Option 2: Netlify

**Good for**: Jamstack sites, easy setup

### Steps

1. **Push to Git**
   ```bash
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to https://netlify.com
   - Click "Add new site"
   - Choose "Import from Git"
   - Select repository

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18 or later

4. **Deploy**
   - Click "Deploy site"
   - Wait ~2 minutes

### netlify.toml Configuration
```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 🟧 Option 3: AWS Amplify

**Good for**: AWS ecosystem integration

### Steps

1. **Push to Git**
   ```bash
   git push origin main
   ```

2. **AWS Amplify Console**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect Git repository

3. **Build Settings** (auto-detected)
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

4. **Deploy**
   - Review and save
   - Automatic deployment on git push

---

## 🐳 Option 4: Docker

**Good for**: Self-hosting, full control

### Dockerfile

Create `Dockerfile`:
```dockerfile
# Multi-stage build for smaller image

# Stage 1: Dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Stage 2: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 3: Production
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### docker-compose.yml
```yaml
version: '3.8'

services:
  workblox:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=https://workblox.com
    restart: unless-stopped
```

### Build & Run
```bash
# Build image
docker build -t workblox .

# Run container
docker run -p 3000:3000 workblox

# Or use docker-compose
docker-compose up -d
```

### Update next.config.js for Docker
```js
export default {
  // ... existing config
  output: 'standalone', // Enable standalone output
};
```

---

## 🔵 Option 5: DigitalOcean App Platform

**Good for**: Simple cloud hosting

### Steps

1. **Push to Git**
   ```bash
   git push origin main
   ```

2. **Create App**
   - Go to DigitalOcean → App Platform
   - Click "Create App"
   - Connect Git repository

3. **Configure**
   - Detected as Node.js app
   - Build command: `npm run build`
   - Run command: `npm run start`

4. **Deploy**
   - Review and launch
   - App live at `https://your-app.ondigitalocean.app`

---

## 🟩 Option 6: Railway

**Good for**: Quick deployments, hobby projects

### Steps

1. **Push to Git**
   ```bash
   git push origin main
   ```

2. **Deploy to Railway**
   - Go to https://railway.app
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose repository

3. **Auto-Detection**
   - Railway auto-detects Next.js
   - No configuration needed
   - Automatic deployments

4. **Custom Domain**
   - Settings → Domains
   - Add custom domain
   - Update DNS

---

## 🏢 Option 7: Self-Hosted (VPS)

**Good for**: Full control, custom infrastructure

### Prerequisites
- Ubuntu/Debian VPS (20.04+)
- Root or sudo access
- Domain name (optional)

### Setup Steps

#### 1. Install Node.js
```bash
# Install Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify
node --version
npm --version
```

#### 2. Install PM2
```bash
sudo npm install -g pm2
```

#### 3. Clone & Build
```bash
# Clone repository
git clone <your-repo-url>
cd workblox

# Install dependencies
npm ci

# Build
npm run build

# Start with PM2
pm2 start npm --name "workblox" -- start

# Save PM2 config
pm2 save

# Auto-start on reboot
pm2 startup
```

#### 4. Setup Nginx Reverse Proxy
```bash
# Install Nginx
sudo apt install nginx

# Create config
sudo nano /etc/nginx/sites-available/workblox
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name workblox.com www.workblox.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/workblox /etc/nginx/sites-enabled/

# Test config
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

#### 5. Setup SSL with Let's Encrypt
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d workblox.com -d www.workblox.com

# Auto-renewal (already configured by certbot)
```

#### 6. Continuous Deployment
Create deploy script:
```bash
#!/bin/bash
# deploy.sh

cd /path/to/workblox
git pull origin main
npm ci
npm run build
pm2 restart workblox
```

```bash
chmod +x deploy.sh
```

---

## 📊 Performance Optimization

### 1. Enable Caching
```js
// next.config.js
export default {
  // ... existing config
  
  // Enable SWC minification
  swcMinify: true,
  
  // Compress responses
  compress: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};
```

### 2. CDN Setup
- Use Vercel Edge Network (automatic on Vercel)
- Or CloudFlare CDN for other platforms

### 3. Monitoring
```bash
# Vercel Analytics (Vercel only)
npm install @vercel/analytics

# Add to layout
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## 🔒 Security Checklist

- [ ] Use HTTPS (SSL certificate)
- [ ] Set environment variables securely
- [ ] Enable security headers (see `vercel.json`)
- [ ] Keep dependencies updated
- [ ] Use `.env.local` (never commit secrets)
- [ ] Enable CORS only for trusted domains
- [ ] Rate limiting (if using API routes)
- [ ] Input validation and sanitization

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Check Node version
node --version  # Should be 18+

# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Runtime Errors
- Check environment variables
- Review build logs
- Check browser console (F12)
- Enable verbose logging

### Performance Issues
- Enable compression
- Optimize images
- Use CDN
- Check bundle size: `npm run build` shows size analysis

---

## 📈 Monitoring & Logging

### Vercel
- Built-in analytics
- Real-time logs in dashboard
- Performance insights

### Self-Hosted
```bash
# View PM2 logs
pm2 logs workblox

# Monitor resources
pm2 monit
```

### Error Tracking
Consider adding:
- Sentry: Error tracking
- LogRocket: Session replay
- Google Analytics: User analytics

---

## 🔄 CI/CD Pipeline

### GitHub Actions Example
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - run: npm test  # if you have tests
      # Add deployment step here
```

---

## 📝 Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify forms work
- [ ] Check mobile responsiveness
- [ ] Test dark mode toggle
- [ ] Verify navigation works
- [ ] Check images load
- [ ] Test article pages
- [ ] Verify animations work
- [ ] Check console for errors
- [ ] Test on multiple browsers
- [ ] Verify SSL certificate
- [ ] Check page load speed
- [ ] Set up monitoring

---

## 🆘 Support

**Platform Documentation:**
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- AWS Amplify: https://docs.amplify.aws
- DigitalOcean: https://docs.digitalocean.com

**Next.js:**
- https://nextjs.org/docs/deployment

---

**Choose your deployment platform and follow the guide above!** 🚀

Each platform has trade-offs:
- **Easiest**: Vercel, Railway
- **Most Control**: Docker, Self-hosted
- **AWS Integration**: AWS Amplify
- **Budget-Friendly**: Netlify, DigitalOcean

Good luck with your deployment! 🎉
