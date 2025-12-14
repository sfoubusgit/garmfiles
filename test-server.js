// Simple HTTP server to test GitHub Pages build locally
// Run: node test-server.js
// Then visit: http://localhost:8080/garmfiles/

const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8080;
const distDir = path.join(__dirname, 'dist');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // Remove query string
  let filePath = req.url.split('?')[0];
  
  // Handle base path
  if (filePath.startsWith('/garmfiles/')) {
    filePath = filePath.replace('/garmfiles', '');
  }
  
  // Default to index.html
  if (filePath === '/') {
    filePath = '/index.html';
  }

  const fullPath = path.join(distDir, filePath);

  fs.readFile(fullPath, (err, data) => {
    if (err) {
      // If file not found, try index.html (for SPA routing)
      if (filePath !== '/index.html') {
        const indexPath = path.join(distDir, 'index.html');
        fs.readFile(indexPath, (err, data) => {
          if (err) {
            res.writeHead(404);
            res.end('File not found');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
          }
        });
      } else {
        res.writeHead(404);
        res.end('File not found');
      }
    } else {
      const ext = path.extname(filePath);
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`\n✅ Test server running at http://localhost:${port}`);
  console.log(`📦 Testing GitHub Pages build with base path: /garmfiles/`);
  console.log(`🌐 Visit: http://localhost:${port}/garmfiles/\n`);
});

