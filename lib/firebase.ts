// Import the functions you need from the SDKs you need
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
// Analytics is only available in browser environment
import { getAnalytics, Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
let firebaseApp: FirebaseApp | null = null;
let analytics: Analytics | null = null;

// Only initialize Firebase if we're in the browser and it hasn't been initialized yet
if (typeof window !== 'undefined' && !getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
  
  // Only initialize analytics in the browser
  try {
    analytics = getAnalytics(firebaseApp);
  } catch (error) {
    console.error('Analytics failed to initialize:', error);
  }
}

export { firebaseApp, analytics }; 