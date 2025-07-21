# Asik Umar T K – Developer Portfolio

A fast, minimal, and responsive developer portfolio built with **React + TypeScript**, styled with **Tailwind CSS**, animated with **Framer Motion**. Easily deployable to **Vercel** or **GitHub Pages**.

## Features
- Developer-focused, clean UI
- Responsive and minimal design
- Smooth section scroll and simple animations
- Light/Dark mode toggle
- Project cards with tech stack
- Skills, About, and Contact sections

## Getting Started

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm start
```

### Build for production
```bash
npm run build
```

## Deployment

### Vercel
1. Push this repo to GitHub.
2. Import to [Vercel](https://vercel.com/) and deploy (no extra config needed).

### GitHub Pages
1. Install gh-pages:
   ```bash
   npm install --save gh-pages
   ```
2. Add to `package.json`:
   ```json
   "homepage": "https://<your-github-username>.github.io/<repo-name>"
   ```
3. Add scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```

## Tech Stack
- React + TypeScript
- Tailwind CSS
- Framer Motion

---

**Customize your info in `/src/data/` files.**
