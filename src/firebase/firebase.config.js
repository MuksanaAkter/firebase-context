// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT0Q3oJHdcIgc8l-0ypoDXyo29zoyLNQE",
  authDomain: "auth-context-firebase-ea1f8.firebaseapp.com",
  projectId: "auth-context-firebase-ea1f8",
  storageBucket: "auth-context-firebase-ea1f8.appspot.com",
  messagingSenderId: "125981388062",
  appId: "1:125981388062:web:b7d99c0501c4358fa66d0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;