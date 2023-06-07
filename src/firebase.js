// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMMay212nB1aieUofTVXzTQelAaiEPhCI",
  authDomain: "scrimba-react-notes-1c2a0.firebaseapp.com",
  projectId: "scrimba-react-notes-1c2a0",
  storageBucket: "scrimba-react-notes-1c2a0.appspot.com",
  messagingSenderId: "180469964621",
  appId: "1:180469964621:web:2fc75b98a6e7e75f20e104"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const notesCollection = collection(db, "notes")