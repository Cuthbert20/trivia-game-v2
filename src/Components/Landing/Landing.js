import React from "react";
import Login from "../Login/Login";
import "./Landing.css";
import Menu from "../Menu/Menu";
import FreePlay from "../FreePlay/FreePlay";

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
          <button
            className="btn"
            onClick={() => props.history.push("/freeplay")}
          >
            Free Play
          </button>
        </div>
      </header>
    </div>
  );
}

export default Landing;
