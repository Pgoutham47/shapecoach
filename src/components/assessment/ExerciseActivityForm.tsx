
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AssessmentData } from "./AssessmentForm";

interface ExerciseActivityFormProps {
  data: AssessmentData;
  updateData: (data: Partial<AssessmentData>) => void;
}

const ExerciseActivityForm = ({ data, updateData }: ExerciseActivityFormProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label htmlFor="activityLevel" className="text-white">Daily Activity Level</Label>
        <Select 
          value={data.activityLevel} 
          onValueChange={(value) => updateData({ activityLevel: value })}
        >
          <SelectTrigger id="activityLevel" className="bg-white/5 border-white/10 text-white focus:ring-brand-yellow">
            <SelectValue placeholder="Select your daily activity level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sedentary">Sedentary (Little to no exercise)</SelectItem>
            <SelectItem value="light">Light (Exercise 1-2 days/week)</SelectItem>
            <SelectItem value="moderate">Moderate (Exercise 3-5 days/week)</SelectItem>
            <SelectItem value="active">Active (Exercise 6-7 days/week)</SelectItem>
            <SelectItem value="very-active">Very Active (Intense exercise daily)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-3">
        <Label htmlFor="currentExercise" className="text-white">Current Exercise Routine</Label>
        <Textarea
          id="currentExercise"
          value={data.currentExercise}
          onChange={(e) => updateData({ currentExercise: e.target.value })}
          placeholder="Describe your current exercise routine, if any"
          className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow min-h-[100px]"
        />
      </div>
      
      <div className="space-y-3">
        <Label className="text-white">Exercise Preference</Label>
        <RadioGroup
          value={data.exercisePreference}
          onValueChange={(value) => updateData({ exercisePreference: value })}
          className="space-y-3"
        >
          <div className="flex items-start space-x-3 bg-white/5 p-3 rounded-md border border-white/10">
            <RadioGroupItem 
              value="home" 
              id="preferHome" 
              className="border-white/30 text-brand-yellow mt-1" 
            />
            <div>
              <Label htmlFor="preferHome" className="text-white">Home Workouts</Label>
              <p className="text-sm text-gray-400">Exercises that can be done at home with minimal or no equipment</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 bg-white/5 p-3 rounded-md border border-white/10">
            <RadioGroupItem 
              value="gym" 
              id="preferGym" 
              className="border-white/30 text-brand-yellow mt-1" 
            />
            <div>
              <Label htmlFor="preferGym" className="text-white">Gym Workouts</Label>
              <p className="text-sm text-gray-400">Exercises that utilize gym equipment and facilities</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 bg-white/5 p-3 rounded-md border border-white/10">
            <RadioGroupItem 
              value="outdoor" 
              id="preferOutdoor" 
              className="border-white/30 text-brand-yellow mt-1" 
            />
            <div>
              <Label htmlFor="preferOutdoor" className="text-white">Outdoor Activities</Label>
              <p className="text-sm text-gray-400">Running, cycling, hiking, sports, etc.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 bg-white/5 p-3 rounded-md border border-white/10">
            <RadioGroupItem 
              value="yoga" 
              id="preferYoga" 
              className="border-white/30 text-brand-yellow mt-1" 
            />
            <div>
              <Label htmlFor="preferYoga" className="text-white">Yoga & Low-Impact</Label>
              <p className="text-sm text-gray-400">Yoga, pilates, swimming, walking, etc.</p>
            </div>
          </div>
        </RadioGroup>
      </div>
      
      <div className="bg-brand-yellow/10 rounded-lg p-4 text-sm text-white">
        <p className="font-medium mb-2">Available equipment:</p>
        <p className="text-gray-300">Please note that you mentioned already having resistance bands available for home workouts. Are there any other fitness equipment items you have access to?</p>
      </div>
    </div>
  );
};

export default ExerciseActivityForm;
