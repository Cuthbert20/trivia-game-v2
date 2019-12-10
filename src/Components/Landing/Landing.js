import React, { useState } from "react";
import Login from "../Login/Login";
import "./Landing.css";

function Landing() {
  const [login, setLogin] = useState(false);
  function handleClick() {
    setLogin(true);
  }
  return (
    <div>
      <h1>Landing Component displays the following</h1>
      <Login />
      <footer>Contact Us</footer>
    </div>
  );
}

export default Landing;
