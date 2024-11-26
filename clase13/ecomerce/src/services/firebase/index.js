// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQq7LssQbVuoo361V3rjvOWGzbGnj8s3I",
  authDomain: "comision-63375.firebaseapp.com",
  projectId: "comision-63375",
  storageBucket: "comision-63375.firebasestorage.app",
  messagingSenderId: "951844431022",
  appId: "1:951844431022:web:639fcd6a29ac01a846793f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
