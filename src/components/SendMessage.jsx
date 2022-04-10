import React, { useState } from "react";
import { auth, db } from "../firebase";
import styled from "styled-components";
import firebase from "firebase/compat/app";

const SendMessage = ({ scroll }) => {
  const [msg, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    if (msg !== "") {
      await db.collection("messages").add({
        text: msg,
        photoURL,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    scroll.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };
  return (
    <Wrapper>
      <form onSubmit={sendMessage}>
        <div className="input">
          <input
            value={msg}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            type="text"
          />
        </div>
        {/* <button type=""> */}
        <img
          onClick={sendMessage}
          src="https://www.svgrepo.com/show/258748/send.svg"
          alt=""
          srcset=""
        />
        {/* </button> */}
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 10%;
  display: flex;
  width: 100%;
  padding: 0.3rem 0 0rem 0;
  form {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    /* justify-content: space-around; */
  }
  button {
    width: fit-content;
    border-radius: 50%;
    /* margin-left: -4rem; */
  }
  img {
    height: 35px;
    width: 35px;
    margin-left: 0.3rem;
    cursor: pointer;
  }

  .input {
    display: flex;
    align-items: center;
    height: 1.9rem;
    border: 1px solid black;
    /* background-color: white; */
    background-color: #363636;
    border-radius: 30px;
    width: 95%;
    input {
      background-color: #363636;
      color: white;
      border: none;
      width: 90%;
      outline: none;
      margin-left: 10px;
    }
  }
`;
export default SendMessage;
