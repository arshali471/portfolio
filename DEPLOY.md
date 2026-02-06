# 🚀 Free Deployment Guide

## Deploy to Vercel (Recommended - Easiest)

1. **Create Vercel Account**: Go to [vercel.com](https://vercel.com) and sign up with GitHub

2. **Import Project**:
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure:
     - Framework Preset: `Vite`
     - Root Directory: `frontend`
     - Build Command: `npm run build`
     - Output Directory: `dist`

3. **Deploy**: Click Deploy - Done in 2 minutes!

## Deploy to Netlify (Alternative)

1. **Create Netlify Account**: Go to [netlify.com](https://netlify.com) and sign up

2. **Deploy**:
   - Drag & drop the `frontend/dist` folder after building
   - Or connect GitHub repo
   - Build settings:
     - Base directory: `frontend`
     - Build command: `npm run build`
     - Publish directory: `frontend/dist`

## Manual Build & Deploy

```bash
cd frontend
npm install
npm run build
```

Then upload `frontend/dist` folder to any static hosting:

- GitHub Pages
- Cloudflare Pages
- Firebase Hosting
- Surge.sh

---

**Your portfolio will be live at a free URL like:**

- `your-username.vercel.app`
- `your-portfolio.netlify.app`
