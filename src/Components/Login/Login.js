import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.css";

function Login(props) {
  return (
    <div className="Login-Container">
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <button className="btn">Submit</button>
    </div>
  );
}

export default withRouter(Login);
