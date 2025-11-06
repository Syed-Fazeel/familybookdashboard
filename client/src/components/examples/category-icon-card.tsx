import { CategoryIconCard } from '../category-icon-card';
import { Music } from 'lucide-react';

export default function CategoryIconCardExample() {
  return (
    <div className="p-6 bg-background max-w-xs">
      <CategoryIconCard
        name="Music Lessons"
        icon={Music}
        count={45}
        onClick={() => console.log('Category clicked')}
      />
    </div>
  );
}
