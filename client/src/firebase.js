// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // @ts-ignore
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-2f647.firebaseapp.com",
  projectId: "blog-app-2f647",
  storageBucket: "blog-app-2f647.firebasestorage.app",
  messagingSenderId: "850789235717",
  appId: "1:850789235717:web:363c0c23a632db6792b06c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);