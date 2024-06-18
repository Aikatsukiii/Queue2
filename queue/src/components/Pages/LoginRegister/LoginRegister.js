import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./LoginRegister.css";

const LoginRegister = () => {
  const [action, setAction] = useState("");
  const navigate = useNavigate();

  const registerLink = () => {
    setAction(" active");
  };

  const loginLink = () => {
    setAction("");
  };

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div>
      <nav className="navbar-register">
        <div className="navbar-titleregister">Queue Management System</div>
      </nav>
      <div className="login-middle">
        <div className={`wrapper${action}`}>
          <div className="form-box login">
            <form action="">
              <h1 className="Login">Login </h1>

              <div className="input-box">
                <input type="text" placeholder="Username" required />
                <FaUser className="icon" />
              </div>

              <div className="input-box">
                <input type="password" placeholder="Password" required />
                <FaLock className="icon" />
              </div>

              <div>
                <button onClick={handleLogin}>
                  Login
                </button>
              </div>
              <div className="register-link">
                <p>
                  Don't have an account?
                  <a href="#Signup" onClick={registerLink}>
                    {" "}
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div className="form-box register">
            <form action="">
              <h1 className="Login">Sign up </h1>

              <div className="input-box">
                <input type="text" placeholder="Username" required />
                <FaUser className="icon" />
              </div>

              <div className="input-box">
                <input type="email" placeholder="Email" required />
                <FaEnvelope className="icon" />
              </div>

              <div className="input-box">
                <input type="password" placeholder="Password" required />
                <FaLock className="icon" />
              </div>

              <button type="submit">
                Submit
              </button>

              <div className="register-link">
                <p>
                  Already have an account?
                  <a href="./" onClick={loginLink}>
                    {" "}
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
