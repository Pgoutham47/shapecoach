
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-blue">
      {/* Background element */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/30 via-brand-blue to-brand-blue opacity-70"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 ${
              isLoaded ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Transform Your <span className="text-brand-yellow">Fitness</span> <br/>
              With AI Coaching
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-lg">
              Get personalized workout plans, nutrition advice, and real-time feedback 
              with our cutting-edge AI technology tailored to your unique goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/assessment">
                <Button 
                  className="bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold px-8 py-6 text-lg hover-scale"
                >
                  Get Your AI-Powered Plan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/features">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-lg"
                >
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>

          <div 
            className={`flex justify-center transition-all duration-1000 ${
              isLoaded ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-brand-yellow/20 blur-xl"></div>
              <div className="relative bg-brand-blue/40 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl p-6 w-full max-w-md">
                <div className="text-center mb-6">
                  <div className="inline-block bg-brand-blue/50 p-3 rounded-2xl mb-4">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-yellow">
                      <path d="M16 2V5M8 2V5M3 8H21M19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M9 13L11 15L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">Start Your 7-Day Trial</h3>
                  <p className="text-gray-300">Experience the full power of AI coaching</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "Personalized workout plans",
                    "Custom nutrition guidance",
                    "Real-time progress tracking",
                    "AI-powered form corrections",
                    "24/7 virtual coaching support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-200">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                        className="mr-2 text-brand-yellow" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/signup" className="block">
                  <Button className="w-full bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold py-5">
                    Start Free Trial
                  </Button>
                </Link>
                <p className="text-xs text-center text-gray-400 mt-4">
                  No credit card required. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
