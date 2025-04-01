
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Sidebar from "@/components/dashboard/Sidebar";
import StatCards from "@/components/dashboard/StatCards";
import ProgressChart from "@/components/dashboard/ProgressChart";
import { ArrowRight, CheckCircle2, Calendar, Bell, Settings, BadgeCheck } from "lucide-react";

const DashboardPage = () => {
  const [timeRange, setTimeRange] = useState("week");

  return (
    <div className="min-h-screen bg-brand-blue">
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1 md:ml-64">
          <main className="p-6 md:p-10">
            <div className="mb-8 mt-10 md:mt-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-display font-bold text-white">Welcome, Tarun</h1>
                  <p className="text-gray-300">Here's an overview of your fitness journey</p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </Button>
                  <Link to="/settings">
                    <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <StatCards />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
              <div className="lg:col-span-2">
                <Card className="bg-white/5 border-white/10">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-white">Progress Overview</CardTitle>
                      <CardDescription className="text-gray-400">Track your key metrics over time</CardDescription>
                    </div>
                    <div>
                      <Tabs
                        value={timeRange}
                        onValueChange={setTimeRange}
                        className="w-full"
                      >
                        <TabsList className="bg-brand-blue/50 border border-white/10">
                          <TabsTrigger
                            value="week"
                            className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                          >
                            Week
                          </TabsTrigger>
                          <TabsTrigger
                            value="month"
                            className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                          >
                            Month
                          </TabsTrigger>
                          <TabsTrigger
                            value="quarter"
                            className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                          >
                            3 Months
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ProgressChart timeRange={timeRange} />
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Today's Plan</CardTitle>
                    <CardDescription className="text-gray-400">Your workout and nutrition</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-brand-blue/50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                          <Calendar size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">Full Body Workout</h3>
                          <p className="text-xs text-gray-400">4 exercises • 30 minutes</p>
                        </div>
                      </div>
                      <Link to="/plan">
                        <Button className="w-full bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold">
                          Start Workout
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                    
                    <div className="border-t border-white/10 pt-4">
                      <h3 className="text-white font-semibold mb-2">Today's Meals</h3>
                      <div className="space-y-3">
                        {[
                          { time: "8:00 AM", meal: "Protein-Packed Breakfast", completed: true },
                          { time: "10:30 AM", meal: "Mid-Morning Snack", completed: true },
                          { time: "1:00 PM", meal: "Balanced Lunch", completed: false },
                          { time: "4:30 PM", meal: "Energizing Snack", completed: false },
                          { time: "7:30 PM", meal: "Light Dinner", completed: false },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className={`h-6 w-6 rounded-full flex items-center justify-center ${
                                item.completed ? "bg-green-500/20 text-green-400" : "bg-white/10 text-white"
                              }`}>
                                {item.completed ? (
                                  <CheckCircle2 size={14} />
                                ) : (
                                  <span className="text-xs">{index + 1}</span>
                                )}
                              </div>
                              <div>
                                <p className="text-sm text-white">{item.meal}</p>
                                <p className="text-xs text-gray-400">{item.time}</p>
                              </div>
                            </div>
                            {!item.completed && (
                              <Button variant="ghost" size="sm" className="h-6 text-xs text-gray-300 hover:text-white hover:bg-white/5">
                                Log
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Upcoming Milestones</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: "Complete 5 workouts", progress: 60, icon: <CheckCircle2 size={18} /> },
                      { name: "Track 7 consecutive days", progress: 85, icon: <Calendar size={18} /> },
                      { name: "First weight goal", progress: 40, icon: <BadgeCheck size={18} /> },
                    ].map((milestone, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2 text-white">
                            <div className="text-brand-yellow">{milestone.icon}</div>
                            <span className="text-sm">{milestone.name}</span>
                          </div>
                          <span className="text-sm text-gray-400">{milestone.progress}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-brand-yellow rounded-full"
                            style={{ width: `${milestone.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
