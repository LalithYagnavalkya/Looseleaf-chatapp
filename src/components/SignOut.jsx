import React from "react";
import { auth } from "../firebase.js";
import styled from "styled-components";
function SignOut() {
  return (
    <SingOutPage>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </SingOutPage>
  );
}

const SingOutPage = styled.div`
  position: absolute;
  right: 0;

  background-color: azure;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
    margin-top: -8rem;
    margin-bottom: 5rem;
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #222212;
    border-radius: 10px;
    color: white;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      height: 30px;
      width: 30px;
    }
  }
`;

export default SignOut;
