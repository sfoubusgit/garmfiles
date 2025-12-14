# Testing Locally with Base Path

## Simple Method (Recommended)

Since testing with `/garmfiles/` base path locally is complex, here's the easiest way:

### Option 1: Test Without Base Path (Quick Check)

1. Build without base path:
   ```bash
   npm run build
   ```

2. Preview:
   ```bash
   npm run preview:dist
   ```

3. Visit: `http://localhost:4173/`

This will show if the app works (ignoring base path issues).

### Option 2: Test on GitHub Pages (Best)

The **best way** to test is to deploy to GitHub Pages:

1. Push your code to GitHub
2. Wait for GitHub Actions to deploy
3. Visit: `https://sfoubusgit.github.io/garmfiles/`

This is the actual environment, so it's the most accurate test.

### Option 3: Use Python Server (If Python Installed)

```bash
# Build first
npm run build:gh-pages

# Start Python server
cd dist
python -m http.server 8080
```

Then visit: `http://localhost:8080/garmfiles/`

Note: This might not work perfectly because Python's server doesn't handle the base path rewrite.

## The Real Solution

**The 404 error you're seeing is likely happening on GitHub Pages, not locally.**

To fix it:

1. **Make sure you're visiting the correct URL:**
   - ✅ `https://sfoubusgit.github.io/garmfiles/`
   - ❌ `https://sfoubusgit.github.io/` (wrong!)

2. **Check browser console (F12)** to see which file is 404

3. **Verify deployment worked:**
   - Go to: https://github.com/sfoubusgit/garmfiles/actions
   - Check if the workflow succeeded

4. **If still 404, the issue might be:**
   - GitHub Pages not configured to use GitHub Actions
   - Assets not being deployed correctly
   - Base path mismatch

## Quick Diagnostic

Run this and check the output:
```bash
npm run build:gh-pages
ls dist/assets/
```

You should see `.js` and `.css` files. If you do, the build is correct and the issue is with deployment or URL access.

