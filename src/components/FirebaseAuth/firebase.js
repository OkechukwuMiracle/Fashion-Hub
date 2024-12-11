// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHMlUj8yxvkbbIW480GEahPT0KyeygddY",
  authDomain: "fashionhub-auth.firebaseapp.com",
  projectId: "fashionhub-auth",
  storageBucket: "fashionhub-auth.firebasestorage.app",
  messagingSenderId: "267432755623",
  appId: "1:267432755623:web:4c8ecf736f6927f00f7682"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;