import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import ChatProvider from "./Context/ChatContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChatProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChatProvider>
);
