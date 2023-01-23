import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCcp8cE0YDbgS-cUZy_HS2yno1hDYu08TM",
  authDomain: "challenge---greydive.firebaseapp.com",
  projectId: "challenge---greydive",
  storageBucket: "challenge---greydive.appspot.com",
  messagingSenderId: "838604524629",
  appId: "1:838604524629:web:1cfa0854b33f4b34cc98dc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;