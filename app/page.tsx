import { Container } from '@/components/common/Craft';
import { Customers } from '@/components/Customers';
import { ProductList } from '@/components/features/products/ProductList';
import { HeroBanner } from '@/components/hero-banner/HeroBanner';

export default function Home() {
  return (
    <Container>
      <HeroBanner />
      <Customers />
      <ProductList />
    </Container>
  );
}
