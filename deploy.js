const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Simple build and deploy script
try {
  console.log('Building project...');
  
  // Create dist directory if it doesn't exist
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }
  
  // Copy files to dist
  const filesToCopy = ['index.html', 'src', 'assets'];
  filesToCopy.forEach(file => {
    if (fs.existsSync(file)) {
      execSync(`xcopy "${file}" "dist\\${file}" /E /I /Y`, { stdio: 'inherit' });
    }
  });
  
  console.log('Deploying to GitHub Pages...');
  execSync('npx gh-pages -d dist', { stdio: 'inherit' });
  
  console.log('✅ Deployed successfully!');
} catch (error) {
  console.error('❌ Deploy failed:', error.message);
}