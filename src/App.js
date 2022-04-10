import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";

import SignIn from "./components/SignIn";
import Chat from "./components/Chat";

function App() {
  const [user] = useAuthState(auth);

  if (!user) {
    return (
      <Wrapper>
        <div className="container">
          <SignIn />
        </div>
      </Wrapper>
    );
  }
  return (
    <Page>
      <Chat />
    </Page>
  );
}

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: antiquewhite;
  height: 100vh;
`;
const Page = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: azure;

  height: 100vh;
`;
export default App;
