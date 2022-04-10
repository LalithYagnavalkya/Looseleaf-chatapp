import logo from "./logo.svg";
import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { initializeApp } from "firebase/app";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyC9eDo1f-BwWn9-5g5UQXPM1ST2xPlXj78",
  authDomain: "looseleaftassignment.firebaseapp.com",
  projectId: "looseleaftassignment",
  storageBucket: "looseleaftassignment.appspot.com",
  messagingSenderId: "406940863270",
  appId: "1:406940863270:web:ebfc4e8cdc6f9509968fe7",
  measurementId: "G-4ZCMNJB6F5",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return <div className="App"></div>;
}

export default App;
