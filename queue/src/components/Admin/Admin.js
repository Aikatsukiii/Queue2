import React from "react";
import "./Admin.css";

const Admin = () => {
  return (
    <div>
      <nav className="navbar-admin">
        <div className="navbar-titleadmin">Queue Management System</div>
      </nav>
      <div className="sidebar-admin">
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
    </div>
  );
};

export default Admin;
