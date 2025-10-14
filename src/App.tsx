import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import DataCollection from "./components/DataCollection";
import DataVisualization from "./components/DataVisualization";
import DataAnalytics from "./components/DataAnalytics";
import FutureImplementation from "./components/FutureImplementation";
import AnalysisReport from "./components/AnalysisReport";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";
import Breadcrumb from "./components/Breadcrumb";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app text-white">
        <Navigation />
        <Breadcrumb />
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
            {/* 404 catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
