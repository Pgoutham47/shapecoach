
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AssessmentData } from "./AssessmentForm";

interface PersonalInfoFormProps {
  data: AssessmentData;
  updateData: (data: Partial<AssessmentData>) => void;
}

const PersonalInfoForm = ({ data, updateData }: PersonalInfoFormProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <Label htmlFor="name" className="text-white">Name</Label>
        <Input
          id="name"
          value={data.name}
          onChange={(e) => updateData({ name: e.target.value })}
          placeholder="Your full name"
          className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <Label htmlFor="age" className="text-white">Age</Label>
          <Input
            id="age"
            type="number"
            value={data.age}
            onChange={(e) => updateData({ age: e.target.value })}
            placeholder="Your age"
            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow"
          />
        </div>
        
        <div className="space-y-1">
          <Label htmlFor="sex" className="text-white">Biological Sex</Label>
          <Select 
            value={data.sex} 
            onValueChange={(value) => updateData({ sex: value })}
          >
            <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-brand-yellow">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="M">Male</SelectItem>
              <SelectItem value="F">Female</SelectItem>
              <SelectItem value="O">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-1">
        <Label htmlFor="profession" className="text-white">Profession</Label>
        <Input
          id="profession"
          value={data.profession}
          onChange={(e) => updateData({ profession: e.target.value })}
          placeholder="Your occupation"
          className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow"
        />
      </div>
      
      <div className="space-y-1">
        <Label htmlFor="fitnessGoal" className="text-white">Fitness Goal</Label>
        <Textarea
          id="fitnessGoal"
          value={data.fitnessGoal}
          onChange={(e) => updateData({ fitnessGoal: e.target.value })}
          placeholder="Describe your fitness goals (e.g., weight loss, muscle gain, general fitness)"
          className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow min-h-[100px]"
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
