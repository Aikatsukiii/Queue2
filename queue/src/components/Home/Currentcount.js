import React from "react";
import "./Currentcount.css";

function Currentcount() {
  return (
    <div className="container">
      <div className="current-count">
        <div className="current-title">Current Count</div>
        <div className="current-value">A-01</div>
      </div>
      <div className="other-counts">
        <div className="count">B-11</div>
        <div className="count">C-21</div>
        <div className="count">D-31</div>
        <div className="count">E-41</div>
        <div className="count">F-51</div>
        <div className="count">G-61</div>
        <div className="count">H-71</div>
        <div className="count">I-81</div>
      </div>
    </div>
  );
}

export default Currentcount;
