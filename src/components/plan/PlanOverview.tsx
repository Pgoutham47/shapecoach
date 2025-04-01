
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Share2, FileText, Calendar, Utensils, Coffee } from "lucide-react";
import WorkoutPlan from "./WorkoutPlan";
import NutritionPlan from "./NutritionPlan";

const PlanOverview = () => {
  const [activeTab, setActiveTab] = useState("workout");

  return (
    <div className="container mx-auto px-6 py-10 max-w-5xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">Your 30-Day AI-Generated Plan</h1>
          <p className="text-gray-300">
            Personalized plan based on your fitness goals and assessment
          </p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold">
            <Download className="mr-2 h-4 w-4" />
            Download Plan
          </Button>
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <div className="bg-brand-yellow/20 p-2 rounded-full">
              <Calendar className="h-5 w-5 text-brand-yellow" />
            </div>
            <CardTitle className="text-white text-lg">Program Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-white">30 Days</p>
            <p className="text-gray-400 text-sm">Adjustments made every 10 days</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <div className="bg-brand-yellow/20 p-2 rounded-full">
              <Utensils className="h-5 w-5 text-brand-yellow" />
            </div>
            <CardTitle className="text-white text-lg">Diet Type</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-white">Vegetarian</p>
            <p className="text-gray-400 text-sm">Customized for your preferences</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <div className="bg-brand-yellow/20 p-2 rounded-full">
              <FileText className="h-5 w-5 text-brand-yellow" />
            </div>
            <CardTitle className="text-white text-lg">Weekly Check-ins</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-white">Sundays</p>
            <p className="text-gray-400 text-sm">Track progress and adjust</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-10">
        <CardHeader className="bg-white/5">
          <CardTitle className="text-white">Fitness Goal Summary</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Primary Goals</h3>
              <ul className="space-y-2">
                {[
                  "Overall fitness improvement",
                  "Gradual weight reduction",
                  "Increased energy levels",
                  "Better sleep quality",
                  "Stress reduction"
                ].map((goal, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="mr-3 h-2 w-2 rounded-full bg-brand-yellow"></div>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 bg-brand-blue/50 rounded-lg">
              <div className="flex items-start gap-3 mb-4">
                <Coffee className="h-6 w-6 text-brand-yellow mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Lifestyle Recommendations</h3>
                  <p className="text-gray-300 text-sm">In addition to your fitness plan</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                {[
                  "Reduce cigarette consumption gradually (from 3 to 0 per day)",
                  "Ensure proper hydration (minimum 2.5L water daily)",
                  "Maintain consistent sleep schedule (7-8 hours nightly)",
                  "Take 5-minute stretch breaks during work day",
                  "Limit eating out to once a week maximum"
                ].map((tip, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <div className="mr-2 h-4 w-4 rounded-full bg-brand-yellow/20 text-brand-yellow flex items-center justify-center text-xs mt-0.5">
                      {index + 1}
                    </div>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs
        defaultValue="workout"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="bg-brand-blue/50 border border-white/10 w-full justify-start">
          <TabsTrigger
            value="workout"
            className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
          >
            Workout Plan
          </TabsTrigger>
          <TabsTrigger
            value="nutrition"
            className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
          >
            Nutrition Plan
          </TabsTrigger>
        </TabsList>
        <TabsContent value="workout" className="mt-6">
          <WorkoutPlan />
        </TabsContent>
        <TabsContent value="nutrition" className="mt-6">
          <NutritionPlan />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PlanOverview;
