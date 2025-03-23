import React from "react";
import "./SignUp.css";
import Facebook from "../Assets/Login/facebook.png";
import Google from "../Assets/Login/google.png";
import Apple from "../Assets/Login/apple.png";
import loginBg from "../Assets/Login/loginBg.png";

const Login = ({toggleForm}) => {
  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="login-box">
        <form className="login-form">
          <input type="text" placeholder="Username" className="login-input" />
          <input
            type="text"
            placeholder="Email address"
            className="login-input"
          />

          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="login-input"
          />

          <button type="submit" className="login-button">
            SIGN UP
          </button>
        </form>

        <div className="social-signup">
          <p>SIGN UP WITH</p>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Google} alt="Google" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Apple} alt="Apple" />
            </a>
          </div>
        </div>

        <button className="signup-button">
          Already have an Account? <span onClick={toggleForm}>Log In</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
