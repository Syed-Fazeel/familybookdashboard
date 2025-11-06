import { Button } from "@/components/ui/button";
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

interface HeroSectionProps {
  onSearch?: (query: string, category: string) => void;
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    console.log('Searching:', { searchQuery, category });
    onSearch?.(searchQuery, category);
  };

  return (
    <div className="relative bg-gradient-to-br from-primary/90 to-primary/70 text-primary-foreground">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=600&fit=crop')"
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Amazing Activities for Your Family
        </h1>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
          From dance classes to music lessons, pet grooming to family events - all in one place
        </p>
        <div className="max-w-3xl mx-auto bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <div className="flex flex-col md:flex-row gap-3">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="md:w-48" data-testid="select-category">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="dance">Dance Classes</SelectItem>
                <SelectItem value="music">Music Lessons</SelectItem>
                <SelectItem value="art">Art Classes</SelectItem>
                <SelectItem value="sports">Sports & Fitness</SelectItem>
                <SelectItem value="pets">Pet Services</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex-1 flex gap-2">
              <Input
                placeholder="Search for activities, services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1"
                data-testid="input-search"
              />
              <Button onClick={handleSearch} data-testid="button-search">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
