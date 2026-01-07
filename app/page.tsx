import { Container } from '@/components/common/Craft';
import ConsultationBanner from '@/components/consultation-banner/ConsultationBanner';
import { Customers } from '@/components/Customers';
import { ProductList } from '@/components/features/products/ProductList';
import { HeroBanner } from '@/components/hero-banner/HeroBanner';
import { WhyChooseUs } from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <>
      <Container>
        <HeroBanner />
        <Customers />
        <WhyChooseUs />
        <ProductList />
        <ConsultationBanner />
      </Container>
    </>
  );
}
