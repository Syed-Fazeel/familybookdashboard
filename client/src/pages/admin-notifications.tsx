import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
const mockNotifications = [
  {
    id: '1',
    title: 'Summer Camp Registration Open',
    message: 'Register now for our summer dance camp!',
    targetType: 'All Users',
    sentAt: 'Jun 15, 2024 10:30 AM',
  },
  {
    id: '2',
    title: 'New Business Added',
    message: 'Check out Music Studio Pro - now on FamilyConnect',
    targetType: 'All Users',
    sentAt: 'Jun 14, 2024 2:15 PM',
  },
  {
    id: '3',
    title: 'Booking Confirmed',
    message: 'Your booking has been confirmed',
    targetType: 'Specific Users',
    sentAt: 'Jun 13, 2024 9:45 AM',
  },
];

export default function AdminNotifications() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Notifications</h1>
          <p className="text-muted-foreground">Send notifications to users</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button data-testid="button-send-notification">
              <Plus className="w-4 h-4 mr-2" />
              Send Notification
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Send Push Notification</DialogTitle>
              <DialogDescription>
                Send a notification to targeted users
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="notif-title">Title</Label>
                <Input id="notif-title" placeholder="Notification title" data-testid="input-notification-title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notif-message">Message</Label>
                <Textarea 
                  id="notif-message" 
                  placeholder="Notification message" 
                  data-testid="input-notification-message"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="target-type">Target Audience</Label>
                <Select>
                  <SelectTrigger id="target-type" data-testid="select-target-type">
                    <SelectValue placeholder="Select audience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Users</SelectItem>
                    <SelectItem value="businesses">All Businesses</SelectItem>
                    <SelectItem value="specific">Specific Users</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => {
                console.log('Send notification');
                setIsAddDialogOpen(false);
              }} data-testid="button-submit-notification">
                Send Now
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Notifications</h2>
        {mockNotifications.map((notif) => (
          <Card key={notif.id} data-testid={`card-notification-${notif.id}`}>
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-base">{notif.title}</CardTitle>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{notif.sentAt}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">{notif.message}</p>
              <p className="text-xs text-muted-foreground">Target: {notif.targetType}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
