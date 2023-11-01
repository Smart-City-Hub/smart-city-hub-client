import { GoogleLogin } from "@react-oauth/google";
import React from "react";
const clientId =
  "20926891972-c216blddp1en3cpr7dqv1n59v9dtane1.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Log out Success");
  };
  return (
    <div id="signOutButton">
      <GoogleLogin
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
