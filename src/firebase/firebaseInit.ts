// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDea95HTAT5PJjpcMsDD7jy29R4wwCzVNE",
  authDomain: "whatmeal-c3b89.firebaseapp.com",
  projectId: "whatmeal-c3b89",
  storageBucket: "whatmeal-c3b89.appspot.com",
  messagingSenderId: "747126644367",
  appId: "1:747126644367:web:5f9cca45910dee3b1b1afa",
  measurementId: "G-VMNWJ4TEND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);