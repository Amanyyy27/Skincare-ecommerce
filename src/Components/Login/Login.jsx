import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css";
import Facebook from "../Assets/Login/facebook.png";
import Google from "../Assets/Login/google.png";
import Apple from "../Assets/Login/apple.png";
import loginBg from "../Assets/Login/loginBg.png";

const Login = ({ toggleForm, onLogin }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission refresh
    if (onLogin) {
      onLogin(); // Update login state
      navigate("/"); // Redirect to Home page
    }
  };

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="login-box">
        <form className="login-form" onSubmit={handleLogin}>
          <input type="text" placeholder="Username or email address" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">LOGIN</button> 
        </form>

        <div className="login-divider">OR</div>
        <button className="signup-button">
          Dont have an Account? <span onClick={toggleForm}>Sign Up</span>
        </button>
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
      </div>
    </div>
  );
};

export default Login;
