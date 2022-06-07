// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// 1. import firestore
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDxflF_Y9OEAtnyAGW3RDh6rg5sb4Me7i8",
  authDomain: "taskmanager-c23ac.firebaseapp.com",
  projectId: "taskmanager-c23ac",
  storageBucket: "taskmanager-c23ac.appspot.com",
  messagingSenderId: "568324528102",
  appId: "1:568324528102:web:ae9d9c0d2aaf039d7ce827",
  measurementId: "G-YRB883236T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 2. Wrap the app with firestore
const db = getFirestore(app);
// 3. export it
export { db };