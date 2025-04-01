
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AssessmentData } from "./AssessmentForm";

interface PhysicalMeasurementsFormProps {
  data: AssessmentData;
  updateData: (data: Partial<AssessmentData>) => void;
}

const PhysicalMeasurementsForm = ({ data, updateData }: PhysicalMeasurementsFormProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <Label htmlFor="weight" className="text-white">Weight (kg)</Label>
          <Input
            id="weight"
            type="number"
            step="0.1"
            value={data.weight}
            onChange={(e) => updateData({ weight: e.target.value })}
            placeholder="Your weight in kilograms"
            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow"
          />
        </div>
        
        <div className="space-y-1">
          <Label htmlFor="height" className="text-white">Height (cm)</Label>
          <Input
            id="height"
            type="number"
            step="0.1"
            value={data.height}
            onChange={(e) => updateData({ height: e.target.value })}
            placeholder="Your height in centimeters"
            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-1">
          <Label htmlFor="waist" className="text-white">Waist (inches)</Label>
          <Input
            id="waist"
            type="number"
            step="0.1"
            value={data.waist}
            onChange={(e) => updateData({ waist: e.target.value })}
            placeholder="Waist circumference"
            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow"
          />
        </div>
        
        <div className="space-y-1">
          <Label htmlFor="hip" className="text-white">Hip (inches)</Label>
          <Input
            id="hip"
            type="number"
            step="0.1"
            value={data.hip}
            onChange={(e) => updateData({ hip: e.target.value })}
            placeholder="Hip circumference"
            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow"
          />
        </div>
        
        <div className="space-y-1">
          <Label htmlFor="chest" className="text-white">Chest (inches)</Label>
          <Input
            id="chest"
            type="number"
            step="0.1"
            value={data.chest}
            onChange={(e) => updateData({ chest: e.target.value })}
            placeholder="Chest circumference"
            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow"
          />
        </div>
      </div>
      
      <div className="bg-brand-yellow/10 rounded-lg p-4 text-sm text-white">
        <p className="font-medium mb-2">Why we need these measurements:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>They help calculate your BMI and body fat percentage</li>
          <li>They allow us to track your progress over time</li>
          <li>They help customize exercises that are right for your body type</li>
          <li>They enable us to determine appropriate nutrition recommendations</li>
        </ul>
      </div>
    </div>
  );
};

export default PhysicalMeasurementsForm;
