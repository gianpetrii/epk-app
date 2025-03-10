// This script helps with Firebase initialization and login
// Run this script with: node firebase-init.js

const { execSync } = require('child_process');

console.log('Starting Firebase initialization...');

try {
  // Login to Firebase
  console.log('Logging in to Firebase...');
  execSync('firebase login', { stdio: 'inherit' });
  
  // Initialize Firebase project
  console.log('Initializing Firebase project...');
  execSync('firebase init hosting', { stdio: 'inherit' });
  
  console.log('Firebase initialization completed successfully!');
  console.log('');
  console.log('To deploy your app, run:');
  console.log('npm run deploy');
} catch (error) {
  console.error('Error during Firebase initialization:', error.message);
  process.exit(1);
} 