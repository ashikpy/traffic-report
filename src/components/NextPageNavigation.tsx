import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface PageNavItem {
  title: string;
  path: string;
  description: string;
}

interface NextPageNavigationProps {
  currentPath: string;
}

const pages: PageNavItem[] = [
  {
    title: "Home",
    path: "/",
    description: "Project overview and introduction"
  },
  {
    title: "Data Collection",
    path: "/data-collection",
    description: "Learn how we collect traffic signal data"
  },
  {
    title: "Data Visualization",
    path: "/data-visualization",
    description: "Explore our visualization techniques"
  },
  {
    title: "Data Analytics",
    path: "/data-analytics",
    description: "Discover our clustering and analysis methods"
  },
  {
    title: "Future Implementation",
    path: "/future-implementation",
    description: "See our proposed future enhancements"
  },
  {
    title: "Analysis Report",
    path: "/analysis-report",
    description: "Read our comprehensive findings"
  }
];

export default function NextPageNavigation({ currentPath }: NextPageNavigationProps) {
  const currentIndex = pages.findIndex(page => page.path === currentPath);
  
  // Don't show navigation if we can't find the current page
  if (currentIndex === -1) return null;

  const previousPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <div className="container mx-auto px-6 py-8 md:py-12 max-w-3xl">
      <hr className="border-t border-gray-700 mb-6 md:mb-8" />
      
      <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
        {/* Previous Page */}
        <div className="flex justify-start">
          {previousPage ? (
            <Link
              to={previousPage.path}
              className="group flex items-start gap-3 p-3 md:p-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors w-full md:max-w-sm"
            >
              <ArrowLeft 
                size={18} 
                className="text-gray-400 group-hover:text-red-400 transition-colors mt-1 flex-shrink-0" 
              />
              <div className="min-w-0 flex-1">
                <div className="text-xs md:text-sm text-gray-400 mb-1">Previous</div>
                <div className="font-semibold text-white group-hover:text-red-400 transition-colors text-sm md:text-base leading-tight">
                  {previousPage.title}
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-1 line-clamp-2">
                  {previousPage.description}
                </div>
              </div>
            </Link>
          ) : (
            <div className="hidden md:block"></div> // Empty div to maintain grid layout on desktop
          )}
        </div>

        {/* Next Page */}
        <div className="flex justify-start md:justify-end">
          {nextPage ? (
            <Link
              to={nextPage.path}
              className="group flex items-start gap-3 p-3 md:p-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors w-full md:max-w-sm md:text-right"
            >
              <div className="min-w-0 flex-1 md:order-2">
                <div className="text-xs md:text-sm text-gray-400 mb-1">Next</div>
                <div className="font-semibold text-white group-hover:text-red-400 transition-colors text-sm md:text-base leading-tight">
                  {nextPage.title}
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-1 line-clamp-2">
                  {nextPage.description}
                </div>
              </div>
              <ArrowRight 
                size={18} 
                className="text-gray-400 group-hover:text-red-400 transition-colors mt-1 flex-shrink-0 md:order-1" 
              />
            </Link>
          ) : (
            <div className="hidden md:block"></div> // Empty div to maintain grid layout on desktop
          )}
        </div>
      </div>

      {/* Progress indicator */}
      <div className="mt-6 md:mt-8 flex justify-center">
        <div className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-full">
          <span className="text-xs md:text-sm text-gray-400">Progress:</span>
          <div className="flex gap-1">
            {pages.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors ${
                  index <= currentIndex ? 'bg-red-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="text-xs md:text-sm text-gray-400 ml-1">
            {currentIndex + 1} of {pages.length}
          </span>
        </div>
      </div>
    </div>
  );
}