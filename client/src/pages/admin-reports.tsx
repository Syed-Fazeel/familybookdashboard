import { StatsChart } from "@/components/stats-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";

// Mock data
const revenueData = [
  { month: 'Jan', revenue: 12500, bookings: 145 },
  { month: 'Feb', revenue: 15800, bookings: 182 },
  { month: 'Mar', revenue: 18200, bookings: 198 },
  { month: 'Apr', revenue: 21500, bookings: 224 },
  { month: 'May', revenue: 24800, bookings: 267 },
  { month: 'Jun', revenue: 28900, bookings: 312 },
];

const categoryData = [
  { category: 'Dance', revenue: 8500, bookings: 145 },
  { category: 'Music', revenue: 6200, bookings: 98 },
  { category: 'Art', revenue: 4800, bookings: 76 },
  { category: 'Sports', revenue: 7100, bookings: 124 },
  { category: 'Pets', revenue: 2300, bookings: 52 },
];

const topBusinesses = [
  { name: 'Dance Academy Plus', bookings: 145, revenue: '$12,850' },
  { name: 'Music Studio Pro', bookings: 98, revenue: '$8,920' },
  { name: 'Sports Center Elite', bookings: 124, revenue: '$10,450' },
  { name: 'Art Workshop Creative', bookings: 76, revenue: '$6,840' },
];

export default function AdminReports() {
  const [period, setPeriod] = useState("monthly");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Reports & Analytics</h1>
          <p className="text-muted-foreground">Track performance and insights</p>
        </div>
        <div className="flex gap-2">
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-40" data-testid="select-period">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" data-testid="button-export">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
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
          title="Bookings Trend"
          data={revenueData}
          dataKey="bookings"
          xAxisKey="month"
          type="bar"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <StatsChart
          title="Revenue by Category"
          data={categoryData}
          dataKey="revenue"
          xAxisKey="category"
          type="bar"
        />
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Businesses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topBusinesses.map((business, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{business.name}</p>
                    <p className="text-sm text-muted-foreground">{business.bookings} bookings</p>
                  </div>
                  <p className="font-semibold">{business.revenue}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
