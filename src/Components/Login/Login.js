import React from "react";
import { withRouter } from "react-router-dom";

function Login(props) {
  return (
    <div>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
    </div>
  );
}

export default withRouter(Login);
