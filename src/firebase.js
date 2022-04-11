import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "looseleaftassignment.firebaseapp.com",
  projectId: "looseleaftassignment",
  storageBucket: "looseleaftassignment.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
});

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };
