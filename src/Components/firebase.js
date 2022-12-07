// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy-3T4FyHSTjhOALekbyxr5NsFtMLRDsw",
  authDomain: "ieee-sb-bsmrstu.firebaseapp.com",
  projectId: "ieee-sb-bsmrstu",
  storageBucket: "ieee-sb-bsmrstu.appspot.com",
  messagingSenderId: "1056511665383",
  appId: "1:1056511665383:web:c2b2bba47e467f5d4b6e42",
  measurementId: "G-8Z10EJ273T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);