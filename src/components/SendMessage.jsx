import React, { useState } from "react";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";

const SendMessage = () => {
  const [msg, setMessage] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  };
  return (
    <div>
      <form onSubmit={sendMessage}>
        <input
          value={msg}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          type="text"
        />
        <button type="">Send</button>
      </form>
    </div>
  );
};

export default SendMessage;
