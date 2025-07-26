// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUmmk8qkFFlgC6Gvej7WL5Zhpu1UtEQ-8",
  authDomain: "netflix-gpt-3ce0d.firebaseapp.com",
  projectId: "netflix-gpt-3ce0d",
  storageBucket: "netflix-gpt-3ce0d.firebasestorage.app",
  messagingSenderId: "872059528896",
  appId: "1:872059528896:web:1136cadd3f210bcbb96f25",
  measurementId: "G-LG0R5DZCDK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();