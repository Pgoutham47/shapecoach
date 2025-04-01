
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AssessmentData } from "./AssessmentForm";

interface MedicalInfoFormProps {
  data: AssessmentData;
  updateData: (data: Partial<AssessmentData>) => void;
}

const MedicalInfoForm = ({ data, updateData }: MedicalInfoFormProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label htmlFor="pastMedicalCondition" className="text-white">Past Medical Conditions</Label>
        <Textarea
          id="pastMedicalCondition"
          value={data.pastMedicalCondition}
          onChange={(e) => updateData({ pastMedicalCondition: e.target.value })}
          placeholder="Describe any past medical conditions or surgeries"
          className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow min-h-[80px]"
        />
      </div>
      
      <div className="space-y-3">
        <Label htmlFor="presentMedicalCondition" className="text-white">Present Medical Conditions</Label>
        <Textarea
          id="presentMedicalCondition"
          value={data.presentMedicalCondition}
          onChange={(e) => updateData({ presentMedicalCondition: e.target.value })}
          placeholder="Describe any current medical conditions or concerns"
          className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow min-h-[80px]"
        />
      </div>
      
      <div className="space-y-3">
        <Label className="text-white">Are you pregnant?</Label>
        <RadioGroup
          value={data.pregnant}
          onValueChange={(value) => updateData({ pregnant: value })}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem 
              value="YES" 
              id="pregnantYes" 
              className="border-white/30 text-brand-yellow" 
            />
            <Label htmlFor="pregnantYes" className="text-gray-300">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem 
              value="NO" 
              id="pregnantNo" 
              className="border-white/30 text-brand-yellow" 
            />
            <Label htmlFor="pregnantNo" className="text-gray-300">No</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="space-y-3">
        <Label className="text-white">Are you a lactating mother?</Label>
        <RadioGroup
          value={data.lactating}
          onValueChange={(value) => updateData({ lactating: value })}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem 
              value="YES" 
              id="lactatingYes" 
              className="border-white/30 text-brand-yellow" 
            />
            <Label htmlFor="lactatingYes" className="text-gray-300">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem 
              value="NO" 
              id="lactatingNo" 
              className="border-white/30 text-brand-yellow" 
            />
            <Label htmlFor="lactatingNo" className="text-gray-300">No</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="space-y-3">
        <Label htmlFor="foodAllergies" className="text-white">Do you have any food allergies?</Label>
        <Input
          id="foodAllergies"
          value={data.foodAllergies}
          onChange={(e) => updateData({ foodAllergies: e.target.value })}
          placeholder="List any food allergies or write NO if none"
          className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow"
        />
      </div>
      
      <div className="space-y-3">
        <Label htmlFor="medicationSupplements" className="text-white">Are you currently taking any medications or supplements?</Label>
        <Textarea
          id="medicationSupplements"
          value={data.medicationSupplements}
          onChange={(e) => updateData({ medicationSupplements: e.target.value })}
          placeholder="List any medications or supplements you're currently taking"
          className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow min-h-[80px]"
        />
      </div>
      
      <div className="space-y-3">
        <Label className="text-white">Are you willing to take supplements if recommended?</Label>
        <RadioGroup
          value={data.willingSupplements}
          onValueChange={(value) => updateData({ willingSupplements: value })}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem 
              value="Yes" 
              id="supplementsYes" 
              className="border-white/30 text-brand-yellow" 
            />
            <Label htmlFor="supplementsYes" className="text-gray-300">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem 
              value="No" 
              id="supplementsNo" 
              className="border-white/30 text-brand-yellow" 
            />
            <Label htmlFor="supplementsNo" className="text-gray-300">No</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="bg-brand-yellow/10 rounded-lg p-4 text-sm text-white">
        <p className="font-medium mb-2">Note:</p>
        <p className="text-gray-300">Please be aware that all medical information you provide will be kept strictly confidential and is solely used to create a safe, effective fitness and nutrition plan tailored to your specific needs and conditions.</p>
      </div>
    </div>
  );
};

export default MedicalInfoForm;
