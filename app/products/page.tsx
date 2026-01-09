import { ProductPage } from '@/components/features/products/ProductPage';
import { Suspense } from 'react';

export default function Product() {
  return (
    <Suspense>
      <ProductPage />
    </Suspense>
  );
}
