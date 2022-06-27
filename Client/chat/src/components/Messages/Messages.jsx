import React from "react";

const Messages = ({ user }) => {
  const isRight =
    "bg-[#3B414A] w-2/4 p-3 text-white rounded-tr-2xl rounded-br-2xl rounded-tl-md rounded-bl-2xl";
  return (
    <div className={`flex  flex-col ${user ? "items-start" : "items-end"}`}>
      <div>user</div>
      <div
        className={`${
          user
            ? isRight
            : "bg-slate-50 w-2/4 p-3  rounded-tr-md rounded-br-2xl rounded-tl-2xl rounded-bl-2xl text-black text-base font-normal"
        }`}
      >
        Messages
      </div>
    </div>
  );
};

export default Messages;
