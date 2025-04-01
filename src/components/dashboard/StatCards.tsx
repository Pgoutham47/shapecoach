
import { 
  Activity, 
  Flame, 
  Dumbbell, 
  Heart,
  TrendingDown,
  ArrowUpRight
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

const StatCard = ({ title, value, description, icon, trend, trendValue }: StatCardProps) => {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-200">{title}</CardTitle>
        <div className="h-8 w-8 rounded-full bg-brand-blue/80 flex items-center justify-center text-brand-yellow">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-white">{value}</div>
        {(description || trend) && (
          <div className="flex items-center mt-1">
            {trend && (
              <div className={`flex items-center text-xs font-medium mr-2 ${
                trend === 'up' ? 'text-green-400' : 
                trend === 'down' ? 'text-red-400' : 'text-gray-400'
              }`}>
                {trend === 'up' ? (
                  <ArrowUpRight size={14} className="mr-1" />
                ) : trend === 'down' ? (
                  <TrendingDown size={14} className="mr-1" />
                ) : null}
                {trendValue}
              </div>
            )}
            {description && (
              <p className="text-xs text-gray-400">{description}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Total Workouts"
        value="12"
        description="This month"
        icon={<Dumbbell size={18} />}
        trend="up"
        trendValue="4 more than last month"
      />
      <StatCard
        title="Calories Burned"
        value="1,248"
        description="Weekly average"
        icon={<Flame size={18} />}
        trend="up"
        trendValue="18% increase"
      />
      <StatCard
        title="Current Weight"
        value="74.2 kg"
        description="Started at 75 kg"
        icon={<TrendingDown size={18} />}
        trend="down"
        trendValue="-0.8 kg"
      />
      <StatCard
        title="Avg. Heart Rate"
        value="72 bpm"
        description="Resting"
        icon={<Heart size={18} />}
        trend="down"
        trendValue="-3 bpm"
      />
    </div>
  );
};

export default StatCards;
