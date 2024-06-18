import React from "react";
import "./Sample.css";

const Home = () => {
  return (
    <div>
      <nav className="navbar-home">
        <div className="navbar-titlehome">Queue Management System</div>
      </nav>
      <div className="container-wrapper">
        <div className="box1">
          <div className="displayuno">
            <div className="current-title">Current Count</div>
            <div className="current-value">A01</div>
          </div>
        </div>
        <div className="box2">
          <div className="displaydos">
            <div className="current-title1">Next Count</div>
            <div className="current-value1">B01</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
