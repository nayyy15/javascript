// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSy8j2hww7Uc4QvDfM1_SH5t03nRlvRegY",
  authDomain: "tds2-2025-autenticar.firebaseapp.com",
  projectId: "tds2-2025-autenticar",
  storageBucket: "tds2-2025-autenticar.appspot.com",
  messagingSenderId: "5108905861224",
  appId: "1:5108905861224:web:d9ebda2482e23b14",
  measurementId: "G-6V7IZLK898"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const autenticacao = getAuth(app);

