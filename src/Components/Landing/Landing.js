import React from "react";
import Login from "../Login/Login";
import "./Landing.css";
import Menu from "../Menu/Menu";

function Landing(props) {
  // function handleRegister() {
  //   props.history.push("/register");
  // }
  return (
    <div>
      <Menu />
      <header className="showcase">
        <div className="container showcase-inner">
          <h1>Trivia Time</h1>
          <p>Time to Check Your Triva Skills</p>
          <Login />
          <button className="btn">Contact Us</button>
        </div>
      </header>
    </div>
  );
}

export default Landing;
