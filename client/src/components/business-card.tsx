import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star } from "lucide-react";

interface BusinessCardProps {
  id: string;
  name: string;
  category: string;
  city: string;
  state: string;
  imageUrl?: string;
  rating?: number;
  reviewCount?: number;
  price?: string;
  isFeatured?: boolean;
  onBook?: () => void;
}

export function BusinessCard({
  id,
  name,
  category,
  city,
  state,
  imageUrl,
  rating,
  reviewCount,
  price,
  isFeatured,
  onBook,
}: BusinessCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate" data-testid={`card-business-${id}`}>
      <div className="aspect-[4/3] bg-muted relative">
        {imageUrl && (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        )}
        {isFeatured && (
          <Badge className="absolute top-2 right-2" variant="default">
            Featured
          </Badge>
        )}
      </div>
      <CardHeader className="space-y-1">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg" data-testid={`text-business-name-${id}`}>{name}</CardTitle>
          {rating && (
            <div className="flex items-center gap-1 text-sm">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{rating}</span>
              {reviewCount && (
                <span className="text-muted-foreground">({reviewCount})</span>
              )}
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Badge variant="secondary" className="text-xs">{category}</Badge>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>{city}, {state}</span>
          </div>
        </div>
      </CardHeader>
      {price && (
        <CardContent>
          <p className="text-lg font-bold" data-testid={`text-price-${id}`}>{price}</p>
        </CardContent>
      )}
      <CardFooter>
        <Button className="w-full" onClick={onBook} data-testid={`button-book-${id}`}>
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}
