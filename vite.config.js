import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { join } from 'path'

// GitHub Pages base path configuration
// For root domain: set to '/'
// For subdirectory (e.g., username.github.io/repo-name): set to '/repo-name/'
// You can override this with the GITHUB_PAGES_BASE environment variable
const getBasePath = () => {
  if (process.env.GITHUB_PAGES_BASE) {
    return process.env.GITHUB_PAGES_BASE
  }
  if (process.env.GITHUB_PAGES === 'true') {
    // Default to '/garmfiles/' - change this to match your repository name
    return '/garmfiles/'
  }
  return '/'
}

// Plugin to copy index.html to 404.html for GitHub Pages SPA routing
const copy404Plugin = () => {
  return {
    name: 'copy-404',
    closeBundle() {
      const outDir = 'dist'
      const indexPath = join(outDir, 'index.html')
      const notFoundPath = join(outDir, '404.html')
      try {
        copyFileSync(indexPath, notFoundPath)
        console.log('✓ Copied index.html to 404.html for GitHub Pages')
      } catch (err) {
        console.warn('Could not copy index.html to 404.html:', err)
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copy404Plugin()],
  base: getBasePath(),
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})

