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
  button {
    padding: 0.5rem 1rem;
    background-color: #161612;
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
  @media (max-width: 440px) {
    button {
      height: 30px;
    }
  }
`;

export default SignOut;
