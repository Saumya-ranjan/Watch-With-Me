import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyActH9e0bUrAl-0tHGmEghtr5I76iv93nw",
  authDomain: "watch-with-me-a1cfb.firebaseapp.com",
  projectId: "watch-with-me-a1cfb",
  storageBucket: "watch-with-me-a1cfb.appspot.com",
  messagingSenderId: "582461743221",
  appId: "1:582461743221:web:eed646d523b655ef97583c",
  measurementId: "G-510XWPL6R3"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);