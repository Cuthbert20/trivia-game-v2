import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./Login.css";
// const floatField = document.getElementById("floatField");
// const floatContainer = document.querySelector("#floatContainer");
// floatField.addEventListener("focus", () => {
//   floatContainer.classList.add("active");
// });
// floatContainer.addEventListener("blur", () => {
//   floatContainer.classList.remove("active");
// });
function Login(props) {
  const [isActive, setIsActive] = useState(false);
  let handleFocus = () => {
    setIsActive(!isActive);
  };
  console.log(isActive);
  return (
    <div className="Login-Container">
      <article
        id="floatContainerUser"
        className={isActive ? "float-container active" : "float-container"}
      >
        <label htmlFor="floatField">Username</label>
        <input
          onFocus={handleFocus}
          onBlur={handleFocus}
          id="floatField"
          className="input"
          type="text"
        />
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
