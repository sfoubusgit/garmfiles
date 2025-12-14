# GitHub Pages Deployment Guide

## Quick Deployment Steps

### 1. Update Repository Name in Configuration

Before deploying, update the base path to match your GitHub repository name:

**Option A: Edit `vite.config.js`**
```js
// Change this line (around line 14):
return '/garmfiles/'  // Change 'garmfiles' to your repo name
```

**Option B: Use Environment Variable**
```bash
# For Windows PowerShell:
$env:GITHUB_PAGES_BASE="/your-repo-name/"; npm run build:gh-pages

# For Linux/Mac:
GITHUB_PAGES_BASE="/your-repo-name/" npm run build:gh-pages
```

**Option C: Update GitHub Actions Workflow**
Edit `.github/workflows/deploy.yml` and change:
```yaml
GITHUB_PAGES_BASE: '/garmfiles/'  # Change to your repo name
```

### 2. Deploy Using GitHub Actions (Recommended)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/your-repo-name.git
   git push -u origin main
   ```

2. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on every push to `main` branch

### 3. Manual Deployment

If you prefer manual deployment:

1. Build the project:
   ```bash
   npm install
   npm run build:gh-pages
   ```

2. Deploy the `dist` folder:
   - Option A: Use `gh-pages` package (see README.md)
   - Option B: Copy `dist` contents to `gh-pages` branch manually
   - Option C: Use GitHub Pages to serve from `dist` folder

## Important Notes

- **Repository Name**: If your repo is `username/garmfiles`, your site will be at `username.github.io/garmfiles/`
- **Root Domain**: If deploying to `username.github.io` (root), set base path to `/` in `vite.config.js`
- **Custom Domain**: If using a custom domain, set base path to `/`

## Troubleshooting

### Routes return 404
- Ensure `404.html` exists in `public` folder (✓ already included)
- Verify `.nojekyll` file exists (✓ already included)
- Check that base path matches your repository structure

### Assets not loading
- Rebuild after changing base path: `npm run build:gh-pages`
- Clear browser cache
- Check browser console for specific errors

### Build fails
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (requires 18+)
- Verify all source files are present

## File Structure for GitHub Pages

```
dist/                    # Build output (created by npm run build:gh-pages)
├── index.html          # Main HTML file
├── 404.html            # Required for React Router (copied from public/)
├── .nojekyll           # Prevents Jekyll processing (copied from root)
├── assets/             # JS, CSS, and other assets
└── ...
```

All necessary files are already configured in this project!

