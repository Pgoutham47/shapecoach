
import { Link } from "react-router-dom";
import AssessmentForm from "@/components/assessment/AssessmentForm";

const AssessmentPage = () => {
  return (
    <div className="min-h-screen bg-brand-blue pt-10 pb-16">
      <div className="container mx-auto px-6 mb-8">
        <div className="flex justify-center">
          <Link to="/">
            <img
              src="/public/lovable-uploads/be2d12f5-5419-455a-ab5a-cc238f759369.png"
              alt="ShapeCoach Logo"
              className="h-12"
            />
          </Link>
        </div>
      </div>
      
      <AssessmentForm />
    </div>
  );
};

export default AssessmentPage;
