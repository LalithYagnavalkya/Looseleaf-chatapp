import React, { useEffect, useRef, useState } from "react";
import { auth, db } from "../firebase";
import SendMessage from "./SendMessage";
import styled from "styled-components";
import SignOut from "./SignOut";

const Chat = () => {
  const scroll = useRef();

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
              <div className="">
                <div
                  key={id}
                  className={`message ${
                    uid === auth.currentUser.uid ? "sent" : "received"
                  }`}
                >
                  <img src={photoURL} alt="" />
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
          <div ref={scroll}></div>
        </div>
        <SendMessage scroll={scroll} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  background-color: #a1ecec;

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
    background-color: #91d3bd;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: hidden;
    height: 90%;
    padding: 0 1rem;
    .texts {
      overflow-y: scroll;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      /* margin-top: 20px; */
      /* padding: 1rem 0; */
      .message {
        display: flex;
        align-items: center;
        padding: 20px 10px 0 20px;
        margin: 20px;
        border-radius: 3000px;
        box-shadow: 0 0 10px rgb(164, 164, 164);
        p {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          font-weight: 500;
          font-size: 25px;
          margin-top: 10px;
          margin-left: 10px;
          margin-right: 10px;
          overflow-wrap: break-word;
        }
        img {
          border-radius: 50%;
          height: 45px;
          margin-top: -20px;
          /* margin-bottom: 20px; */
        }
      }
      .received {
        border: 1px solid lightgray;
        background-color: #fafafa;
        border-top-left-radius: 1000px;
        float: left;
        /* img {
          margin-right: 1rem;
        } */
      }
      .sent {
        background-color: #395dff;
        color: white;
        border-top-right-radius: 1000px;
        flex-direction: row-reverse;
        padding: 20px 20px 0 10px;
        text-align: end;
        float: right;
      }
    }
    h1 {
      margin-top: 0%;
    }
  }

  @media (max-width: 500px) {
    p {
      font-size: 20px !important;
    }
    .sent {
      padding: 7px 7px 0 7px !important;
    }
    .received {
      padding: 7px 7px 0 7px !important;
    }
    img {
      height: 30px !important;
      margin-top: -7px !important;
    }
    .top {
      img {
        width: 100px;
      }
    }
  }
  /* @media (max-width: 775px) {
    .container {
      .message {
        .texts {
          p {
            font-size: 20px;
          }
        }
        .sent {
          padding: 10px 10px 0 10px;
        }
        .received {
          padding: 10px 10px 0 10px;
        }
        img {
          height: 35px;
          margin-top: -10px;
        }
      }
    }
  } */
`;

export default Chat;
