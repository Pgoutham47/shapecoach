
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AssessmentData } from "./AssessmentForm";

interface DietInfoFormProps {
  data: AssessmentData;
  updateData: (data: Partial<AssessmentData>) => void;
}

const DietInfoForm = ({ data, updateData }: DietInfoFormProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label htmlFor="dietType" className="text-white">Diet Type</Label>
        <Select 
          value={data.dietType} 
          onValueChange={(value) => updateData({ dietType: value })}
        >
          <SelectTrigger id="dietType" className="bg-white/5 border-white/10 text-white focus:ring-brand-yellow">
            <SelectValue placeholder="Select your diet type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="vegetarian">Vegetarian</SelectItem>
            <SelectItem value="vegan">Vegan</SelectItem>
            <SelectItem value="pescatarian">Pescatarian</SelectItem>
            <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
            <SelectItem value="eggetarian">Eggetarian</SelectItem>
            <SelectItem value="keto">Keto</SelectItem>
            <SelectItem value="paleo">Paleo</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-4">
        <Label className="text-white">Current Meal Schedule</Label>
        
        <div className="space-y-3">
          <Label htmlFor="afterWaking" className="text-gray-300 text-sm">After Waking Up</Label>
          <Input
            id="afterWaking"
            value={data.afterWaking}
            onChange={(e) => updateData({ afterWaking: e.target.value })}
            placeholder="What do you consume after waking up?"
            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="breakfast" className="text-gray-300 text-sm">Breakfast</Label>
          <Input
            id="breakfast"
            value={data.breakfast}
            onChange={(e) => updateData({ breakfast: e.target.value })}
            placeholder="What do you typically have for breakfast?"
            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="midMorningSnack" className="text-gray-300 text-sm">Mid-Morning Snack</Label>
          <Input
            id="midMorningSnack"
            value={data.midMorningSnack}
            onChange={(e) => updateData({ midMorningSnack: e.target.value })}
            placeholder="What do you typically have as a mid-morning snack?"
            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="lunch" className="text-gray-300 text-sm">Lunch</Label>
          <Input
            id="lunch"
            value={data.lunch}
            onChange={(e) => updateData({ lunch: e.target.value })}
            placeholder="What do you typically have for lunch?"
            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="eveningSnack" className="text-gray-300 text-sm">Evening Snack</Label>
          <Input
            id="eveningSnack"
            value={data.eveningSnack}
            onChange={(e) => updateData({ eveningSnack: e.target.value })}
            placeholder="What do you typically have as an evening snack?"
            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="dinner" className="text-gray-300 text-sm">Dinner</Label>
          <Input
            id="dinner"
            value={data.dinner}
            onChange={(e) => updateData({ dinner: e.target.value })}
            placeholder="What do you typically have for dinner?"
            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="beforeBedtime" className="text-gray-300 text-sm">Before Bedtime</Label>
          <Input
            id="beforeBedtime"
            value={data.beforeBedtime}
            onChange={(e) => updateData({ beforeBedtime: e.target.value })}
            placeholder="Do you consume anything before sleeping?"
            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label className="text-white">Do you skip meals?</Label>
          <RadioGroup
            value={data.skipMeals}
            onValueChange={(value) => updateData({ skipMeals: value })}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="Y" 
                id="skipMealsYes" 
                className="border-white/30 text-brand-yellow" 
              />
              <Label htmlFor="skipMealsYes" className="text-gray-300">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="N" 
                id="skipMealsNo" 
                className="border-white/30 text-brand-yellow" 
              />
              <Label htmlFor="skipMealsNo" className="text-gray-300">No</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-3">
          <Label className="text-white">Do you eat outside regularly?</Label>
          <RadioGroup
            value={data.eatOutside}
            onValueChange={(value) => updateData({ eatOutside: value })}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="Y" 
                id="eatOutsideYes" 
                className="border-white/30 text-brand-yellow" 
              />
              <Label htmlFor="eatOutsideYes" className="text-gray-300">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="N" 
                id="eatOutsideNo" 
                className="border-white/30 text-brand-yellow" 
              />
              <Label htmlFor="eatOutsideNo" className="text-gray-300">No</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      
      {data.eatOutside === "Y" && (
        <div className="space-y-3">
          <Label htmlFor="whenEatingOut" className="text-white">When eating out, what do you typically order?</Label>
          <Textarea
            id="whenEatingOut"
            value={data.whenEatingOut}
            onChange={(e) => updateData({ whenEatingOut: e.target.value })}
            placeholder="List your typical restaurant orders"
            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow min-h-[80px]"
          />
        </div>
      )}
      
      <div className="space-y-3">
        <Label htmlFor="smokeDrink" className="text-white">Do you smoke, drink or use tobacco?</Label>
        <Textarea
          id="smokeDrink"
          value={data.smokeDrink}
          onChange={(e) => updateData({ smokeDrink: e.target.value })}
          placeholder="Please provide details about smoking, drinking, or tobacco use"
          className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow min-h-[80px]"
        />
      </div>
      
      <div className="space-y-3">
        <Label className="text-white">Do you follow any religious fasting?</Label>
        <RadioGroup
          value={data.religiousFast}
          onValueChange={(value) => updateData({ religiousFast: value })}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem 
              value="Y" 
              id="religiousFastYes" 
              className="border-white/30 text-brand-yellow" 
            />
            <Label htmlFor="religiousFastYes" className="text-gray-300">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem 
              value="N" 
              id="religiousFastNo" 
              className="border-white/30 text-brand-yellow" 
            />
            <Label htmlFor="religiousFastNo" className="text-gray-300">No</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="space-y-3">
        <Label className="text-white">Have you followed any diet plan in the past?</Label>
        <RadioGroup
          value={data.pastDiet}
          onValueChange={(value) => updateData({ pastDiet: value })}
          className="flex space-x-4 mb-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem 
              value="Y" 
              id="pastDietYes" 
              className="border-white/30 text-brand-yellow" 
            />
            <Label htmlFor="pastDietYes" className="text-gray-300">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem 
              value="N" 
              id="pastDietNo" 
              className="border-white/30 text-brand-yellow" 
            />
            <Label htmlFor="pastDietNo" className="text-gray-300">No</Label>
          </div>
        </RadioGroup>
        {data.pastDiet === "Y" && (
          <Textarea
            value={data.pastDiet.slice(2)} // Remove the "Y " prefix
            onChange={(e) => updateData({ pastDiet: "Y " + e.target.value })}
            placeholder="Please provide details about your past diet plans"
            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow min-h-[80px]"
          />
        )}
      </div>
    </div>
  );
};

export default DietInfoForm;
