import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
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
  );
}
