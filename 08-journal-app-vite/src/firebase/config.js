// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_apiKey,
	authDomain: import.meta.env.VITE_FIREBASE_authDomain,
	projectId: import.meta.env.VITE_FIREBASE_projectId,
	storageBucket: import.meta.env.VITE_FIREBASE_storageBucket,
	messagingSenderId: import.meta.env.VITE_FIREBASE_messagingSenderId,
	appId: import.meta.env.VITE_FIREBASE_appId
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
// Firebase authentication
export const FirebaseAuth = getAuth(FirebaseApp)
// DB connection
export const FirebaseDB = getFirestore(FirebaseApp);