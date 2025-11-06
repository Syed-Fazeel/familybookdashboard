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
const mockPages = [
  {
    id: '1',
    title: 'About Us',
    slug: 'about',
    type: 'page',
    status: 'published',
    updated: 'Jun 10, 2024',
  },
  {
    id: '2',
    title: 'Terms of Service',
    slug: 'terms',
    type: 'page',
    status: 'published',
    updated: 'May 15, 2024',
  },
  {
    id: '3',
    title: 'Summer Activity Guide',
    slug: 'summer-guide',
    type: 'blog',
    status: 'published',
    updated: 'Jun 12, 2024',
  },
  {
    id: '4',
    title: 'FAQ',
    slug: 'faq',
    type: 'page',
    status: 'draft',
    updated: 'Jun 14, 2024',
  },
];

export default function AdminCMS() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const columns = [
    { key: 'title', header: 'Title' },
    { key: 'slug', header: 'Slug' },
    {
      key: 'type',
      header: 'Type',
      render: (item: any) => (
        <Badge variant="secondary">{item.type}</Badge>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      render: (item: any) => (
        <Badge variant={item.status === 'published' ? 'default' : 'secondary'}>
          {item.status}
        </Badge>
      ),
    },
    { key: 'updated', header: 'Last Updated' },
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
          <h1 className="text-3xl font-bold mb-2">Content Management</h1>
          <p className="text-muted-foreground">Manage pages, blog posts, and FAQs</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button data-testid="button-add-page">
              <Plus className="w-4 h-4 mr-2" />
              Add Content
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Content</DialogTitle>
              <DialogDescription>
                Add a new page or blog post
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="content-type">Content Type</Label>
                <Select>
                  <SelectTrigger id="content-type" data-testid="select-content-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="page">Page</SelectItem>
                    <SelectItem value="blog">Blog Post</SelectItem>
                    <SelectItem value="faq">FAQ</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="page-title">Title</Label>
                <Input id="page-title" placeholder="Enter title" data-testid="input-page-title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="page-slug">Slug (URL)</Label>
                <Input id="page-slug" placeholder="url-slug" data-testid="input-page-slug" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="page-content">Content</Label>
                <Textarea 
                  id="page-content" 
                  placeholder="Enter content..." 
                  className="min-h-[200px]"
                  data-testid="input-page-content"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Save as Draft
              </Button>
              <Button onClick={() => {
                console.log('Publish content');
                setIsAddDialogOpen(false);
              }} data-testid="button-publish-content">
                Publish
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <DataTable columns={columns} data={mockPages} currentPage={1} totalPages={2} />
    </div>
  );
}
