import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data
const mockAds = [
  {
    id: '1',
    title: 'Summer Dance Camp',
    business: 'Dance Academy Plus',
    startDate: 'Jun 1, 2024',
    endDate: 'Aug 31, 2024',
    status: 'active',
    clicks: 1245,
  },
  {
    id: '2',
    title: 'Free Trial Music Lesson',
    business: 'Music Studio Pro',
    startDate: 'Jun 15, 2024',
    endDate: 'Jul 15, 2024',
    status: 'active',
    clicks: 892,
  },
  {
    id: '3',
    title: 'Pet Grooming Special',
    business: 'Pet Grooming Central',
    startDate: 'May 1, 2024',
    endDate: 'May 31, 2024',
    status: 'expired',
    clicks: 567,
  },
];

export default function AdminAds() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const columns = [
    { key: 'title', header: 'Ad Title' },
    { key: 'business', header: 'Business' },
    { key: 'startDate', header: 'Start Date' },
    { key: 'endDate', header: 'End Date' },
    { key: 'clicks', header: 'Clicks' },
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
          <Button size="sm" variant="outline" onClick={() => console.log('Edit', item.id)} data-testid={`button-edit-${item.id}`}>
            Edit
          </Button>
          <Button size="sm" variant="destructive" onClick={() => console.log('Delete', item.id)} data-testid={`button-delete-${item.id}`}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Ads & Promotions</h1>
          <p className="text-muted-foreground">Manage promotional content and advertisements</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button data-testid="button-add-ad">
              <Plus className="w-4 h-4 mr-2" />
              Create Ad
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Advertisement</DialogTitle>
              <DialogDescription>
                Create a promotional ad or feature a business
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="ad-title">Ad Title</Label>
                <Input id="ad-title" placeholder="Enter ad title" data-testid="input-ad-title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ad-description">Description</Label>
                <Textarea id="ad-description" placeholder="Ad description" data-testid="input-ad-description" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ad-business">Select Business</Label>
                <Select>
                  <SelectTrigger id="ad-business" data-testid="select-ad-business">
                    <SelectValue placeholder="Choose a business" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Dance Academy Plus</SelectItem>
                    <SelectItem value="2">Music Studio Pro</SelectItem>
                    <SelectItem value="3">Pet Grooming Central</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input id="start-date" type="date" data-testid="input-start-date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <Input id="end-date" type="date" data-testid="input-end-date" />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => {
                console.log('Create ad');
                setIsAddDialogOpen(false);
              }} data-testid="button-submit-ad">
                Create Ad
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <DataTable columns={columns} data={mockAds} currentPage={1} totalPages={2} />
    </div>
  );
}
