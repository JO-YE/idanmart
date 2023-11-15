import React, { useState } from "react";
import "./signup.css";
import eye from "../assets/visibility.svg";
import lock from "../assets/lock.svg";
import Login from "./Login_nav";

const Signin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <section className="body">
      <div >
        <Login />
        <div className="signup">
          <form method="POST" action="">
            {/* Email input */}
            <div className="input">
              <label htmlFor="email">Email Address</label>
              <div className="mail-icon">
                <svg
                  width="32"
                  height="31"
                  viewBox="0 0 32 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="mdi-light:email">
                    <path
                      id="Vector"
                      d="M7.32412 6.47141L23.5721 6.72691C24.5666 6.74255 25.514 7.15258 26.2062 7.86681C26.8983 8.58105 27.2783 9.54097 27.2627 10.5354L27.0858 21.784C27.0702 22.7785 26.6601 23.726 25.9459 24.4181C25.2317 25.1102 24.2717 25.4902 23.2773 25.4746L7.02931 25.2191C6.03487 25.2035 5.08738 24.7934 4.39526 24.0792C3.70314 23.3649 3.3231 22.405 3.33874 21.4106L3.51562 10.162C3.53126 9.16754 3.9413 8.22004 4.65553 7.52793C5.36976 6.83581 6.32968 6.45577 7.32412 6.47141ZM7.30447 7.72125C6.67954 7.71142 6.12627 7.91525 5.69543 8.28352L15.3204 14.7232L25.143 8.58934C24.724 8.2077 24.1774 7.98658 23.5525 7.97675L7.30447 7.72125ZM15.2966 16.2355L4.9421 9.2843C4.83779 9.55769 4.77038 9.86917 4.76547 10.1816L4.58858 21.4302C4.57816 22.0932 4.83152 22.7331 5.29293 23.2093C5.75434 23.6855 6.38601 23.9588 7.04897 23.9692L23.297 24.2247C23.9599 24.2352 24.5999 23.9818 25.076 23.5204C25.5522 23.059 25.8255 22.4273 25.836 21.7644L26.0128 10.5158C26.0178 10.2033 25.9602 9.88985 25.8645 9.61331L15.2966 16.2355Z"
                      fill="#F4F4F4"
                    />
                  </g>
                </svg>
              </div>
              <div className="divider"></div>
              <input
                type="email"
                placeholder="example@abc.com"
                className="inner-text"
                pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                title="Invalid email format"
                required
              />
            </div>

            {/* Password input */}
            <div className="input">
              <label htmlFor="email">Password</label>
              <div className="mail-icon">
                <img src={lock} alt="lock icon" />
              </div>
              <div className="divider"></div>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Wukkzksxlnmcws?"
                className="inner-text"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                title="Password must be at least 8 characters and include at least one lowercase letter, one uppercase letter, one digit, and one special character."
                required
              />
              <div className="visibility">
                <img
                  src={eye}
                  alt="eye icon"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>

            {/* "Forgot Password" link */}
            <div className="forgot-password">
              <p>Forgot Password?</p>
            </div>

            {/* submit button */}
            <div className="submitbutton">
              <button className="Register">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signin;
