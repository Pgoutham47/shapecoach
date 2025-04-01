
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { CheckCircle2, ClipboardCheck, LineChart } from "lucide-react";

const StepCard = ({ 
  icon, 
  number, 
  title, 
  description, 
  isActive = false
}: { 
  icon: React.ReactNode; 
  number: number; 
  title: string; 
  description: string;
  isActive?: boolean;
}) => {
  return (
    <div className={`border ${isActive ? 'border-brand-yellow' : 'border-white/10'} rounded-xl p-6 transition-all duration-300 hover:border-brand-yellow hover:bg-white/5 relative`}>
      <div className="absolute -top-3 -left-3 bg-brand-blue border-2 border-brand-yellow rounded-full w-10 h-10 flex items-center justify-center text-brand-yellow font-bold">
        {number}
      </div>
      <div className="mb-4 text-brand-yellow">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const HowItWorksSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev % 3) + 1);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [inView]);

  const steps = [
    {
      icon: <ClipboardCheck size={28} />,
      title: "Complete your assessment",
      description: "Answer questions about your goals, fitness level, preferences, and health history.",
    },
    {
      icon: <CheckCircle2 size={28} />,
      title: "Get your AI-generated plan",
      description: "Our AI creates a personalized workout and nutrition plan tailored specifically to you.",
    },
    {
      icon: <LineChart size={28} />,
      title: "Track your progress",
      description: "Follow your plan, log your workouts, and watch as the AI adapts your program over time.",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-b from-brand-blue to-brand-blue/90">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            How ShapeCoach Works
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Getting started with AI-powered fitness coaching is simple. Just follow these three steps:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              number={index + 1}
              title={step.title}
              description={step.description}
              isActive={activeStep === index + 1}
            />
          ))}
          
          {/* Connecting lines */}
          <div className="hidden md:block absolute top-1/2 left-[calc(33.3%-2rem)] right-[calc(33.3%-2rem)] h-0.5 bg-white/10 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
