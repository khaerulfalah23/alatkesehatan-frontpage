import { Container } from '@/components/common/Craft';
import { Customers } from '@/components/Customers';
import { ProductList } from '@/components/features/products/ProductList';
import { HeroBanner } from '@/components/hero-banner/HeroBanner';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { ConsultationBanner } from '@/components/consultation-banner/ConsultationBanner';

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
