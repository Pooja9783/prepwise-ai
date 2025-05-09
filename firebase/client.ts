import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB--XUoIO9jXiitIwqQEa1jIgY1E3iXD2g",
    authDomain: "ai-interview-agent-b603f.firebaseapp.com",
    projectId: "ai-interview-agent-b603f",
    storageBucket: "ai-interview-agent-b603f.firebasestorage.app",
    messagingSenderId: "78147443247",
    appId: "1:78147443247:web:4785402fb27780c88684da",
    measurementId: "G-SHR348P09H"
};

// Initialize Firebase
const app = !getApps?.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)