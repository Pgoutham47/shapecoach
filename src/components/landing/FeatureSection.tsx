
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { 
  Brain, 
  Utensils, 
  LineChart, 
  MessageSquareText, 
  BarChart3, 
  ShieldCheck 
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, delay]);

  return (
    <div
      ref={ref}
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      <div className="bg-brand-yellow/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
        <div className="text-brand-yellow">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: <Brain size={28} />,
      title: "AI Workout Planning",
      description:
        "Our AI analyzes your goals, fitness level, and preferences to create personalized workout routines that evolve as you progress.",
    },
    {
      icon: <Utensils size={28} />,
      title: "Smart Nutrition Guidance",
      description:
        "Receive customized meal plans and nutrition advice based on your dietary preferences, restrictions, and fitness objectives.",
    },
    {
      icon: <LineChart size={28} />,
      title: "Progress Tracking",
      description:
        "Monitor your fitness journey with detailed analytics, visualizing improvements in strength, endurance, and body composition.",
    },
    {
      icon: <MessageSquareText size={28} />,
      title: "Virtual Coaching",
      description:
        "Get real-time feedback on your form and technique with our AI coach that's available 24/7 to answer your fitness questions.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Adaptive Programming",
      description:
        "Your fitness plan automatically adjusts based on your performance, recovery, and progress to ensure optimal results.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Science-Backed Methods",
      description:
        "All workout and nutrition recommendations are based on the latest exercise science and nutritional research.",
    },
  ];

  return (
    <section className="bg-brand-blue py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            AI-Powered Features
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Experience the next generation of fitness coaching with our advanced AI technology that adapts to your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
