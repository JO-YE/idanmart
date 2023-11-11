import React, { useState } from "react";
import "./login-nav.css";
import { Link } from "react-router-dom";

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
              <Link
                style={{
                  textDecoration: "none",
                  color: "rgba(244, 244, 244, 0.96)",
                }}
                to="/"
              >
                Registration
              </Link>
            </li>
            <li
              onClick={() => {
                setLogin("sign-in");
              }}
              className={login === "sign-in" ? "sign-in" : "registration"}
              style={login === "sign-in" ? { background: "#B5022C" } : {}}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "rgba(244, 244, 244, 0.96)",
                }}
                to="/sign-in"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
