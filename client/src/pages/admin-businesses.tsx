import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data
const mockBusinesses = [
  {
    id: '1',
    name: 'Dance Academy Plus',
    email: 'contact@danceacademy.com',
    category: 'Dance Classes',
    city: 'Austin',
    status: 'approved',
    commission: '10%',
  },
  {
    id: '2',
    name: 'Music Studio Pro',
    email: 'info@musicstudio.com',
    category: 'Music Lessons',
    city: 'Dallas',
    status: 'pending',
    commission: '12%',
  },
  {
    id: '3',
    name: 'Pet Grooming Central',
    email: 'contact@petgrooming.com',
    category: 'Pet Services',
    city: 'Houston',
    status: 'approved',
    commission: '15%',
  },
];

export default function AdminBusinesses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const columns = [
    { key: 'name', header: 'Business Name' },
    { key: 'email', header: 'Email' },
    { key: 'category', header: 'Category' },
    { key: 'city', header: 'City' },
    {
      key: 'status',
      header: 'Status',
      render: (item: any) => (
        <Badge variant={item.status === 'approved' ? 'default' : item.status === 'pending' ? 'secondary' : 'destructive'}>
          {item.status}
        </Badge>
      ),
    },
    { key: 'commission', header: 'Commission' },
    {
      key: 'actions',
      header: 'Actions',
      render: (item: any) => (
        <div className="flex gap-2">
          {item.status === 'pending' && (
            <>
              <Button size="sm" onClick={() => console.log('Approve', item.id)} data-testid={`button-approve-${item.id}`}>
                Approve
              </Button>
              <Button size="sm" variant="destructive" onClick={() => console.log('Reject', item.id)} data-testid={`button-reject-${item.id}`}>
                Reject
              </Button>
            </>
          )}
          {item.status === 'approved' && (
            <Button size="sm" variant="outline" onClick={() => console.log('Edit', item.id)} data-testid={`button-edit-${item.id}`}>
              Edit
            </Button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Business Management</h1>
          <p className="text-muted-foreground">Manage and approve business listings</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button data-testid="button-add-business">
              <Plus className="w-4 h-4 mr-2" />
              Add Business
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Business</DialogTitle>
              <DialogDescription>
                Manually add a new business to the platform
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="business-name">Business Name</Label>
                <Input id="business-name" placeholder="Enter business name" data-testid="input-business-name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="business-email">Email</Label>
                <Input id="business-email" type="email" placeholder="contact@business.com" data-testid="input-business-email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="business-category">Category</Label>
                <Select>
                  <SelectTrigger id="business-category" data-testid="select-business-category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dance">Dance Classes</SelectItem>
                    <SelectItem value="music">Music Lessons</SelectItem>
                    <SelectItem value="art">Art Classes</SelectItem>
                    <SelectItem value="pets">Pet Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="commission-rate">Commission Rate (%)</Label>
                <Input id="commission-rate" type="number" placeholder="10" data-testid="input-commission-rate" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => {
                console.log('Add business');
                setIsAddDialogOpen(false);
              }} data-testid="button-submit-business">
                Add Business
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search businesses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
            data-testid="input-search-businesses"
          />
        </div>
      </div>

      <DataTable columns={columns} data={mockBusinesses} currentPage={1} totalPages={3} />
    </div>
  );
}
