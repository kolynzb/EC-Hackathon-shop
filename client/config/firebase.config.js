// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsdBZbuse7MO43xqEocWvdf1i3MDgPMHk",
  authDomain: "native-kla.firebaseapp.com",
  projectId: "native-kla",
  storageBucket: "native-kla.appspot.com",
  messagingSenderId: "787261734990",
  appId: "1:787261734990:web:73b73fed93d9c9d16e831f",
  measurementId: "G-J9F0QBTWSM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
