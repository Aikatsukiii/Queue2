import React, { useState } from "react";
import "./Account.css";

const Account = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");

      console.log("Form submitted successfully:", { username, password });
    }
  };

  return (
    // --------- Navbar ---------
    <div>
      <nav className="navbar-account">
        <div className="navbar-titleaccount">Queue Management System</div>
      </nav>
      {/* --------- Sidebar --------- */}
      <div className="sidebar-account">
        <ul>
          <li>
            <button
              className="channel-button"
              onClick={() => (window.location.href = "./channel")}
            >
              Channel
            </button>
          </li>
          <li>
            <button
              className="account-button"
              onClick={() => (window.location.href = "./account")}
            >
              Account
            </button>
          </li>
        </ul>
      </div>
      {/* --------- Form change password --------- */}
      <div className="account-form">
        <h2>Account</h2>
        <form className="list" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button className="confirmaccount" type="submit"> Confirm
          </button>
        </form>
      </div>
    </div>
  );
};
export default Account;
