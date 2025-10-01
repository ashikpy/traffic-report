import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "Data Collection", path: "/data-collection" },
    { label: "Data Visualization", path: "/data-visualization" },
    { label: "Data Analysis", path: "/data-analytics" },
    { label: "Future Implementation", path: "/future-implementation" },
    { label: "Report", path: "/analysis-report" },
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="container mx-auto p-10">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-lg hover:opacity-80 transition-opacity">
          Red<span className="font-semibold">Analytics</span>
        </Link>

        {/* Desktop Navigation */}
        {/* Desktop Navigation */}
        <ul className="hidden xl:flex gap-8 text-sm">
          {navigationItems.map((item) => (
            <li key={item.path}>
              {item.label === "Report" ? (
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-md bg-red-100 text-black hover:bg-red-200 transition-colors ${
                    isActiveLink(item.path) ? "font-semibold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  to={item.path}
                  className={`hover:text-red-400 transition-colors ${
                    isActiveLink(item.path) ? "font-semibold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="xl:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5 hover:opacity-70 transition-opacity"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out xl:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-lg hover:opacity-80 transition-opacity"
            >
              Red<span className="font-semibold">Analytics</span>
            </Link>
            <button
              onClick={closeMenu}
              className="text-white hover:opacity-70 transition-opacity"
              aria-label="Close navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="space-y-4">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className={`block py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors ${
                    isActiveLink(item.path)
                      ? "bg-blue-600 text-white font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
