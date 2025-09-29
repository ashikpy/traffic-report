import React from "react";

const AnalysisReport: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Analysis Report</h1>
      <div className="content">
        <p>Comprehensive reports and summaries of traffic analysis results.</p>
        <div className="report-section">
          <h2>Latest Traffic Analysis Report</h2>
          <div className="report-meta">
            <span>Generated: {new Date().toLocaleDateString()}</span>
            <span>Period: Last 30 days</span>
          </div>

          <div className="report-summary">
            <h3>Executive Summary</h3>
            <p>
              Traffic patterns show a 15% increase in congestion during peak
              hours compared to the previous month. The main bottlenecks
              identified are at major intersections during morning and evening
              rush hours.
            </p>
          </div>

          <div className="report-findings">
            <h3>Key Findings</h3>
            <ul>
              <li>Peak congestion occurs between 8-9 AM and 5-6 PM</li>
              <li>Highway efficiency decreased by 8% due to construction</li>
              <li>Alternative route usage increased by 23%</li>
              <li>Average travel time increased by 12 minutes</li>
            </ul>
          </div>

          <div className="recommendations">
            <h3>Recommendations</h3>
            <ul>
              <li>Implement dynamic traffic signal timing</li>
              <li>Promote off-peak travel incentives</li>
              <li>Enhance public transportation during peak hours</li>
              <li>Deploy additional traffic management resources</li>
            </ul>
          </div>
        </div>
        <div className="actions">
          <button className="btn-primary">Download PDF Report</button>
          <button className="btn-secondary">Schedule Report</button>
          <button className="btn-secondary">Share Report</button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisReport;
