
import React, { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, Dumbbell, MessageSquare, Utensils } from "lucide-react";
import { format, subDays, addDays } from "date-fns";

interface ScheduleItemProps {
  time: string;
  title: string;
  description: string;
  type: "workout" | "meal" | "coaching";
  completed?: boolean;
}

const ScheduleItem = ({ time, title, description, type, completed }: ScheduleItemProps) => {
  const getIcon = () => {
    switch (type) {
      case "workout":
        return <Dumbbell className="h-5 w-5 text-brand-yellow" />;
      case "meal":
        return <Utensils className="h-5 w-5 text-green-400" />;
      case "coaching":
        return <MessageSquare className="h-5 w-5 text-blue-400" />;
      default:
        return <Clock className="h-5 w-5 text-brand-yellow" />;
    }
  };

  return (
    <div className={`flex items-start p-4 border border-white/10 rounded-lg ${completed ? "opacity-60" : ""}`}>
      <div className="bg-white/10 p-3 rounded-lg mr-4">
        <div className="text-center">
          <div className="text-xs text-gray-400">{time}</div>
          {getIcon()}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="text-white font-medium">{title}</h3>
          {completed && (
            <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
              Completed
            </span>
          )}
        </div>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
};

const SchedulePage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const handlePrevDay = () => {
    setCurrentDate(prev => subDays(prev, 1));
  };
  
  const handleNextDay = () => {
    setCurrentDate(prev => addDays(prev, 1));
  };
  
  const formattedDate = format(currentDate, "EEEE, MMMM d, yyyy");
  const isToday = format(currentDate, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");
  
  return (
    <div className="min-h-screen bg-brand-blue">
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1 md:ml-64">
          <main className="p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-display font-bold text-white mb-2">
                Your Schedule
              </h1>
              <p className="text-gray-300">
                Track your workouts, meals, and coaching sessions
              </p>
            </div>
            
            <div className="flex justify-between items-center mb-8">
              <Button variant="outline" onClick={handlePrevDay} className="border-white/10 text-white hover:bg-white/10">
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous Day</span>
              </Button>
              
              <div className="flex items-center">
                <CalendarIcon className="mr-2 h-5 w-5 text-brand-yellow" />
                <h2 className="text-xl font-semibold text-white">
                  {formattedDate} {isToday && <span className="text-brand-yellow">(Today)</span>}
                </h2>
              </div>
              
              <Button variant="outline" onClick={handleNextDay} className="border-white/10 text-white hover:bg-white/10">
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next Day</span>
              </Button>
            </div>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-8">
              <CardHeader>
                <CardTitle className="text-white">Daily Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ScheduleItem 
                    time="7:00 AM"
                    title="Morning Routine"
                    description="5 minute stretching, glass of water, 10 push-ups"
                    type="workout"
                    completed={isToday}
                  />
                  
                  <ScheduleItem 
                    time="8:00 AM"
                    title="Breakfast"
                    description="Protein smoothie with banana, berries, and plant protein"
                    type="meal"
                    completed={isToday}
                  />
                  
                  <ScheduleItem 
                    time="12:30 PM"
                    title="Lunch"
                    description="Grilled chicken salad with olive oil dressing"
                    type="meal"
                    completed={isToday && new Date().getHours() > 12}
                  />
                  
                  <ScheduleItem 
                    time="5:30 PM"
                    title="Upper Body Strength"
                    description="45 min workout: Bench press, rows, shoulder press, bicep curls"
                    type="workout"
                    completed={isToday && new Date().getHours() > 17}
                  />
                  
                  <ScheduleItem 
                    time="7:00 PM"
                    title="Dinner"
                    description="Salmon with steamed vegetables and quinoa"
                    type="meal"
                    completed={isToday && new Date().getHours() > 19}
                  />
                  
                  <ScheduleItem 
                    time="8:30 PM"
                    title="Coaching Check-in"
                    description="Weekly progress review with AI coach"
                    type="coaching"
                    completed={false}
                  />
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Upcoming Workouts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { day: "Tomorrow", workout: "Core & Cardio", duration: "30 min" },
                      { day: "Wednesday", workout: "Lower Body Focus", duration: "45 min" },
                      { day: "Friday", workout: "Full Body HIIT", duration: "35 min" },
                      { day: "Saturday", workout: "Active Recovery", duration: "25 min" }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0 last:pb-0">
                        <div>
                          <p className="text-white font-medium">{item.workout}</p>
                          <p className="text-gray-400 text-sm">{item.day}</p>
                        </div>
                        <span className="text-brand-yellow">{item.duration}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Weekly Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-300">Workouts Completed</span>
                        <span className="text-white font-medium">3/5</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-brand-yellow h-2 rounded-full" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-300">Nutrition Adherence</span>
                        <span className="text-white font-medium">85%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-300">Water Intake</span>
                        <span className="text-white font-medium">2.5/3L</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{ width: "83%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-300">Sleep Quality</span>
                        <span className="text-white font-medium">Good</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-purple-400 h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/10 mt-4">
                      <h4 className="text-white font-medium mb-2">Focus for This Week</h4>
                      <p className="text-gray-300 text-sm">
                        Improving upper body strength and maintaining consistent protein intake. 
                        Try to increase water consumption on workout days.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
