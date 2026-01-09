import { ProductCard } from './ProductCard';
import { Product } from './types';

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
