import { Container } from '@/components/common/Craft';
import { HeroBanner } from '@/components/hero-banner/HeroBanner';
import { ProductList } from '@/components/features/products/ProductList';

export default function Home() {
  return (
    <Container>
      <HeroBanner />
      <ProductList />
    </Container>
  );
}
