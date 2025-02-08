import React from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/user.png";
import email_icon from "../Assets/email_542689.png";
import password_icon from "../Assets/password.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="header">
        <div classname="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div classname="inputs">
        {action === "Login" ? (
          <div>Test 1</div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input placeholder="Name" type="text" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input placeholder="Email Id" type="email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input placeholder="Password" type="password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div>Test 2</div>
      ) : (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
