
import React, { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, BarChart, Bar } from "recharts";
import { ArrowUpRight, Calendar, ChevronDown } from "lucide-react";

const weightData = [
  { date: "Jan 1", weight: 185 },
  { date: "Jan 8", weight: 184 },
  { date: "Jan 15", weight: 183 },
  { date: "Jan 22", weight: 182 },
  { date: "Jan 29", weight: 181 },
  { date: "Feb 5", weight: 180 },
  { date: "Feb 12", weight: 179 },
  { date: "Feb 19", weight: 178 },
  { date: "Feb 26", weight: 177 },
  { date: "Mar 5", weight: 176 },
];

const strengthData = [
  { date: "Jan 1", bench: 135, squat: 185, deadlift: 225 },
  { date: "Jan 15", bench: 140, squat: 195, deadlift: 235 },
  { date: "Feb 1", bench: 145, squat: 205, deadlift: 245 },
  { date: "Feb 15", bench: 150, squat: 215, deadlift: 255 },
  { date: "Mar 1", bench: 155, squat: 225, deadlift: 265 },
  { date: "Mar 15", bench: 160, squat: 235, deadlift: 275 },
];

const measurementsData = [
  { date: "Jan 1", chest: 42, waist: 36, arms: 14, legs: 24 },
  { date: "Feb 1", chest: 42.5, waist: 35, arms: 14.3, legs: 24.5 },
  { date: "Mar 1", chest: 43, waist: 34, arms: 14.6, legs: 25 },
];

const workoutData = [
  { name: "Week 1", completed: 3, target: 4 },
  { name: "Week 2", completed: 4, target: 4 },
  { name: "Week 3", completed: 3, target: 4 },
  { name: "Week 4", completed: 4, target: 4 },
  { name: "Week 5", completed: 5, target: 4 },
  { name: "Week 6", completed: 4, target: 4 },
  { name: "Week 7", completed: 4, target: 4 },
  { name: "Week 8", completed: 3, target: 4 },
  { name: "Week 9", completed: 4, target: 4 },
  { name: "Week 10", completed: 5, target: 4 },
];

const ProgressPage = () => {
  const [timeRange, setTimeRange] = useState("3m");
  
  return (
    <div className="min-h-screen bg-brand-blue">
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1 md:ml-64">
          <main className="p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-display font-bold text-white mb-2">
                Your Progress
              </h1>
              <p className="text-gray-300">
                Track your fitness journey and see how far you've come
              </p>
            </div>
            
            <div className="flex justify-between items-center mb-6">
              <Tabs defaultValue="weight" className="w-full max-w-md">
                <TabsList className="bg-brand-blue/50 border border-white/10">
                  <TabsTrigger 
                    value="weight" 
                    className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                  >
                    Weight
                  </TabsTrigger>
                  <TabsTrigger 
                    value="strength" 
                    className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                  >
                    Strength
                  </TabsTrigger>
                  <TabsTrigger 
                    value="measurements" 
                    className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                  >
                    Measurements
                  </TabsTrigger>
                  <TabsTrigger 
                    value="workouts" 
                    className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                  >
                    Workouts
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              
              <div className="flex items-center">
                <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{timeRange}</span>
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
              <TabsContent value="weight" className="mt-0">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-white">Weight Progression</h2>
                  <div className="flex items-center text-brand-yellow">
                    <ArrowUpRight className="mr-1 h-4 w-4" />
                    <span>-9 lbs</span>
                  </div>
                </div>
                
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weightData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                      <XAxis dataKey="date" stroke="#ffffff80" />
                      <YAxis stroke="#ffffff80" domain={['dataMin - 5', 'dataMax + 5']} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#0f172a', 
                          borderColor: '#ffffff30',
                          color: '#fff'
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="weight" 
                        stroke="#fbbf24" 
                        strokeWidth={2} 
                        dot={{ r: 4, strokeWidth: 2 }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              
              <TabsContent value="strength" className="mt-0">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-white">Strength Progression</h2>
                  <div className="flex items-center text-brand-yellow">
                    <ArrowUpRight className="mr-1 h-4 w-4" />
                    <span>+25%</span>
                  </div>
                </div>
                
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={strengthData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                      <XAxis dataKey="date" stroke="#ffffff80" />
                      <YAxis stroke="#ffffff80" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#0f172a', 
                          borderColor: '#ffffff30',
                          color: '#fff'
                        }}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="bench" name="Bench Press" stroke="#fbbf24" strokeWidth={2} />
                      <Line type="monotone" dataKey="squat" name="Squat" stroke="#3b82f6" strokeWidth={2} />
                      <Line type="monotone" dataKey="deadlift" name="Deadlift" stroke="#10b981" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              
              <TabsContent value="measurements" className="mt-0">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-white">Body Measurements</h2>
                  <div className="flex items-center text-brand-yellow">
                    <ArrowUpRight className="mr-1 h-4 w-4" />
                    <span>Improving</span>
                  </div>
                </div>
                
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={measurementsData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                      <XAxis dataKey="date" stroke="#ffffff80" />
                      <YAxis stroke="#ffffff80" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#0f172a', 
                          borderColor: '#ffffff30',
                          color: '#fff'
                        }}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="chest" name="Chest (in)" stroke="#fbbf24" strokeWidth={2} />
                      <Line type="monotone" dataKey="waist" name="Waist (in)" stroke="#3b82f6" strokeWidth={2} />
                      <Line type="monotone" dataKey="arms" name="Arms (in)" stroke="#10b981" strokeWidth={2} />
                      <Line type="monotone" dataKey="legs" name="Legs (in)" stroke="#ec4899" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              
              <TabsContent value="workouts" className="mt-0">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-white">Workout Consistency</h2>
                  <div className="flex items-center text-brand-yellow">
                    <ArrowUpRight className="mr-1 h-4 w-4" />
                    <span>92%</span>
                  </div>
                </div>
                
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={workoutData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                      <XAxis dataKey="name" stroke="#ffffff80" />
                      <YAxis stroke="#ffffff80" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#0f172a', 
                          borderColor: '#ffffff30',
                          color: '#fff'
                        }}
                      />
                      <Legend />
                      <Bar dataKey="completed" name="Completed Workouts" fill="#fbbf24" />
                      <Bar dataKey="target" name="Target Workouts" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Key Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Starting Weight</span>
                      <span className="text-white font-medium">185 lbs</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Current Weight</span>
                      <span className="text-white font-medium">176 lbs</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Total Weight Loss</span>
                      <span className="text-brand-yellow font-medium">9 lbs</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Strength Increase</span>
                      <span className="text-brand-yellow font-medium">25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Workout Adherence</span>
                      <span className="text-brand-yellow font-medium">92%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Recent Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      { title: "10 Workouts Completed", date: "Mar 1, 2023" },
                      { title: "First 5-Rep Chin-Up", date: "Feb 20, 2023" },
                      { title: "5 lbs Weight Loss", date: "Feb 15, 2023" },
                      { title: "Completed Core Challenge", date: "Feb 10, 2023" },
                      { title: "Perfect Week", date: "Feb 1, 2023" }
                    ].map((achievement, index) => (
                      <li key={index} className="flex justify-between items-center border-b border-white/10 last:border-0 pb-2 last:pb-0">
                        <div>
                          <p className="text-white font-medium">{achievement.title}</p>
                          <p className="text-gray-400 text-sm">{achievement.date}</p>
                        </div>
                        <div className="h-8 w-8 bg-brand-yellow/20 rounded-full flex items-center justify-center">
                          <span className="text-brand-yellow text-sm">🏆</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Upcoming Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      { title: "Reach 175 lbs", progress: 90 },
                      { title: "Bench Press 165 lbs", progress: 60 },
                      { title: "Complete 20 Workouts", progress: 75 },
                      { title: "Run 5K Under 30 Min", progress: 40 },
                      { title: "15% Body Fat", progress: 65 }
                    ].map((goal, index) => (
                      <li key={index} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <p className="text-white font-medium">{goal.title}</p>
                          <p className="text-gray-400 text-sm">{goal.progress}%</p>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div 
                            className="bg-brand-yellow h-2 rounded-full" 
                            style={{ width: `${goal.progress}%` }}
                          ></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
