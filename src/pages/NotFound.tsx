
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-blue p-6">
      <div className="text-center max-w-md">
        <div className="relative mb-8">
          <div className="absolute -inset-1 rounded-full bg-brand-yellow/20 blur-xl"></div>
          <h1 className="text-8xl font-bold text-brand-yellow relative">404</h1>
        </div>
        <h2 className="text-3xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/">
            <Button className="bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold px-6 py-3 rounded-md w-full">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to Home
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="outline" className="border-white/20 text-white bg-white/5 hover:bg-white/10 w-full">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
