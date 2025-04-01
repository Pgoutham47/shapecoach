
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 px-6 bg-brand-blue relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-yellow/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="bg-gradient-to-r from-brand-blue/90 to-brand-blue/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Ready to Transform Your Fitness Journey?
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Get started with your personalized AI fitness coach today and experience the difference of truly customized training.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/assessment">
                  <Button className="bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold px-6 py-6 text-lg hover-scale">
                    Start Your Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium px-6 py-6 text-lg">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-brand-yellow/20 blur-xl"></div>
              <div className="relative bg-brand-blue/40 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Why Users Love ShapeCoach
                  </h3>
                </div>
                <ul className="space-y-3 mb-4">
                  {[
                    "93% of users report better results than with traditional plans",
                    "Average of 12 lbs weight loss in the first month",
                    "85% improved workout consistency",
                    "Personalized feedback leads to 3x faster progress"
                  ].map((stat, index) => (
                    <li key={index} className="flex items-start text-gray-200">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                        className="mr-2 mt-1 text-brand-yellow" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      {stat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
