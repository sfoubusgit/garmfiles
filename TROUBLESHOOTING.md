# Troubleshooting Blank Page Issues

## Common Causes and Solutions

### 1. Opening `index.html` Directly from File System

**Problem:** If you double-click `dist/index.html` to open it, you'll see a blank page because the paths are absolute and need a web server.

**Solution:** Always use a local server:
```bash
npm run preview
```
This will start a local server at `http://localhost:4173`

### 2. Wrong Base Path on GitHub Pages

**Problem:** If your repository name doesn't match the base path in `vite.config.js`, assets won't load.

**Solution:** 
1. Check your GitHub repository name
2. Update `vite.config.js` line 16: Change `/garmfiles/` to match your repo name
3. Update `.github/workflows/deploy.yml` line 42: Change `GITHUB_PAGES_BASE: '/garmfiles/'` to match

**Example:**
- Repository: `myusername/myshop`
- Base path should be: `/myshop/`
- Update both files to use `/myshop/`

### 3. Check Browser Console for Errors

1. Open your site
2. Press `F12` to open Developer Tools
3. Go to the **Console** tab
4. Look for red error messages

Common errors:
- `Failed to load resource` - Base path is wrong
- `Cannot find module` - Build issue
- `Uncaught TypeError` - JavaScript error

### 4. Verify Build Output

After building, check that these files exist in `dist/`:
- `index.html`
- `404.html`
- `assets/` folder with `.js` and `.css` files
- `.nojekyll` file

### 5. Test Locally Before Deploying

```bash
# Build for GitHub Pages
npm run build:gh-pages

# Preview the build
npm run preview:dist
```

Visit `http://localhost:4173` - if it works here, it should work on GitHub Pages (with correct base path).

### 6. Clear Browser Cache

Sometimes old cached files cause issues:
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Or clear browser cache completely

### 7. Check GitHub Pages Settings

1. Go to your repository → Settings → Pages
2. Make sure **Source** is set to **GitHub Actions** (not a branch)
3. Check the deployment URL matches your repository name

## Quick Diagnostic Steps

1. **Build the project:**
   ```bash
   npm run build:gh-pages
   ```

2. **Check the built files:**
   ```bash
   ls dist/
   ```
   Should see: `index.html`, `404.html`, `assets/`, `.nojekyll`

3. **Test locally:**
   ```bash
   npm run preview:dist
   ```

4. **Check browser console** (F12) for errors

5. **Verify base path** matches your repository name

## Still Having Issues?

1. Check the browser console for specific error messages
2. Verify your repository name matches the base path
3. Make sure you're using `npm run preview` or a web server, not opening the file directly
4. Check that all dependencies are installed: `npm install`

