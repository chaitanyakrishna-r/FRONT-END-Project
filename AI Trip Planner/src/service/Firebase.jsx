// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {  
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "ai-trip-planner-fddcf.firebaseapp.com",
  projectId: "ai-trip-planner-fddcf",
  storageBucket: "ai-trip-planner-fddcf.firebasestorage.app",
  messagingSenderId: "468167305109",
  appId: "1:468167305109:web:84f598fd8cf954660bb89c",
  measurementId: "G-E5FCY61TZE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);