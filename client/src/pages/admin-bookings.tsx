import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data
const mockBookings = [
  {
    id: '1',
    user: 'Sarah Johnson',
    business: 'Dance Academy Plus',
    service: 'Ballet Class',
    date: 'Jun 15, 2024',
    price: '$45.00',
    commission: '$4.50',
    status: 'completed',
  },
  {
    id: '2',
    user: 'Michael Chen',
    business: 'Music Studio Pro',
    service: 'Piano Lesson',
    date: 'Jun 18, 2024',
    price: '$60.00',
    commission: '$7.20',
    status: 'pending',
  },
  {
    id: '3',
    user: 'Emily Davis',
    business: 'Pet Grooming Central',
    service: 'Dog Grooming',
    date: 'Jun 20, 2024',
    price: '$85.00',
    commission: '$12.75',
    status: 'completed',
  },
];

export default function AdminBookings() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'user', header: 'User' },
    { key: 'business', header: 'Business' },
    { key: 'service', header: 'Service' },
    { key: 'date', header: 'Date' },
    { key: 'price', header: 'Price' },
    { key: 'commission', header: 'Commission' },
    {
      key: 'status',
      header: 'Status',
      render: (item: any) => (
        <Badge variant={item.status === 'completed' ? 'default' : item.status === 'pending' ? 'secondary' : 'destructive'}>
          {item.status}
        </Badge>
      ),
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (item: any) => (
        <Button size="sm" variant="outline" onClick={() => console.log('View details', item.id)} data-testid={`button-view-${item.id}`}>
          Details
        </Button>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Booking Management</h1>
        <p className="text-muted-foreground">Track and manage all bookings</p>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search bookings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
            data-testid="input-search-bookings"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48" data-testid="select-status-filter">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <DataTable columns={columns} data={mockBookings} currentPage={1} totalPages={8} />
    </div>
  );
}
