import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserContextProvider } from "./context/userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="20926891972-c216blddp1en3cpr7dqv1n59v9dtane1.apps.googleusercontent.com">
    <React.StrictMode>
      <BrowserRouter>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
