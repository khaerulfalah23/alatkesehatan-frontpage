import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Product } from './types';
import { ProductButton } from './ProductButton';
import ProductPrice from './ProductPrice';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className='border border-gray-300 rounded-lg overflow-hidden group text-sm'>
      <div className='border-b border-b-gray-300 overflow-hidden relative'>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]?.src || '/placeholder.png'}
            alt={product.images[0]?.alt || product.name}
            width={500}
            height={500}
            loading='lazy'
            quality={70}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
            className={`w-full h-auto object-cover transition-transform duration-500 md:group-hover:scale-105`}
          />
        </Link>
        {product.stock_quantity === 0 && (
          <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center'>
            <p className='text-lg font-bold text-white'>Out of Stock</p>
          </div>
        )}
      </div>
      <div className='p-5 flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <p className='text-muted-foreground font-medium'>
            {(product.categories || [{}])[0]?.name}
          </p>
          <div className='text-lightText flex items-center gap-1'>
            {Array.from({ length: 5 }).map((_, index) => {
              const isLastStar = index === 4;
              return (
                <Star
                  size={15}
                  fill={!isLastStar ? '#fca99b' : 'transparent'}
                  key={index}
                  className={`${
                    isLastStar ? 'text-gray-500' : 'text-lightOrange'
                  }`}
                />
              );
            })}
          </div>
        </div>
        <p className='text-base tracking-wide font-semibold line-clamp-1 capitalize'>
          {product?.name}
        </p>
        <ProductPrice
          price={parseFloat(product.price)}
          discount={
            product.on_sale
              ? Math.round(
                  ((parseFloat(product.regular_price) -
                    parseFloat(product.sale_price)) /
                    parseFloat(product.regular_price)) *
                    100
                )
              : 0
          }
          label={product.on_sale ? 'Sale' : ''}
        />
        <ProductButton product={product} />
      </div>
    </div>
  );
}
