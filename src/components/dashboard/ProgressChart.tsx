
import { useState } from "react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const generateWeightData = (days: number) => {
  const data = [];
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);
  
  let weight = 75;
  
  for (let i = 0; i <= days; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    
    // Simulate a slight weight variation with a downward trend
    const variation = (Math.random() - 0.5) * 0.6;
    weight -= 0.1 + variation;
    
    data.push({
      date: currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      weight: weight.toFixed(1),
    });
  }
  
  return data;
};

const generateCaloriesData = (days: number) => {
  const data = [];
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);
  
  for (let i = 0; i <= days; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    
    // Simulate calorie intake with weekend variations
    const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
    const baseCalories = isWeekend ? 2200 : 1900;
    const variation = Math.floor(Math.random() * 300);
    
    data.push({
      date: currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      consumed: baseCalories + variation,
      burned: 1800 + Math.floor(Math.random() * 400),
    });
  }
  
  return data;
};

const generateWorkoutData = (days: number) => {
  const data = [];
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);
  
  for (let i = 0; i <= days; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    
    // Simulate rest days and different workout durations
    const isRestDay = [0, 3].includes(currentDate.getDay());
    
    data.push({
      date: currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      duration: isRestDay ? 0 : 25 + Math.floor(Math.random() * 35),
      intensity: isRestDay ? 0 : 3 + Math.floor(Math.random() * 7),
    });
  }
  
  return data;
};

interface ProgressChartProps {
  timeRange: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-brand-blue/95 border border-white/10 p-3 rounded-md shadow-lg">
        <p className="font-medium text-white">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {entry.name}: {entry.value} {entry.unit || ''}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

const ProgressChart = ({ timeRange }: ProgressChartProps) => {
  const [activeTab, setActiveTab] = useState("weight");
  
  const dayCount = timeRange === "week" ? 7 : timeRange === "month" ? 30 : 90;
  
  const weightData = generateWeightData(dayCount);
  const caloriesData = generateCaloriesData(dayCount);
  const workoutData = generateWorkoutData(dayCount);
  
  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-white">Progress Tracking</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-brand-blue/50 border border-white/10">
            <TabsTrigger 
              value="weight" 
              className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
            >
              Weight
            </TabsTrigger>
            <TabsTrigger 
              value="calories" 
              className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
            >
              Calories
            </TabsTrigger>
            <TabsTrigger 
              value="workouts" 
              className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
            >
              Workouts
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="weight" className="mt-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={weightData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis 
                    dataKey="date" 
                    stroke="#888" 
                    tick={{ fill: '#ccc' }}
                  />
                  <YAxis 
                    stroke="#888" 
                    tick={{ fill: '#ccc' }}
                    domain={['dataMin - 1', 'dataMax + 1']}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="weight"
                    name="Weight"
                    stroke="#F5B41A"
                    strokeWidth={2}
                    dot={{ r: 4, strokeWidth: 1 }}
                    activeDot={{ r: 6 }}
                    unit="kg"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="calories" className="mt-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={caloriesData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis 
                    dataKey="date" 
                    stroke="#888" 
                    tick={{ fill: '#ccc' }}
                  />
                  <YAxis 
                    stroke="#888" 
                    tick={{ fill: '#ccc' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="consumed"
                    name="Consumed"
                    stroke="#F5B41A"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    unit="cal"
                  />
                  <Line
                    type="monotone"
                    dataKey="burned"
                    name="Burned"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    unit="cal"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="workouts" className="mt-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={workoutData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis 
                    dataKey="date" 
                    stroke="#888" 
                    tick={{ fill: '#ccc' }}
                  />
                  <YAxis 
                    stroke="#888" 
                    tick={{ fill: '#ccc' }}
                    yAxisId="left"
                  />
                  <YAxis 
                    orientation="right" 
                    stroke="#888" 
                    tick={{ fill: '#ccc' }}
                    yAxisId="right"
                    domain={[0, 10]}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="duration"
                    name="Duration"
                    stroke="#F5B41A"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    yAxisId="left"
                    unit="min"
                  />
                  <Line
                    type="monotone"
                    dataKey="intensity"
                    name="Intensity"
                    stroke="#EC4899"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    yAxisId="right"
                    unit="/10"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProgressChart;
