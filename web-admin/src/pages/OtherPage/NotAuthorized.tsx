import { Link } from "react-router-dom";
import GridShape from "../../components/common/GridShape";

export default function NotAuthorized() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <GridShape />

      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          🚫 Access Denied
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          You do not have permission to view this page.
        </p>

        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md transition-all duration-200 font-medium"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
