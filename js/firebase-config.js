// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4DJEwwIXdnyPWjeRh9APwhhG3Av82lgY",
  authDomain: "findmyseat-5880d.firebaseapp.com",
  projectId: "findmyseat-5880d",
  storageBucket: "findmyseat-5880d.firebasestorage.app",
  messagingSenderId: "287696774608",
  appId: "1:287696774608:web:f5a179f728a598ab88c5d5",
  measurementId: "G-HL11120P8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);