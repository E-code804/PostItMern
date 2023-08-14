import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PostContextProvider } from "./context/PostContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PostContextProvider>
      <App />
    </PostContextProvider>
  </React.StrictMode>
);
