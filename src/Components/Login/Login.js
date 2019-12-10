import React from "react";
import Register from "../Register/Register";
import { withRouter } from "react-router-dom";

function Login(props) {
  function handleRegister() {
    props.history.push("/register");
  }
  return (
    <div>
      <h1>Login Component</h1>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default withRouter(Login);
