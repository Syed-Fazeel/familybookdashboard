import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

// Mock data
const mockUsers = [
  {
    id: '1',
    fullName: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    role: 'user',
    bookings: 12,
    status: 'active',
    joined: 'Jan 15, 2024',
  },
  {
    id: '2',
    fullName: 'Michael Chen',
    email: 'michael.c@email.com',
    role: 'user',
    bookings: 8,
    status: 'active',
    joined: 'Feb 3, 2024',
  },
  {
    id: '3',
    fullName: 'Emily Davis',
    email: 'emily.d@email.com',
    role: 'user',
    bookings: 24,
    status: 'active',
    joined: 'Dec 12, 2023',
  },
];

export default function AdminUsers() {
  const [searchQuery, setSearchQuery] = useState("");

  const columns = [
    { key: 'fullName', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'bookings', header: 'Total Bookings' },
    { key: 'joined', header: 'Joined Date' },
    {
      key: 'status',
      header: 'Status',
      render: (item: any) => (
        <Badge variant={item.status === 'active' ? 'default' : 'secondary'}>
          {item.status}
        </Badge>
      ),
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (item: any) => (
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => console.log('View', item.id)} data-testid={`button-view-${item.id}`}>
            View
          </Button>
          <Button 
            size="sm" 
            variant="destructive" 
            onClick={() => console.log('Deactivate', item.id)}
            data-testid={`button-deactivate-${item.id}`}
          >
            Deactivate
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">User Management</h1>
        <p className="text-muted-foreground">View and manage user accounts</p>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
            data-testid="input-search-users"
          />
        </div>
      </div>

      <DataTable columns={columns} data={mockUsers} currentPage={1} totalPages={5} />
    </div>
  );
}
