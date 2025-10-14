import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

const routeMap: Record<string, string> = {
  "/": "Home",
  "/data-collection": "Data Collection",
  "/data-visualization": "Data Visualization",
  "/data-analytics": "Data Analytics",
  "/future-implementation": "Future Implementation",
  "/analysis-report": "Analysis Report",
};

export default function Breadcrumb() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Don't show breadcrumb on home page
  if (currentPath === "/") {
    return null;
  }

  const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", path: "/" }];

  // Add current page to breadcrumbs
  const currentPageLabel = routeMap[currentPath];
  if (currentPageLabel) {
    breadcrumbs.push({ label: currentPageLabel, path: currentPath });
  }

  return (
    <nav className="container mx-auto px-6 py-4" aria-label="Breadcrumb">
      <div className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((breadcrumb, index) => (
          <div key={breadcrumb.path} className="flex items-center">
            {/* Home icon for first breadcrumb */}
            {index === 0 && <Home size={16} className="mr-2 text-gray-400" />}

            {/* Breadcrumb link or current page */}
            {index === breadcrumbs.length - 1 ? (
              // Current page - not clickable
              <span className="text-red-400 font-medium">
                {breadcrumb.label}
              </span>
            ) : (
              // Link to previous pages
              <Link
                to={breadcrumb.path}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {breadcrumb.label}
              </Link>
            )}

            {/* Separator arrow */}
            {index < breadcrumbs.length - 1 && (
              <ChevronRight size={16} className="mx-2 text-gray-600" />
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
