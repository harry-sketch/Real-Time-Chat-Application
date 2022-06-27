import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import socketIO from "socket.io-client";

// Assets
import CommonIcons from "../../assets/CommonIcons";

// Custom Hook
import useChat from "../../Hooks/useChat";
import Messages from "../Messages/Messages";

const Chat = () => {
  const { user } = useChat();
  const navigate = useNavigate();
  const ENDPOINT = "http://localhost:5000/";
  const socket = socketIO(ENDPOINT, { transports: ["websocket"] });

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });

    socket.emit("joined", { user });
  }, []);

  return (
    <div className="w-1/3 h-4/5 bg-slate-50 overflow-y-auto">
      <div className="bg-slate-300 w-full h-[13%] flex items-center justify-between font-semibold text-lg px-4">
        Messages
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          {CommonIcons.close}
        </div>
      </div>
      <div className="bg-blue-100 h-[73%] p-4">{/* <Messages /> */}</div>
      <div className="flex items-center h-[14%] bg-slate-300">
        <input
          type="text"
          className=" w-full ml-4 p-4 border-none outline-none rounded-lg"
        />
        <button className="mx-4 ">{CommonIcons.send}</button>
      </div>
    </div>
  );
};

export default Chat;
