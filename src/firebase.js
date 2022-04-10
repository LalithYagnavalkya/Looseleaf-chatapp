import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC9eDo1f-BwWn9-5g5UQXPM1ST2xPlXj78",
  authDomain: "looseleaftassignment.firebaseapp.com",
  projectId: "looseleaftassignment",
  storageBucket: "looseleaftassignment.appspot.com",
  messagingSenderId: "406940863270",
  appId: "1:406940863270:web:ebfc4e8cdc6f9509968fe7",
  measurementId: "G-4ZCMNJB6F5",
});

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };
