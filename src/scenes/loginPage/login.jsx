import { GoogleLogin } from "@react-oauth/google";
import React from "react";

const clientId =
  "20926891972-c216blddp1en3cpr7dqv1n59v9dtane1.apps.googleusercontent.com";
function Login() {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <div id="signInButton">
      <button className="btn bg-white">
        <GoogleLogin
          buttonText="Login"
          isSignedIn={true}
          onSuccess={responseMessage}
          onError={errorMessage}
        />
      </button>
    </div>
  );
}

export default Login;
