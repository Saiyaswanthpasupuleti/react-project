import { initializeApp } from "firebase/app";


export const firebaseConfig = {
  apiKey: "AIzaSyA9SRCuBpHunjes6WpWuh5vyk3fa3pnkzI",
  authDomain: "cricbuzz-credentials.firebaseapp.com",
  projectId: "cricbuzz-credentials",
  storageBucket: "cricbuzz-credentials.firebasestorage.app",
  messagingSenderId: "774902063993",
  appId: "1:774902063993:web:8d02cc496cd4931c5805a8",
  measurementId: "G-BZ97MFYZ00"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
