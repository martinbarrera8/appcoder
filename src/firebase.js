import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyB0XtDTBiBUz5iVL7XpA385WsHG2zcIl8I",
  authDomain: "apped-2d675.firebaseapp.com",
  projectId: "apped-2d675",
  storageBucket: "apped-2d675.appspot.com",
  messagingSenderId: "245005307581",
  appId: "1:245005307581:web:5434140d35bbc02730f1d4"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);