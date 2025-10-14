import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
          <div className="text-red-400 text-6xl mb-4">⚠️</div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Oops! The page you're looking for doesn't exist in our traffic
            analysis report. It might have been moved, deleted, or you entered
            the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
          >
            <Home size={20} />
            Go to Homepage
          </Link>

          <div className="flex gap-3 justify-center">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <ArrowLeft size={16} />
              Go Back
            </button>

            <Link
              to="/data-collection"
              className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <Search size={16} />
              Browse Report
            </Link>
          </div>
        </div>

        {/* Popular Pages */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold mb-4 text-gray-300">
            Popular Sections
          </h3>
          <div className="grid grid-cols-1 gap-2 text-sm">
            <Link
              to="/data-collection"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              → Data Collection & Manipulation
            </Link>
            <Link
              to="/data-visualization"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              → Data Visualization
            </Link>
            <Link
              to="/data-analytics"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              → Data Analytics
            </Link>
            <Link
              to="/analysis-report"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              → Analysis Report
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
