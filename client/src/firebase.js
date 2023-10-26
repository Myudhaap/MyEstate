// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4734c.firebaseapp.com",
  projectId: "mern-estate-4734c",
  storageBucket: "mern-estate-4734c.appspot.com",
  messagingSenderId: "463903939020",
  appId: "1:463903939020:web:30938d690bd2caed6ce569",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
