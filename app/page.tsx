import { Container } from '@/components/common/Craft';
import { Customers } from '@/components/Customers';
import { ProductList } from '@/components/features/products/ProductList';
import { HeroBanner } from '@/components/hero-banner/HeroBanner';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { ConsultationBanner } from '@/components/consultation-banner/ConsultationBanner';
import { PostList } from '@/components/features/posts/PostList';
import { TestimonialCarousel } from '@/components/Testimonial/TestimonialCarousel';

export default function Home() {
  return (
    <Container>
      <HeroBanner />
      <Customers />
      <WhyChooseUs />
      <TestimonialCarousel />
      <ProductList />
      <ConsultationBanner />
      <PostList />
    </Container>
  );
}
