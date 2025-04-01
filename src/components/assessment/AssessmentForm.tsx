import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import PersonalInfoForm from "./PersonalInfoForm";
import PhysicalMeasurementsForm from "./PhysicalMeasurementsForm";
import DietInfoForm from "./DietInfoForm";
import ExerciseActivityForm from "./ExerciseActivityForm";
import MedicalInfoForm from "./MedicalInfoForm";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

export interface AssessmentData {
  // Personal Information
  name: string;
  age: string;
  sex: string;
  profession: string;
  fitnessGoal: string;
  
  // Physical Measurements
  weight: string;
  height: string;
  waist: string;
  hip: string;
  chest: string;
  
  // Diet Information
  dietType: string;
  afterWaking: string;
  breakfast: string;
  midMorningSnack: string;
  lunch: string;
  eveningSnack: string;
  dinner: string;
  beforeBedtime: string;
  skipMeals: string;
  eatOutside: string;
  whenEatingOut: string;
  smokeDrink: string;
  religiousFast: string;
  pastDiet: string;
  
  // Exercise & Activity
  activityLevel: string;
  currentExercise: string;
  exercisePreference: string;
  
  // Medical Information
  pastMedicalCondition: string;
  presentMedicalCondition: string;
  pregnant: string;
  lactating: string;
  foodAllergies: string;
  medicationSupplements: string;
  willingSupplements: string;
}

const initialData: AssessmentData = {
  // Personal Information
  name: "Tarun",
  age: "27",
  sex: "M",
  profession: "Software Engineer",
  fitnessGoal: "Be fit and healthy",
  
  // Physical Measurements
  weight: "75",
  height: "175.25",
  waist: "34",
  hip: "37",
  chest: "36.5",
  
  // Diet Information
  dietType: "vegetarian",
  afterWaking: "Water or chia seeds in warm water",
  breakfast: "Omlette, oats",
  midMorningSnack: "",
  lunch: "Rice with some curry or Rotis",
  eveningSnack: "",
  dinner: "Puloa or rice with a curry",
  beforeBedtime: "",
  skipMeals: "N",
  eatOutside: "Y",
  whenEatingOut: "Biryani, Pizza, chocolate Cakes",
  smokeDrink: "Yes, Smoke (3 cigarettes a day)",
  religiousFast: "N",
  pastDiet: "Y (Two years ago, lost weight by reducing carbs)",
  
  // Exercise & Activity
  activityLevel: "sedentary",
  currentExercise: "",
  exercisePreference: "home",
  
  // Medical Information
  pastMedicalCondition: "Shoulder surgery 10 years ago",
  presentMedicalCondition: "",
  pregnant: "NO",
  lactating: "NO",
  foodAllergies: "NO",
  medicationSupplements: "No",
  willingSupplements: "Yes",
};

const steps = [
  "Personal Information",
  "Physical Measurements",
  "Diet Information",
  "Exercise & Activity",
  "Medical Information"
];

const AssessmentForm = () => {
  const [formData, setFormData] = useState<AssessmentData>(initialData);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };
  
  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Submitted data:", formData);
      
      toast({
        title: "Assessment complete!",
        description: "Your personalized fitness plan is being generated.",
      });
      
      // Redirect to the plan page or show the plan generator
      window.location.href = "/plan";
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your assessment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const updateFormData = (fieldData: Partial<AssessmentData>) => {
    setFormData(prev => ({ ...prev, ...fieldData }));
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfoForm data={formData} updateData={updateFormData} />;
      case 1:
        return <PhysicalMeasurementsForm data={formData} updateData={updateFormData} />;
      case 2:
        return <DietInfoForm data={formData} updateData={updateFormData} />;
      case 3:
        return <ExerciseActivityForm data={formData} updateData={updateFormData} />;
      case 4:
        return <MedicalInfoForm data={formData} updateData={updateFormData} />;
      default:
        return null;
    }
  };
  
  const progressPercentage = ((currentStep + 1) / steps.length) * 100;
  
  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <div className="mb-10">
        <h1 className="text-3xl font-display font-bold text-white mb-3 text-center">
          Fitness & Nutrition Assessment
        </h1>
        <p className="text-gray-300 text-center mb-6">
          Please provide accurate information to help us create your personalized fitness and nutrition plan.
        </p>
        <div className="mb-2 flex justify-between text-sm text-gray-400">
          <span>Step {currentStep + 1} of {steps.length}</span>
          <span>{steps[currentStep]}</span>
        </div>
        <Progress value={progressPercentage} className="h-2 bg-white/10" />
      </div>
      
      <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
        <form onSubmit={handleSubmit}>
          {renderStepContent()}
          
          <div className="flex justify-between mt-8">
            {currentStep > 0 ? (
              <Button
                type="button"
                onClick={handleBack}
                variant="outline"
                className="border-white/10 text-white hover:bg-white/10"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            ) : (
              <div></div>
            )}
            
            {currentStep < steps.length - 1 ? (
              <Button
                type="button"
                onClick={handleNext}
                className="bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold"
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Assessment
                    <CheckCircle className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AssessmentForm;
