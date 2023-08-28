// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACcAtR8_ghV3ciAwRHbPXJs6yjX4JosTs",
  authDomain: "turbotrim-6df9e.firebaseapp.com",
  projectId: "turbotrim-6df9e",
  storageBucket: "turbotrim-6df9e.appspot.com",
  messagingSenderId: "423505569884",
  appId: "1:423505569884:web:181d1cd61463baebcd9e99",
  measurementId: "G-G1503EQRMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseDB = getFirestore(app);
export const linkRef = collection(firebaseDB, "Link");
