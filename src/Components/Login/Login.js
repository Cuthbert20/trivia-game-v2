import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.css";

function Login(props) {
  return (
    <div className="Login-Container">
      <article id="floatContainerUser" className="float-container">
        <label for="floatField">Username</label>
        <input input id="floatField" className="input" type="text" />
      </article>
      <br />
      <article id="floatContainerPass" className="float-container">
        <input type="text" />
      </article>

      <button className="btn">Submit</button>
    </div>
  );
}

export default withRouter(Login);
