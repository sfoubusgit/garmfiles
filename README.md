# Garmfiles - GitHub Pages Deployment

This project is configured and ready for deployment to GitHub Pages.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Local Development
```bash
npm install
npm run dev
```

### Build for GitHub Pages
```bash
npm install
npm run build:gh-pages
```

The built files will be in the `dist` folder, ready to be deployed.

## 📦 Deployment Options

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

1. Push this code to a GitHub repository
2. Go to your repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy when you push to `main` or `master` branch

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
- Build the project with the correct base path
- Deploy to GitHub Pages automatically

**Important:** Update the `base` path in `vite.config.js` to match your repository name:
- If your repo is `username/garmfiles`, the base should be `/garmfiles/`
- If deploying to a custom domain or root, set base to `/`

### Option 2: Manual Deployment

1. Build the project:
   ```bash
   npm run build:gh-pages
   ```

2. Copy the contents of the `dist` folder to your repository's `gh-pages` branch, or use GitHub Pages to serve from the `dist` folder.

3. If deploying to a subdirectory (e.g., `username.github.io/repo-name`):
   - Update the `base` in `vite.config.js` to match your repository name
   - Rebuild: `npm run build:gh-pages`

### Option 3: Using gh-pages package

You can also use the `gh-pages` package for easier deployment:

```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:
```json
"deploy": "npm run build:gh-pages && gh-pages -d dist"
```

Then run:
```bash
npm run deploy
```

## ⚙️ Configuration

### Base Path Configuration

The project is configured to work with GitHub Pages subdirectory deployment. To change the base path:

1. Edit `vite.config.js`
2. Update the `base` property:
   ```js
   base: '/your-repo-name/'  // For subdirectory
   // or
   base: '/'  // For root domain
   ```

### React Router

This project uses React Router with `BrowserRouter`. The `404.html` file in the `public` folder ensures that all routes work correctly on GitHub Pages by redirecting to `index.html`.

## 📁 Project Structure

```
github_deploy_ready/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── 404.html                # Required for SPA routing on GitHub Pages
├── src/                        # Source files
├── .nojekyll                   # Prevents Jekyll processing
├── index.html
├── package.json
├── vite.config.js              # Vite configuration with GitHub Pages base path
└── README.md
```

## 🔧 Troubleshooting

### Routes not working (404 errors)
- Ensure `404.html` exists in the `public` folder (it will be copied to `dist` during build)
- Verify the `base` path in `vite.config.js` matches your repository structure
- Make sure `.nojekyll` file is present in the root

### Assets not loading
- Check that the `base` path in `vite.config.js` is correct
- Rebuild the project after changing the base path

### Build fails
- Make sure all dependencies are installed: `npm install`
- Check Node.js version (requires 18+)

## 📝 Notes

- The `.nojekyll` file prevents GitHub Pages from processing the site with Jekyll
- The `404.html` file ensures React Router works correctly with GitHub Pages
- The build script uses `GITHUB_PAGES=true` environment variable to set the correct base path

"# garmfiles" 
