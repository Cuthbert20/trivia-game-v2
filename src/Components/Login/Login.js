import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./Login.css";
import useToggle from "../hooks/useToggle";
// const floatField = document.getElementById("floatField");
// const floatContainer = document.querySelector("#floatContainer");
// floatField.addEventListener("focus", () => {
//   floatContainer.classList.add("active");
// });
// floatContainer.addEventListener("blur", () => {
//   floatContainer.classList.remove("active");
// });
function Login(props) {
  //useToggle custom hook
  const [isLoginInput, setLoginInput] = useToggle(false);
  const [isPWInput, setPWInput] = useToggle(false);
  return (
    <div className="Login-Container">
      <article
        id="floatContainerUser"
        className={isLoginInput ? "float-container active" : "float-container"}
      >
        <label htmlFor="floatField">Username</label>
        <input
          onFocus={setLoginInput}
          onBlur={setLoginInput}
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
          onFocus={setPWInput}
          onBlur={setPWInput}
          className="input"
          type="text"
        />
      </article>

      <button className="btn">Submit</button>
    </div>
  );
}

export default withRouter(Login);
