# Deployment Guide - SpecUp IT Solutions

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: SpecUp IT Solutions website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

**Deployment Time**: ~2 minutes
**Cost**: Free for personal projects

---

### Option 2: Netlify

#### Steps:

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Deploy**:
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

---

### Option 3: AWS Amplify

#### Steps:

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Connect your GitHub repository
   - Configure build settings:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm install
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

2. **Deploy**: Amplify will auto-deploy on push

---

### Option 4: Docker + Any Cloud Provider

#### Dockerfile

Create a `Dockerfile` in the project root:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
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

#### Build and Run:
```bash
docker build -t specup-it-solutions .
docker run -p 3000:3000 specup-it-solutions
```

---

### Option 5: Traditional VPS (DigitalOcean, Linode, etc.)

#### Steps:

1. **SSH into your server**
   ```bash
   ssh user@your-server-ip
   ```

2. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone and Setup**
   ```bash
   git clone <your-repo-url>
   cd specup-it-solutions
   npm install
   npm run build
   ```

4. **Use PM2 for Process Management**
   ```bash
   npm install -g pm2
   pm2 start npm --name "specup-it" -- start
   pm2 save
   pm2 startup
   ```

5. **Setup Nginx as Reverse Proxy**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

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

6. **SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

---

## 🔧 Pre-Deployment Checklist

### 1. Environment Variables
Create `.env.local` for sensitive data:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=info@specupit.com
```

### 2. Update Content
- [ ] Replace placeholder text with real content
- [ ] Add actual company information
- [ ] Update contact details
- [ ] Add real project images
- [ ] Update testimonials

### 3. SEO Optimization
- [ ] Update metadata in `app/layout.tsx`
- [ ] Add Open Graph images
- [ ] Create `robots.txt`
- [ ] Generate `sitemap.xml`
- [ ] Add Google Analytics

### 4. Performance
- [ ] Optimize images (use Next.js Image component)
- [ ] Enable compression
- [ ] Test with Lighthouse
- [ ] Check Core Web Vitals

### 5. Security
- [ ] Remove console.logs
- [ ] Secure API routes (if any)
- [ ] Add rate limiting
- [ ] Configure CORS properly

### 6. Testing
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Test all forms
- [ ] Check all links
- [ ] Verify responsive design

---

## 📊 Post-Deployment

### Analytics Setup

#### Google Analytics
```tsx
// app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### Monitoring

1. **Vercel Analytics** (if using Vercel)
   - Automatically enabled
   - View in Vercel dashboard

2. **Sentry** (Error Tracking)
   ```bash
   npm install @sentry/nextjs
   npx @sentry/wizard@latest -i nextjs
   ```

3. **Uptime Monitoring**
   - UptimeRobot
   - Pingdom
   - StatusCake

---

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

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
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm test
      # Add deployment steps here
```

---

## 🌐 Domain Configuration

### DNS Records

```
Type    Name    Value                   TTL
A       @       your-server-ip          3600
CNAME   www     yourdomain.com          3600
```

### SSL Certificate

- **Vercel**: Automatic SSL
- **Netlify**: Automatic SSL
- **Custom Server**: Use Let's Encrypt (certbot)

---

## 📈 Performance Optimization

### Next.js Config

Update `next.config.ts`:

```typescript
const nextConfig = {
  images: {
    domains: ['yourdomain.com'],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
};
```

### Caching Strategy

```typescript
// For static assets
export const revalidate = 3600; // 1 hour
```

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Memory Issues
```bash
# Increase Node memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

---

## 📞 Support

For deployment issues:
- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel support: [vercel.com/support](https://vercel.com/support)
- Community: [GitHub Discussions](https://github.com/vercel/next.js/discussions)

---

**Recommended**: Deploy to Vercel for the easiest and fastest deployment experience with Next.js.
