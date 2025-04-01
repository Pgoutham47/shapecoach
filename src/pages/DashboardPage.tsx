
import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import StatCards from "@/components/dashboard/StatCards";
import ProgressChart from "@/components/dashboard/ProgressChart";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-brand-blue">
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1 md:ml-64">
          <main className="p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-display font-bold text-white mb-2">
                Welcome, Tarun!
              </h1>
              <p className="text-gray-300">
                Here's an overview of your fitness journey
              </p>
            </div>
            
            <StatCards />
            
            <div className="mt-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Your Progress</h2>
                <ProgressChart />
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Upcoming Workouts</h2>
                <ul className="space-y-4">
                  {[
                    { day: "Today", workout: "Full Body Strength", duration: "45 min" },
                    { day: "Tomorrow", workout: "Core & Cardio", duration: "30 min" },
                    { day: "Wednesday", workout: "Upper Body Focus", duration: "40 min" }
                  ].map((item, index) => (
                    <li key={index} className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0">
                      <div>
                        <p className="text-white font-medium">{item.workout}</p>
                        <p className="text-gray-400 text-sm">{item.day}</p>
                      </div>
                      <span className="text-brand-yellow">{item.duration}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Nutrition Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Daily Calories</span>
                    <span className="text-white font-medium">2,100 kcal</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Protein</span>
                    <span className="text-white font-medium">150g (28%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Carbs</span>
                    <span className="text-white font-medium">210g (40%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Fats</span>
                    <span className="text-white font-medium">75g (32%)</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-white font-medium">Daily Water Goal</p>
                    <div className="mt-2 w-full bg-white/10 rounded-full h-2.5">
                      <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                    <div className="flex justify-between mt-1 text-xs text-gray-400">
                      <span>0L</span>
                      <span>2.1L / 3L</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
