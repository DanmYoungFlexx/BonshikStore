import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDsE-MyeFwHt7hLtqJPwdTefGl0drizdA0",
  authDomain: "bonshikstore.firebaseapp.com",
  projectId: "bonshikstore",
  storageBucket: "bonshikstore.appspot.com",
  messagingSenderId: "485270774307",
  appId: "1:485270774307:web:f21db48737a8f1bcd28796",
  measurementId: "G-WF0HLTGMEJ"
};

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();
const analytics = getAnalytics();

export { auth, db, storage, analytics };
