import { MetricCard } from "@/components/metric-card";
import { StatsChart } from "@/components/stats-chart";
import { Users, Building2, Calendar, DollarSign, TrendingUp, Megaphone } from "lucide-react";

// Mock data
const revenueData = [
  { month: 'Jan', revenue: 12500 },
  { month: 'Feb', revenue: 15800 },
  { month: 'Mar', revenue: 18200 },
  { month: 'Apr', revenue: 21500 },
  { month: 'May', revenue: 24800 },
  { month: 'Jun', revenue: 28900 },
];

const bookingsData = [
  { category: 'Dance', bookings: 145 },
  { category: 'Music', bookings: 98 },
  { category: 'Art', bookings: 76 },
  { category: 'Sports', bookings: 124 },
  { category: 'Pets', bookings: 52 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to Family Book Admin Panel</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Users"
          value="2,547"
          icon={Users}
          trend="+12.5% from last month"
          trendUp={true}
        />
        <MetricCard
          title="Total Businesses"
          value="342"
          icon={Building2}
          trend="+8.2% from last month"
          trendUp={true}
        />
        <MetricCard
          title="Total Bookings"
          value="1,823"
          icon={Calendar}
          trend="+23.1% from last month"
          trendUp={true}
        />
        <MetricCard
          title="Revenue"
          value="$28,900"
          icon={DollarSign}
          trend="+16.4% from last month"
          trendUp={true}
        />
        <MetricCard
          title="Active Ads"
          value="24"
          icon={Megaphone}
        />
        <MetricCard
          title="Commission Earned"
          value="$4,335"
          icon={TrendingUp}
          trend="+19.2% from last month"
          trendUp={true}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <StatsChart
          title="Revenue Trend"
          data={revenueData}
          dataKey="revenue"
          xAxisKey="month"
          type="line"
        />
        <StatsChart
          title="Bookings by Category"
          data={bookingsData}
          dataKey="bookings"
          xAxisKey="category"
          type="bar"
        />
      </div>
    </div>
  );
}
