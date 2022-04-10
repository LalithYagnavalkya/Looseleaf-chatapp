import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import SendMessage from "./SendMessage";
import styled from "styled-components";
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
    <Wrapper>
      <div className="top">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
          alt=""
        />
        <SignOut />
      </div>
      <div className="container">
        <div className="texts">
          {messages.map(({ id, text, photoURL, uid }) => {
            return (
              <div key={id} className="message user">
                <img src={photoURL} alt="" />
                <p>{text}</p>
              </div>
            );
          })}
        </div>
        <SendMessage />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  background-color: aqua;
  width: 80%;
  height: 90vh;

  margin: 0 auto;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    min-height: 70px;
    img {
      /* height: 40px; */
      width: 200px;
    }
    background-color: aquamarine;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: hidden;
    height: 90%;
    background-color: #db19b1;
    padding: 0 1rem;
    .texts {
      overflow-y: scroll;
      overflow-x: hidden;
      padding: 1rem 0;
      .message {
        display: flex;
        padding: 0.3rem;
        margin-top: 8px;
        background-color: yellow;
        width: 100%;
        p {
          margin: auto 7px;
        }
        img {
          border-radius: 50%;
          height: 60px;
        }
      }
      .user {
      }
    }
    h1 {
      margin-top: 0%;
    }
  }
  @media (max-width: 440px) {
    .top {
      img {
        width: 100px;
      }
    }
  }
`;

export default Chat;
