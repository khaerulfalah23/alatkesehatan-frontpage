import ProductGrid from './ProductGrid';
import { Product } from './types';

async function getProducts(): Promise<Product[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wc/v3/products?per_page=4&orderby=date&order=desc`,
    {
      headers: {
        Authorization:
          'Basic ' +
          btoa(
            `${process.env.NEXT_PUBLIC_CONSUMER_KER}:${process.env.NEXT_PUBLIC_CONSUMER_SECRET}`
          ),
      },
      next: { revalidate: 60 },
    }
  );
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function ProductList() {
  const products = await getProducts();

  return (
    <>
      <div className='py-5'>
        <h2 className='text-2xl font-semibold'>
          Produk Alat Kesehatan <span className=' text-lightBlue'>Terbaru</span>
        </h2>
        <p className='text-sm text-muted-foreground'>
          Temukan solusi kesehatan terbaik untuk kebutuhan Anda.
        </p>
      </div>
      <ProductGrid products={products} />
    </>
  );
}
