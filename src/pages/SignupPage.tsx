
import { Link } from "react-router-dom";
import SignupForm from "@/components/auth/SignupForm";

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-brand-blue flex flex-col">
      <div className="flex min-h-screen">
        <div className="flex-1 hidden lg:block relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
            alt="Fitness"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 p-6 z-20">
            <Link to="/">
              <img
                src="/public/lovable-uploads/be2d12f5-5419-455a-ab5a-cc238f759369.png"
                alt="ShapeCoach Logo"
                className="h-12"
              />
            </Link>
          </div>
          <div className="absolute bottom-12 left-12 right-12 z-20">
            <h2 className="text-3xl font-display font-bold text-white mb-3">
              Start Your AI-Powered Fitness Journey
            </h2>
            <p className="text-gray-300">
              Create your account in minutes and get a personalized plan designed just for you
            </p>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col justify-center items-center p-6 relative">
          <div className="lg:hidden absolute top-6 left-6">
            <Link to="/">
              <img
                src="/public/lovable-uploads/be2d12f5-5419-455a-ab5a-cc238f759369.png"
                alt="ShapeCoach Logo"
                className="h-10"
              />
            </Link>
          </div>
          
          <div className="w-full max-w-md">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
