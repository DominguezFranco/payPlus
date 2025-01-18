import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCjJ2anZXWiI62KwtJMmZKQQaKs3VFB6ww",
    authDomain: "payplus-423ed.firebaseapp.com",
    projectId: "payplus-423ed",
    storageBucket: "payplus-423ed.firebasestorage.app",
    messagingSenderId: "4164733276",
    appId: "1:4164733276:web:7a6716d1900d9018779999"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export default db;