import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import SendMessage from "./SendMessage";
import SignOut from "./SignOut";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(25)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  console.log(messages);
  return (
    <div>
      <SignOut />
      {messages.map(({ id, text, photoUrl }) => {
        return <h1>{text}</h1>;
      })}
      <SendMessage />
    </div>
  );
};

export default Chat;
