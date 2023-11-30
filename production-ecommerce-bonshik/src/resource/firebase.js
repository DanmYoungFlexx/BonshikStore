// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEUCC5pnW_jb1tftBEhPDkgnNJzqN-Mi4",
  authDomain: "bonshik-caf95.firebaseapp.com",
  projectId: "bonshik-caf95",
  storageBucket: "bonshik-caf95.appspot.com",
  messagingSenderId: "157498665486",
  appId: "1:157498665486:web:00dbcd0f3d817aec752a5f",
  measurementId: "G-2JRE9TY12G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
