import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryIconCardProps {
  name: string;
  icon: LucideIcon;
  count: number;
  onClick?: () => void;
}

export function CategoryIconCard({ name, icon: Icon, count, onClick }: CategoryIconCardProps) {
  return (
    <Card 
      className="hover-elevate active-elevate-2 cursor-pointer" 
      onClick={onClick}
      data-testid={`card-category-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-semibold text-base mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground">{count} activities</p>
      </CardContent>
    </Card>
  );
}
