

import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';

import { AppComponent } from './src/app.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvV59doVUuYIDJKl7sa2XpApqsxHY5b24",
  authDomain: "portafolio-ac55a.firebaseapp.com",
  projectId: "portafolio-ac55a",
  storageBucket: "portafolio-ac55a.firebasestorage.app",
  messagingSenderId: "930461997234",
  appId: "1:930461997234:web:895a92760601fb0619d1ab",
  measurementId: "G-BBFPY1ZF99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// NOTE: This Firebase initialization is placed directly in index.tsx
// for simplicity due to the project's current structure (lack of environment files).
// For a more robust solution, consider creating `src/environments/environment.ts`
// and `src/environments/environment.prod.ts` files to manage configurations.

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
  ],
}).catch(err => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.
