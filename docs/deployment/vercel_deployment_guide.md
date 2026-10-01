# SMART PRINT HUB — Vercel Production Deployment Guide

This guide walks you through deploying **SMART PRINT HUB** to Vercel with zero friction.

---

## 1. Prerequisites Check

Before deploying to Vercel, ensure you have:
1. A **GitHub** account (to push this repository).
2. A **Vercel** account (sign in with GitHub at [vercel.com](https://vercel.com)).
3. A cloud-accessible database connection string (since Vercel's serverless functions cannot reach your personal computer's `localhost:3306`).

---

## 2. Cloud Database Options (Free Tiers)

Your application is powered by Prisma ORM and is fully compatible with MySQL or PostgreSQL. Choose any of these free cloud databases for Vercel:

| Provider | Type | Free Tier | Setup Time | Notes |
|---|---|---|---|---|
| **Aiven** | MySQL | 5 GB Free | 2 minutes | Direct drop-in for MySQL (`mysql://...`) |
| **Railway** | MySQL | $5 free credit | 2 minutes | One-click MySQL deployment |
| **Neon** | PostgreSQL | 0.5 GB Free | 1 minute | Serverless Postgres, ultra-fast on Vercel |
| **Supabase** | PostgreSQL | 500 MB Free | 2 minutes | Full Postgres with connection pooling |

### Testing Local MySQL with Vercel (Using ngrok tunnel)
If you want Vercel to temporarily connect to your current local MySQL on `localhost:3306`:
```powershell
# In a terminal, run ngrok TCP tunnel to port 3306
ngrok tcp 3306
# Forwarding: tcp://0.tcp.ngrok.io:12345
# Set your Vercel DATABASE_URL to:
# mysql://root:Semester7!@0.tcp.ngrok.io:12345/xerox
```

---

## 3. Required Environment Variables on Vercel

When importing your project on Vercel, navigate to **Settings > Environment Variables** and add:

```env
# 1. Database Connection
DATABASE_URL="mysql://username:password@cloud-host:3306/xerox?sslaccept=strict"

# 2. Authentication & Security
JWT_SECRET="smart-print-hub-super-secure-production-jwt-key-32-chars-2026"
JWT_EXPIRES_IN="7d"

# 3. Application Domain
NEXT_PUBLIC_APP_URL="https://your-smart-print-hub.vercel.app"
NODE_ENV="production"

# 4. Storage Driver (for Vercel serverless functions, use S3/Cloudflare R2)
STORAGE_DRIVER="s3"
S3_ENDPOINT="https://<account-id>.r2.cloudflarestorage.com"
S3_BUCKET="smart-print-hub-documents"
S3_ACCESS_KEY="your-r2-access-key"
S3_SECRET_KEY="your-r2-secret-key"
S3_REGION="auto"
```

> **Note on Storage on Vercel:**  
> Vercel functions run in ephemeral serverless containers with read-only filesystems (except `/tmp`). For cloud uploads, free S3-compatible storage like **Cloudflare R2** (10 GB free forever with zero egress fees) or AWS S3 is recommended.

---

## 4. Step-by-Step Vercel Deployment

### Step 1: Initialize and Push to GitHub
In your local project folder:
```powershell
git add .
git commit -m "feat: smart print hub m3 with mysql & vercel configuration"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/smart-print-hub.git
git push -u origin main
```

### Step 2: Import into Vercel
1. Go to [vercel.com/new](https://vercel.com/new).
2. Select your `smart-print-hub` repository.
3. Framework Preset: **Next.js** (detected automatically).
4. Root Directory: `./`
5. Build and Output Settings:
   - Build Command: `prisma generate && next build` (configured automatically via `vercel.json`).
6. In **Environment Variables**, paste the variables from Section 3.
7. Click **Deploy**.

### Step 3: Run Database Migrations on Cloud DB
Once deployed, run migrations/push on your cloud database from your computer:
```powershell
# Temporarily set cloud DATABASE_URL in your local .env or pass directly:
$env:DATABASE_URL="mysql://username:password@cloud-host:3306/xerox"
npx prisma db push
node prisma/seed.js
```

---

## 5. Built-in Vercel Optimizations in this Codebase

1. **`vercel.json` Included:** Preconfigured build command: `prisma generate && next build`.
2. **`package.json` Postinstall:** Automatic `prisma generate` during dependency resolution.
3. **Custom Prisma Output:** Client is generated to `src/generated/prisma` to prevent binary lock collisions.
4. **Dynamic API Routes:** Critical auth, health, and upload routes are explicitly configured with `export const dynamic = 'force-dynamic'` to prevent stale static caching on Vercel edge nodes.
