import React from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import "./Landing.css";

function Landing() {
  return (
    <div className="Landing-Container">
      <nav>
        <a href="!#">Home</a>
      </nav>
      <h1>Landing Component displays the following</h1>
      <Login />
      <Register />
      <footer>Contact Us</footer>
    </div>
  );
}

export default Landing;
