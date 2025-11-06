import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Music, Palette, Dumbbell, Dog, PartyPopper } from "lucide-react";
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
import { useState } from "react";

// Mock data
const mockCategories = [
  {
    id: '1',
    name: 'Music Lessons',
    icon: Music,
    description: 'Piano, guitar, violin, and more',
    businesses: 45,
    subcategories: ['Piano', 'Guitar', 'Violin', 'Drums'],
  },
  {
    id: '2',
    name: 'Art Classes',
    icon: Palette,
    description: 'Painting, drawing, and creative arts',
    businesses: 32,
    subcategories: ['Painting', 'Drawing', 'Pottery'],
  },
  {
    id: '3',
    name: 'Sports & Fitness',
    icon: Dumbbell,
    description: 'Sports training and fitness programs',
    businesses: 58,
    subcategories: ['Soccer', 'Swimming', 'Martial Arts'],
  },
  {
    id: '4',
    name: 'Pet Services',
    icon: Dog,
    description: 'Grooming, training, and pet care',
    businesses: 28,
    subcategories: ['Grooming', 'Training', 'Daycare'],
  },
  {
    id: '5',
    name: 'Family Events',
    icon: PartyPopper,
    description: 'Parties, celebrations, and special events',
    businesses: 41,
    subcategories: ['Birthday Parties', 'Holiday Events'],
  },
];

export default function AdminCategories() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Category Management</h1>
          <p className="text-muted-foreground">Manage categories and subcategories</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button data-testid="button-add-category">
              <Plus className="w-4 h-4 mr-2" />
              Add Category
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Category</DialogTitle>
              <DialogDescription>
                Create a new category for activities and services
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="category-name">Category Name</Label>
                <Input id="category-name" placeholder="e.g., Dance Classes" data-testid="input-category-name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category-description">Description</Label>
                <Textarea id="category-description" placeholder="Brief description" data-testid="input-category-description" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => {
                console.log('Add category');
                setIsAddDialogOpen(false);
              }} data-testid="button-submit-category">
                Add Category
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockCategories.map((category) => (
          <Card key={category.id} data-testid={`card-category-${category.id}`}>
            <CardHeader className="flex flex-row items-start justify-between gap-2 space-y-0">
              <div className="space-y-1">
                <CardTitle className="flex items-center gap-2">
                  <category.icon className="w-5 h-5 text-primary" />
                  {category.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <span className="font-semibold">{category.businesses}</span> businesses
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2">Subcategories:</p>
                <div className="flex flex-wrap gap-1">
                  {category.subcategories.map((sub, idx) => (
                    <span key={idx} className="text-xs bg-secondary px-2 py-1 rounded-md">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1" onClick={() => console.log('Edit', category.id)} data-testid={`button-edit-${category.id}`}>
                  Edit
                </Button>
                <Button size="sm" variant="destructive" onClick={() => console.log('Delete', category.id)} data-testid={`button-delete-${category.id}`}>
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
