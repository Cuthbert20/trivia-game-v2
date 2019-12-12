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
  const [isLoginInput, setLoginInput] = useState(false);
  const [isPWInput, setPWInput] = useState(false);

  let handleFocus = () => {
    setLoginInput(!isLoginInput);
  };
  let handlePWFocus = () => {
    setPWInput(!isPWInput);
  };
  return (
    <div className="Login-Container">
      <article
        id="floatContainerUser"
        className={isLoginInput ? "float-container active" : "float-container"}
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
      <article
        id="floatContainerPass"
        className={isPWInput ? "float-container active" : "float-container"}
      >
        <label htmlFor="floatField">Password</label>
        <input
          onFocus={handlePWFocus}
          onBlur={handlePWFocus}
          className="input"
          type="text"
        />
      </article>

      <button className="btn">Submit</button>
    </div>
  );
}

export default withRouter(Login);
