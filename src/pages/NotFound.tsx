
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-20">
        <h1 className="text-6xl md:text-8xl font-bold text-scholar-navy dark:text-white mb-4">
          404
        </h1>
        <p className="text-xl md:text-2xl text-scholar-gray dark:text-gray-300 mb-8 text-center">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button asChild className="bg-scholar-blue hover:bg-blue-700 text-white">
          <Link to="/">
            Return to Home
          </Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
