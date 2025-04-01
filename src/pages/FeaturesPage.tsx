
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-brand-blue flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                AI-Powered Features
              </h1>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Discover how ShapeCoach's advanced technology can transform your fitness journey with personalized coaching.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Smart Workout Planning</h2>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Personalized exercise selection based on your goals",
                    "Adaptive difficulty progression as you improve",
                    "Automatic workout adjustments based on available equipment",
                    "Rest day scheduling optimized for recovery",
                    "Injury prevention through balanced programming"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-3 h-6 w-6 text-brand-yellow flex-shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/assessment">
                  <Button className="w-full bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold">
                    Try Smart Workout Planning
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">AI Nutrition Guidance</h2>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Custom meal plans matching your dietary preferences",
                    "Calorie and macro recommendations based on your goals",
                    "Easy recipe suggestions with available ingredients",
                    "Meal timing optimization for energy and recovery",
                    "Grocery list generation for convenient shopping"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-3 h-6 w-6 text-brand-yellow flex-shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/assessment">
                  <Button className="w-full bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold">
                    Try AI Nutrition Guidance
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Real-Time Progress Tracking</h2>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Visual charts of strength and endurance gains",
                    "Body composition analysis and tracking",
                    "Performance analytics compared to similar profiles",
                    "Achievement milestone celebrations",
                    "Trend analysis to identify plateaus early"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-3 h-6 w-6 text-brand-yellow flex-shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/assessment">
                  <Button className="w-full bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold">
                    Try Progress Tracking
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">24/7 Virtual Coaching</h2>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Form correction through video analysis",
                    "On-demand exercise technique demonstrations",
                    "Real-time answers to fitness and nutrition questions",
                    "Motivational support during challenging workouts",
                    "Workout modifications for unexpected constraints"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-3 h-6 w-6 text-brand-yellow flex-shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/assessment">
                  <Button className="w-full bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold">
                    Try Virtual Coaching
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Ready to experience the power of AI fitness coaching?
              </h2>
              <Link to="/assessment">
                <Button className="bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold px-8 py-6 text-lg">
                  Start Your Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FeaturesPage;
