import { BusinessCard } from '../business-card';

export default function BusinessCardExample() {
  return (
    <div className="p-6 bg-background max-w-sm">
      <BusinessCard
        id="1"
        name="Dance Academy Plus"
        category="Dance Classes"
        city="Austin"
        state="TX"
        rating={4.8}
        reviewCount={124}
        price="$45/class"
        isFeatured={true}
      />
    </div>
  );
}
