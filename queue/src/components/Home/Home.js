import React, { useEffect } from "react";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/queue');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        // Process or use result data as needed       
      } catch (err) {
        console.log(err.message);
      } 
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="currentcount">
        <div className="currenttitle">Current Count</div>
        <div className="currentvalue">A-01</div> {/* Example placeholder */}
      </div>
      <div className="othercounts">
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

export default Home;
