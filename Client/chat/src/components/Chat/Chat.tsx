import React from "react";
import useChat from "../../Hooks/useChat";

const Chat = () => {
  const { user } = useChat();
  return <div>✔, {user}</div>;
};

export default Chat;
