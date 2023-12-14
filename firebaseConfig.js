// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-k3tw8A85P3GdhghRRmHlhc6wFPDkwMw",
  authDomain: "expense-tracker-cf8d7.firebaseapp.com",
  projectId: "expense-tracker-cf8d7",
  storageBucket: "expense-tracker-cf8d7.appspot.com",
  messagingSenderId: "1077221514596",
  appId: "1:1077221514596:web:30d8e8ff1dce5a5bf3ee71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
