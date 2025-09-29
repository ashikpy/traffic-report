import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navigation from "./components/Navigation";
import Home from "./components/Home";
import DataCollection from "./components/DataCollection";
import DataVisualization from "./components/DataVisualization";
import DataAnalytics from "./components/DataAnalytics";
import FutureImplementation from "./components/FutureImplementation";
import AnalysisReport from "./components/AnalysisReport";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app text-white">
        {/* <Navigation /> */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/data-collection" element={<DataCollection />} />
            <Route path="/data-visualization" element={<DataVisualization />} />
            <Route path="/data-analytics" element={<DataAnalytics />} />
            <Route
              path="/future-implementation"
              element={<FutureImplementation />}
            />
            <Route path="/analysis-report" element={<AnalysisReport />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
