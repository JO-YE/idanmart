import React, { useState } from "react";
import "./login-nav.css";

const Login = () => {
  const [login, setLogin] = useState("registration");

  return (
    <div className="login">
      <div className="login-container">
        <div className="regis_signup_container">
          <ul className="regis_signin">
            <li
              onClick={() => {
                setLogin("registration");
              }}
              className={login === "registration" ? "registration" : "sign-in"}
              style={login === "registration" ? { background: "#B5022C" } : {}}
            >
              Registration
            </li>
            <li
              onClick={() => {
                setLogin("sign-in");
              }}
              className={login === "sign-in" ? "sign-in" : "registration"}
              style={login === "sign-in" ? { background: "#B5022C" } : {}}
            >
              Sign In
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
