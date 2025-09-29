import React from "react";

const DataCollection: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Data Collection</h1>
      <div className="content">
        <p>
          Welcome to the Data Collection module of the Traffic Report system.
        </p>
        <div className="features">
          <h2>Features:</h2>
          <ul>
            <li>Real-time traffic data acquisition</li>
            <li>Sensor data integration</li>
            <li>GPS tracking systems</li>
            <li>Camera-based traffic monitoring</li>
            <li>IoT device connectivity</li>
          </ul>
        </div>
        <div className="actions">
          <button className="btn-primary">Start Data Collection</button>
          <button className="btn-secondary">Configure Sources</button>
        </div>
      </div>
    </div>
  );
};

export default DataCollection;
