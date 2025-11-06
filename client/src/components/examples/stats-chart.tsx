import { StatsChart } from '../stats-chart';

const mockData = [
  { month: 'Jan', bookings: 45 },
  { month: 'Feb', bookings: 62 },
  { month: 'Mar', bookings: 78 },
  { month: 'Apr', bookings: 95 },
  { month: 'May', bookings: 112 },
  { month: 'Jun', bookings: 128 },
];

export default function StatsChartExample() {
  return (
    <div className="p-6 bg-background">
      <StatsChart
        title="Monthly Bookings"
        data={mockData}
        dataKey="bookings"
        xAxisKey="month"
        type="line"
      />
    </div>
  );
}
