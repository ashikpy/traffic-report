import { Menu, X } from "lucide-react";
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
    <nav className="border-b border-gray-800">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-semibold hover:opacity-80 transition-opacity">
            Red<span className="text-red-400">Analytics</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-red-400 ${
                    isActiveLink(item.path) 
                      ? "text-red-400" 
                      : "text-gray-300"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X size={20} className="text-gray-300" />
            ) : (
              <Menu size={20} className="text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="py-4 space-y-2 border-t border-gray-800 mt-4">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActiveLink(item.path)
                      ? "bg-red-500 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
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
