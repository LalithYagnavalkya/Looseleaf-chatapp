import React from "react";

const ChatMessage = (props) => {
  const { text, uid } = props.message;

  //   const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={``}>
        {/* <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        /> */}
        <p>{text}</p>
      </div>
    </>
  );
};

export default ChatMessage;
