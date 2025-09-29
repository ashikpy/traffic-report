import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-white hover:text-blue-300 transition-colors"
            >
              🚦 Traffic Report
            </Link>
          </div>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/data-collection"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/data-collection")
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              >
                Data Collection
              </Link>
            </li>
            <li>
              <Link
                to="/data-visualization"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/data-visualization")
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              >
                Data Visualization
              </Link>
            </li>
            <li>
              <Link
                to="/data-analytics"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/data-analytics")
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              >
                Data Analytics
              </Link>
            </li>
            <li>
              <Link
                to="/future-implementation"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/future-implementation")
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              >
                Future Implementation
              </Link>
            </li>
            <li>
              <Link
                to="/analysis-report"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/analysis-report")
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              >
                Analysis Report
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
