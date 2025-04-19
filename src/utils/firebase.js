// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANnW6ar5DBE7obnAb1qU1nH_5TvmXNUeo",
  authDomain: "gemflix-daaea.firebaseapp.com",
  projectId: "gemflix-daaea",
  storageBucket: "gemflix-daaea.firebasestorage.app",
  messagingSenderId: "38115312355",
  appId: "1:38115312355:web:af6a1e69bde96f530a3bd6",
  measurementId: "G-VPFP0V5SNH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
