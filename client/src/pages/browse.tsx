import { PublicHeader } from "@/components/public-header";
import { BusinessCard } from "@/components/business-card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";

// Mock data
const allBusinesses = [
  {
    id: '1',
    name: 'Dance Academy Plus',
    category: 'Dance Classes',
    city: 'Austin',
    state: 'TX',
    rating: 4.8,
    reviewCount: 124,
    price: '$45/class',
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Music Studio Pro',
    category: 'Music Lessons',
    city: 'Dallas',
    state: 'TX',
    rating: 4.9,
    reviewCount: 98,
    price: '$60/lesson',
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Creative Art Workshop',
    category: 'Art Classes',
    city: 'Houston',
    state: 'TX',
    rating: 4.7,
    reviewCount: 76,
    price: '$35/class',
  },
  {
    id: '4',
    name: 'Sports Center Elite',
    category: 'Sports & Fitness',
    city: 'Austin',
    state: 'TX',
    rating: 4.6,
    reviewCount: 89,
    price: '$50/session',
  },
  {
    id: '5',
    name: 'Pet Grooming Central',
    category: 'Pet Services',
    city: 'Dallas',
    state: 'TX',
    rating: 4.9,
    reviewCount: 156,
    price: '$85/service',
  },
  {
    id: '6',
    name: 'Family Party Planners',
    category: 'Family Events',
    city: 'Houston',
    state: 'TX',
    rating: 4.8,
    reviewCount: 67,
    price: '$299/event',
  },
];

export default function Browse() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  return (
    <div className="min-h-screen">
      <PublicHeader />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse Activities</h1>
          <p className="text-muted-foreground">Discover amazing experiences for your family</p>
        </div>

        <div className="bg-card p-4 rounded-lg border mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search for activities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
                data-testid="input-search-activities"
              />
            </div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="md:w-48" data-testid="select-category-filter">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="dance">Dance Classes</SelectItem>
                <SelectItem value="music">Music Lessons</SelectItem>
                <SelectItem value="art">Art Classes</SelectItem>
                <SelectItem value="sports">Sports & Fitness</SelectItem>
                <SelectItem value="pets">Pet Services</SelectItem>
                <SelectItem value="events">Family Events</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="md:w-48" data-testid="select-sort">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allBusinesses.map((business) => (
            <BusinessCard
              key={business.id}
              {...business}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
