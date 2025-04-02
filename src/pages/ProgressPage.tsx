
import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProgressChart from "@/components/dashboard/ProgressChart";
import { Button } from "@/components/ui/button";
import { ArrowUp, CalendarRange, Clock, Scale, Dumbbell, Utensils } from "lucide-react";

const ProgressPage = () => {
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
                Track your fitness journey and celebrate your achievements
              </p>
            </div>
            
            <Tabs defaultValue="overview" className="w-full mb-8">
              <TabsList className="bg-brand-blue/50 border border-white/10 w-full justify-start">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="weight"
                  className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                >
                  Weight
                </TabsTrigger>
                <TabsTrigger
                  value="measurements"
                  className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                >
                  Measurements
                </TabsTrigger>
                <TabsTrigger
                  value="strength"
                  className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                >
                  Strength
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-gray-400 text-sm">Current Weight</p>
                          <h3 className="text-2xl font-semibold text-white mt-1">185 lbs</h3>
                        </div>
                        <div className="bg-brand-yellow/20 p-3 rounded-full">
                          <Scale className="h-6 w-6 text-brand-yellow" />
                        </div>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="bg-green-500/20 text-green-500 text-xs rounded-full px-2 py-1 flex items-center">
                          <ArrowUp className="h-3 w-3 mr-1" />
                          3.2%
                        </div>
                        <span className="text-gray-400 text-xs ml-2">vs last month</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-gray-400 text-sm">Body Fat</p>
                          <h3 className="text-2xl font-semibold text-white mt-1">18.5%</h3>
                        </div>
                        <div className="bg-blue-500/20 p-3 rounded-full">
                          <Scale className="h-6 w-6 text-blue-500" />
                        </div>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="bg-green-500/20 text-green-500 text-xs rounded-full px-2 py-1 flex items-center">
                          <ArrowUp className="h-3 w-3 mr-1" />
                          2.1%
                        </div>
                        <span className="text-gray-400 text-xs ml-2">vs last month</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-gray-400 text-sm">Workouts</p>
                          <h3 className="text-2xl font-semibold text-white mt-1">24</h3>
                        </div>
                        <div className="bg-green-500/20 p-3 rounded-full">
                          <Dumbbell className="h-6 w-6 text-green-500" />
                        </div>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="bg-green-500/20 text-green-500 text-xs rounded-full px-2 py-1 flex items-center">
                          <ArrowUp className="h-3 w-3 mr-1" />
                          16%
                        </div>
                        <span className="text-gray-400 text-xs ml-2">vs last month</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-gray-400 text-sm">Nutrition Score</p>
                          <h3 className="text-2xl font-semibold text-white mt-1">82/100</h3>
                        </div>
                        <div className="bg-purple-500/20 p-3 rounded-full">
                          <Utensils className="h-6 w-6 text-purple-500" />
                        </div>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="bg-green-500/20 text-green-500 text-xs rounded-full px-2 py-1 flex items-center">
                          <ArrowUp className="h-3 w-3 mr-1" />
                          5%
                        </div>
                        <span className="text-gray-400 text-xs ml-2">vs last month</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 lg:col-span-2">
                    <CardHeader>
                      <CardTitle className="text-white">Weight Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80">
                        <ProgressChart />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white">Recent Achievements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { 
                            title: "10 Workouts Completed", 
                            date: "May 15, 2023", 
                            icon: <Dumbbell className="h-5 w-5 text-brand-yellow" /> 
                          },
                          { 
                            title: "Weight Goal Reached", 
                            date: "April 28, 2023", 
                            icon: <Scale className="h-5 w-5 text-green-500" /> 
                          },
                          { 
                            title: "30 Days Streak", 
                            date: "April 10, 2023", 
                            icon: <CalendarRange className="h-5 w-5 text-blue-500" /> 
                          },
                          { 
                            title: "First Coaching Session", 
                            date: "March 22, 2023", 
                            icon: <Clock className="h-5 w-5 text-purple-500" /> 
                          }
                        ].map((achievement, index) => (
                          <div key={index} className="flex items-start">
                            <div className="bg-white/10 p-2 rounded-full mr-3">
                              {achievement.icon}
                            </div>
                            <div>
                              <h4 className="text-white font-medium">{achievement.title}</h4>
                              <p className="text-gray-400 text-sm">{achievement.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Button variant="outline" className="w-full mt-6 border-white/10 text-white hover:bg-white/10">
                        View All Achievements
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="weight" className="mt-6">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Weight Tracking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ProgressChart />
                    </div>
                    
                    <div className="mt-6 space-y-4">
                      <h3 className="text-lg font-medium text-white">Weight History</h3>
                      
                      <div className="space-y-2">
                        {[
                          { date: "May 22, 2023", weight: "185 lbs", change: "+0.5 lbs" },
                          { date: "May 15, 2023", weight: "184.5 lbs", change: "-1.2 lbs" },
                          { date: "May 8, 2023", weight: "185.7 lbs", change: "-0.8 lbs" },
                          { date: "May 1, 2023", weight: "186.5 lbs", change: "-1.5 lbs" },
                          { date: "April 24, 2023", weight: "188 lbs", change: "-" }
                        ].map((entry, index) => (
                          <div key={index} className="flex justify-between items-center border-b border-white/10 pb-2 last:border-0">
                            <span className="text-gray-300">{entry.date}</span>
                            <span className="text-white font-medium">{entry.weight}</span>
                            <span className={`text-sm ${entry.change.startsWith("+") ? "text-red-400" : entry.change === "-" ? "text-gray-400" : "text-green-400"}`}>
                              {entry.change}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="measurements" className="mt-6">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Body Measurements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      {[
                        { label: "Chest", current: "42 in", previous: "44 in", change: "-2 in" },
                        { label: "Waist", current: "34 in", previous: "36 in", change: "-2 in" },
                        { label: "Hips", current: "40 in", previous: "41 in", change: "-1 in" },
                        { label: "Arms", current: "15 in", previous: "14.5 in", change: "+0.5 in" },
                        { label: "Thighs", current: "24 in", previous: "24.5 in", change: "-0.5 in" },
                        { label: "Calves", current: "16 in", previous: "15.5 in", change: "+0.5 in" }
                      ].map((measurement, index) => (
                        <Card key={index} className="bg-white/10 border-white/5">
                          <CardContent className="p-4">
                            <h3 className="text-lg font-medium text-white">{measurement.label}</h3>
                            <div className="flex justify-between items-center mt-2">
                              <div>
                                <p className="text-xs text-gray-400">Current</p>
                                <p className="text-white font-semibold">{measurement.current}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-400">Previous</p>
                                <p className="text-gray-300">{measurement.previous}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-400">Change</p>
                                <p className={`font-medium ${measurement.change.startsWith("+") ? "text-green-400" : "text-brand-yellow"}`}>
                                  {measurement.change}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="strength" className="mt-6">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Strength Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        { 
                          exercise: "Bench Press", 
                          current: "185 lbs", 
                          progress: [
                            { date: "May 20", weight: "185 lbs" },
                            { date: "May 13", weight: "180 lbs" },
                            { date: "May 6", weight: "175 lbs" },
                            { date: "Apr 29", weight: "170 lbs" }
                          ] 
                        },
                        { 
                          exercise: "Squats", 
                          current: "225 lbs", 
                          progress: [
                            { date: "May 18", weight: "225 lbs" },
                            { date: "May 11", weight: "215 lbs" },
                            { date: "May 4", weight: "205 lbs" },
                            { date: "Apr 27", weight: "195 lbs" }
                          ] 
                        },
                        { 
                          exercise: "Deadlift", 
                          current: "275 lbs", 
                          progress: [
                            { date: "May 22", weight: "275 lbs" },
                            { date: "May 15", weight: "265 lbs" },
                            { date: "May 8", weight: "255 lbs" },
                            { date: "May 1", weight: "245 lbs" }
                          ] 
                        }
                      ].map((exercise, index) => (
                        <div key={index} className="space-y-3">
                          <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium text-white">{exercise.exercise}</h3>
                            <div className="bg-brand-yellow/20 text-brand-yellow text-sm rounded-full px-3 py-1">
                              Current: {exercise.current}
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-4 gap-2">
                            {exercise.progress.map((entry, entryIndex) => (
                              <div key={entryIndex} className="bg-white/10 p-3 rounded-lg text-center">
                                <p className="text-xs text-gray-400">{entry.date}</p>
                                <p className="text-white font-medium">{entry.weight}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
