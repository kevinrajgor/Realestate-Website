// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUWA0dt3Sep4JF1lHu4juqklnioFbmjag",
  authDomain: "real-estate-website-8c12a.firebaseapp.com",
  projectId: "real-estate-website-8c12a",
  storageBucket: "real-estate-website-8c12a.appspot.com",
  messagingSenderId: "366790947332",
  appId: "1:366790947332:web:c12e7c4bb6cb4ab931bb51",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
