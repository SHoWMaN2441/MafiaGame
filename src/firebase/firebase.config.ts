import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAPlcENvc11dXeo-LCwTiDkOUvQlV1--sY",
  authDomain: "mafia2game.firebaseapp.com",
  projectId: "mafia2game",
  storageBucket: "mafia2game.firebasestorage.app",
  messagingSenderId: "623190816943",
  appId: "1:623190816943:web:3830b8f4928ae5a7527c5a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
