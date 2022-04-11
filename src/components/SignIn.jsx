import styled from "styled-components";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <SingInPage>
      <img
        className="
      logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
        alt=""
        srcset=""
      />
      <button className="sign-in" onClick={signInWithGoogle}>
        <img src="https://img.icons8.com/color/344/google-logo.png" alt="" />
        <h3>Sign in with Google</h3>
      </button>
    </SingInPage>
  );
};
const SingInPage = styled.div`
  background-color: azure;
  height: 100vh;
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
    width: 14rem;
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
  @media (max-width: 800px) {
    .logo {
      height: 9rem;
    }
    button {
      /* height: 3rem; */
    }
  }
  }
  @media (max-width: 430px) {
    .logo {
      height: 7rem;
    }
    button {
      /* height: 3rem; */
    }
  }
`;

export default SignIn;
