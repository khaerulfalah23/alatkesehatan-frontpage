import { Container } from '@/components/common/Craft';
import { ProductGallery } from '@/components/features/products/ProductGallery';
import { ProductInfo } from '@/components/features/products/ProductInfo';
import { ProductTabs } from '@/components/features/products/ProductTabs';

const product = {
  name: 'Kursi Roda Sellaco 3in1 Reclining + BAB',
  price: 2150000,
  model: 'DY02608GC',
  weight: '50.0 Kg',
  location: 'Jakarta',
  images: [
    '/blue-wheelchair-reclining-medical-equipment.jpg',
    '/blue-wheelchair-side-view-medical.jpg',
    '/blue-wheelchair-reclining-medical-equipment.jpg',
    '/blue-wheelchair-folded-compact.jpg',
    '/blue-wheelchair-side-view-medical.jpg',
    '/blue-wheelchair-back-view-medical.jpg',
    '/blue-wheelchair-detail-wheels.jpg',
    '/blue-wheelchair-side-view-medical.jpg',
    '/blue-wheelchair-back-view-medical.jpg',
  ],
  reviewCount: 0,
  rating: 0,
  description:
    'Kursi Roda 3in1 Sellaco merupakan kursi roda multifungsi yang praktis digunakan, selain berfungsi sebagai alat bantu jalan kursi roda ini juga dilengkapi dengan pispot sebagai tempat BAB. Cocok digunakan untuk penggunaan pribadi, sangat bermanfaat bagi pasien / seseorang yang mengalami cedera atau kelumpuhan.',
  features: [
    'Bahan frame/kerangka: besi krom',
    'Pegangan tangan dapat dilepas',
    'Ada rem (pada kedua sisi ban)',
    'Pijakan kaki dapat disesuaikan/dinaikkan',
    'Sandaran tangan yang nyaman dilengkapi dengan busa',
    'Terdapat tempat untuk BAB',
    'Dapat dijadikan reclining/rebahan',
    'Roda belakang ban mati velg jari-jari',
    'Dudukan kursi yang nyaman dilengkapi busa tebal',
    'Lebar dudukan 43 cm',
  ],
  registrationNumber: 'AKL 11402715188',
  tags: ['Kursi Roda', 'Alat Bantu Jalan', 'Sellaco'],
};

export default function ProductDetailPage() {
  return (
    <div className='min-h-screen'>
      <Container>
        {/* Product Section */}
        <div className='bg-card rounded-2xl border border-border p-6 mb-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <ProductGallery
              images={product.images}
              productName={product.name}
            />
            <ProductInfo
              name={product.name}
              price={product.price}
              model={product.model}
              weight={product.weight}
              location={product.location}
              reviewCount={product.reviewCount}
              rating={product.rating}
            />
          </div>
        </div>

        {/* Tabs Section */}
        <div className='bg-card rounded-2xl border border-border p-6'>
          <ProductTabs
            description={product.description}
            features={product.features}
            registrationNumber={product.registrationNumber}
            tags={product.tags}
          />
        </div>
      </Container>
    </div>
  );
}
