# Debugging 404 Errors

## Common 404 Causes

### 1. Testing Locally Without Base Path

**Problem:** When you run `npm run preview:dist`, it serves from root (`/`), but your assets are at `/garmfiles/assets/...`

**Solution:** Use the updated preview command:
```bash
npm run preview:dist
```
Then visit: `http://localhost:4173/garmfiles/` (note the `/garmfiles/` at the end)

### 2. Missing vite.svg Icon

The icon path `/vite.svg` might not exist. This is usually harmless but can cause a 404.

**Solution:** Either:
- Remove the icon link from `index.html`
- Or create a `public/vite.svg` file

### 3. GitHub Pages Deployment

If you're seeing 404 on GitHub Pages:

1. **Check the URL:**
   - ✅ Correct: `https://sfoubusgit.github.io/garmfiles/`
   - ❌ Wrong: `https://sfoubusgit.github.io/` (missing `/garmfiles/`)

2. **Check Browser Console:**
   - Press F12 → Console tab
   - Look for which specific file is 404:
     - `index-BvbsTIHy.js` = JavaScript file
     - `index-Dg6I_jM2.css` = CSS file
     - `vite.svg` = Icon (usually harmless)

3. **Verify Deployment:**
   - Go to Actions tab → Check if deployment succeeded
   - The `dist/` folder should be deployed correctly

## Quick Test

To test locally with the correct base path:

```bash
# Build
npm run build:gh-pages

# Preview with base path
npm run preview:dist
# Then visit: http://localhost:4173/garmfiles/
```

## Check What's Failing

In browser console (F12), you'll see something like:
```
Failed to load resource: the server responded with a status of 404 ()
/garmfiles/assets/index-BvbsTIHy.js
```

This tells you:
- **Which file** is failing (JS, CSS, or icon)
- **What path** it's trying to load from

If it says `/assets/...` (without `/garmfiles/`), the base path is wrong.
If it says `/garmfiles/assets/...` but still 404, the file might not be deployed.

