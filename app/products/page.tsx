import { Suspense } from 'react';
import { ProductPage } from '@/components/features/products/ProductPage';
import { Loading } from '@/components/common/Loading';

export default function Product() {
  return (
    <Suspense fallback={<Loading />}>
      <ProductPage />
    </Suspense>
  );
}
