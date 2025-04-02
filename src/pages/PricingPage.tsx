
import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  popular = false,
  ctaText = "Get Started"
}) => {
  return (
    <Card className={`border ${
      popular 
        ? "bg-brand-yellow/10 border-brand-yellow" 
        : "bg-white/5 border-white/10"
    }`}>
      <CardHeader>
        {popular && (
          <div className="py-1 px-3 bg-brand-yellow text-brand-blue text-xs font-semibold rounded-full w-fit mx-auto -mt-8 mb-4">
            Most Popular
          </div>
        )}
        <CardTitle className="text-center text-white text-xl">{title}</CardTitle>
        <div className="text-center">
          <span className="text-4xl font-bold text-white">${price}</span>
          <span className="text-gray-400 ml-1">/month</span>
        </div>
        <CardDescription className="text-center text-gray-300">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className={`mr-2 mt-0.5 ${popular ? "text-brand-yellow" : "text-green-500"}`}>
                <Check className="h-5 w-5" />
              </div>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link to="/signup" className="w-full">
          <Button 
            className={`w-full ${
              popular 
                ? "bg-brand-yellow hover:bg-amber-500 text-brand-blue"
                : "bg-white/10 hover:bg-white/20 text-white"
            }`}
          >
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-brand-blue">
      <Navbar />
      
      <div className="container mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300">
            Choose the plan that fits your fitness journey. All plans include core features and ongoing updates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <PricingCard 
            title="Basic"
            price={9.99}
            description="Perfect for those just getting started"
            features={[
              "AI-generated workout plans",
              "Basic nutrition guidance",
              "Progress tracking",
              "Access to exercise library",
              "Community support"
            ]}
          />
          
          <PricingCard 
            title="Pro"
            price={19.99}
            description="For dedicated fitness enthusiasts"
            features={[
              "Everything in Basic",
              "Advanced workout customization",
              "Detailed nutrition planning",
              "Weekly progress analysis",
              "1 AI coaching session per month",
              "Priority support"
            ]}
            popular={true}
          />
          
          <PricingCard 
            title="Elite"
            price={39.99}
            description="The ultimate fitness experience"
            features={[
              "Everything in Pro",
              "Fully personalized fitness journey",
              "Comprehensive meal planning",
              "Unlimited AI coaching sessions",
              "Real-time form feedback",
              "Advanced analytics and insights",
              "24/7 priority support"
            ]}
            ctaText="Go Elite"
          />
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-lg p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Need a custom plan for your team or organization?
              </h2>
              <p className="text-gray-300 mb-6">
                We offer special pricing and features for teams, gyms, and corporate wellness programs. Contact us to learn more.
              </p>
              <Button className="bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold">
                Contact Sales
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-full mr-3">
                  <Check className="h-5 w-5 text-brand-yellow" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Team Dashboards</h3>
                  <p className="text-gray-400 text-sm">Track progress and engagement across your team</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-full mr-3">
                  <Check className="h-5 w-5 text-brand-yellow" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Custom Challenges</h3>
                  <p className="text-gray-400 text-sm">Create team challenges to boost motivation</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-full mr-3">
                  <Check className="h-5 w-5 text-brand-yellow" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Advanced Analytics</h3>
                  <p className="text-gray-400 text-sm">Get insights into team health metrics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">
                Can I switch plans after signing up?
              </h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be applied to your next billing cycle.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">
                Is there a free trial available?
              </h3>
              <p className="text-gray-300">
                Yes, we offer a 7-day free trial on all our plans so you can experience the full benefits before committing.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">
                How do AI coaching sessions work?
              </h3>
              <p className="text-gray-300">
                AI coaching sessions use advanced algorithms to analyze your progress, form, and goals to provide personalized guidance. You can schedule these through the app at your convenience.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">
                Can I cancel my subscription?
              </h3>
              <p className="text-gray-300">
                Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
