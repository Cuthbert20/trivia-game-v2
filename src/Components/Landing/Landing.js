import React from "react";
import Login from "../Login/Login";
import "./Landing.css";

function Landing(props) {
  // function handleRegister() {
  //   props.history.push("/register");
  // }
  return (
    <div>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <a href="#/">Home</a>
                </li>
                <li>
                  <a href="#/register">Register</a>
                </li>
                <li>
                  <a href="#/freeplay">Free Play</a>
                </li>
                <li>
                  <a href="#/about">About</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <header className="showcase">
        <div className="container showcase-inner">
          <h1>Welcome</h1>
          <Login />
        </div>
      </header>
      <footer>Contact Us</footer>
    </div>
  );
}

export default Landing;
