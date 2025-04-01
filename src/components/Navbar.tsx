
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 ${
        isScrolled
          ? "bg-brand-blue py-2 shadow-md"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/public/lovable-uploads/be2d12f5-5419-455a-ab5a-cc238f759369.png" 
              alt="ShapeCoach Logo" 
              className="h-10 md:h-12" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-brand-yellow transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-white hover:text-brand-yellow transition-colors font-medium"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-white hover:text-brand-yellow transition-colors font-medium"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-brand-yellow transition-colors font-medium"
            >
              About
            </Link>
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-white hover:text-brand-yellow">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-blue absolute top-full left-0 right-0 px-6 py-4 shadow-md">
          <nav className="flex flex-col space-y-4 pb-4">
            <Link
              to="/"
              className="text-white hover:text-brand-yellow transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-white hover:text-brand-yellow transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-white hover:text-brand-yellow transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-brand-yellow transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>
          <div className="flex flex-col space-y-2 pt-4 border-t border-gray-700">
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full text-white hover:text-brand-yellow">
                Login
              </Button>
            </Link>
            <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
