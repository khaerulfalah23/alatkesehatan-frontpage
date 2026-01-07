import ProductGrid from './ProductGrid';
import { Product } from './types';

async function getProducts(): Promise<Product[]> {
  const res = await fetch(
    'https://strainernozzle.com/wp-json/wc/v3/products?per_page=4&orderby=date&order=desc',
    {
      headers: {
        Authorization:
          'Basic ' +
          btoa(
            'ck_6fb76d7f0fed307967f5f776399d036a96b0c2d7:cs_cfdde3ceb6b3bdfe040a4411eeec22dfc8c9036e'
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
