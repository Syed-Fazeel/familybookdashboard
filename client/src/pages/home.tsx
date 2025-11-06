import { PublicHeader } from "@/components/public-header";
import { HeroSection } from "@/components/hero-section";
import { CategoryIconCard } from "@/components/category-icon-card";
import { BusinessCard } from "@/components/business-card";
import { Button } from "@/components/ui/button";
import { Music, Palette, Dumbbell, Dog, PartyPopper, Guitar } from "lucide-react";
import { Link } from "wouter";

// Mock data
const categories = [
  { name: 'Music Lessons', icon: Music, count: 45 },
  { name: 'Art Classes', icon: Palette, count: 32 },
  { name: 'Sports & Fitness', icon: Dumbbell, count: 58 },
  { name: 'Pet Services', icon: Dog, count: 28 },
  { name: 'Family Events', icon: PartyPopper, count: 41 },
  { name: 'Dance Classes', icon: Guitar, count: 52 },
];

const featuredBusinesses = [
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
    isFeatured: true,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <PublicHeader />
      <HeroSection onSearch={(query, category) => console.log('Search:', { query, category })} />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Browse by Category</h2>
          <p className="text-muted-foreground">Find the perfect activity for your family</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories.map((category, idx) => (
            <CategoryIconCard
              key={idx}
              name={category.name}
              icon={category.icon}
              count={category.count}
              onClick={() => console.log('Category clicked:', category.name)}
            />
          ))}
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Activities</h2>
              <p className="text-muted-foreground">Top-rated experiences in your area</p>
            </div>
            <Link href="/browse">
              <Button variant="outline" data-testid="button-view-all">View All</Button>
            </Link>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredBusinesses.map((business) => (
              <BusinessCard
                key={business.id}
                {...business}
              />
            ))}
          </div>
        </div>
      </div>

      <footer className="border-t bg-muted/30 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="font-bold text-lg mb-3">FamilyConnect</h3>
              <p className="text-sm text-muted-foreground">
                Connecting families with amazing local activities and services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">For Families</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/browse" className="hover-elevate px-1 py-0.5 rounded-sm inline-block">Browse Activities</a></li>
                <li><a href="/how-it-works" className="hover-elevate px-1 py-0.5 rounded-sm inline-block">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">For Businesses</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/for-businesses" className="hover-elevate px-1 py-0.5 rounded-sm inline-block">List Your Business</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/terms" className="hover-elevate px-1 py-0.5 rounded-sm inline-block">Terms of Service</a></li>
                <li><a href="/privacy" className="hover-elevate px-1 py-0.5 rounded-sm inline-block">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 FamilyConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
