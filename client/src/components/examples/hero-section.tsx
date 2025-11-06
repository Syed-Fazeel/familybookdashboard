import { HeroSection } from '../hero-section';

export default function HeroSectionExample() {
  return (
    <HeroSection onSearch={(query, category) => console.log('Search:', { query, category })} />
  );
}
