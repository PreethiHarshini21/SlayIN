import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYidkPBndbYW67v7ioxh4jMKbVa92ObUQ",
  authDomain: "chat-1e15e.firebaseapp.com",
  projectId: "chat-1e15e",
  storageBucket: "chat-1e15e.appspot.com",
  messagingSenderId: "610868998296",
  appId: "1:610868998296:web:f9730fbbaa4a8b9e76a0ed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
