import { Container } from '@/components/common/Craft';
import { ContactBanner } from '@/components/contact/ContactBanner';
import { CustomerCarePanel } from '@/components/contact/CustomerCarePanel';
import { LocationMap } from '@/components/LocationMap';

export default function Contact() {
  return (
    <Container>
      <ContactBanner />
      <CustomerCarePanel />
      <LocationMap />
    </Container>
  );
}
