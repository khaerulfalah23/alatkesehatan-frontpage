import Link from 'next/link';
import { Product } from './types';

export function ProductButton({ product }: { product: Product }) {
  const whatsappNumber = '6281335353290';
  const message = `Halo, saya ingin membeli produk: ${product.name} (SKU: ${product.sku})`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <Link
      href={whatsappUrl}
      target='_blank'
      rel='noopener noreferrer'
      className='text-center bg-darkBlue/10 border border-darkBlue w-full py-2 mt-2 rounded-md font-medium hover:bg-darkBlue hover:text-white hoverEffect disabled:hover:cursor-not-allowed disabled:hover:bg-darkBlue/10 disabled:text-gray-400 disabled:hover:text-gray-400 disabled:border-darkBlue/10'
    >
      <span>Pesan Sekarang</span>
    </Link>
  );
}
