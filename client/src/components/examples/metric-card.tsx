import { MetricCard } from '../metric-card';
import { Users } from 'lucide-react';

export default function MetricCardExample() {
  return (
    <div className="p-6 bg-background">
      <MetricCard 
        title="Total Users" 
        value="2,547" 
        icon={Users} 
        trend="+12.5% from last month" 
        trendUp={true}
      />
    </div>
  );
}
