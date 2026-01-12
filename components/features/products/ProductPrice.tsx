import { twMerge } from 'tailwind-merge';
import type { ProductPrice } from './types';
import PriceFormatter from './PriceFormatter';

export function ProductPrice({
  price,
  discount,
  label,
  className,
}: ProductPrice) {
  return (
    <div>
      <div className='flex items-center justify-between gap-5'>
        <div className='flex items-center gap-2'>
          <PriceFormatter amount={price} className={className} />
          {price && discount && (
            <PriceFormatter
              amount={price / (1 - discount / 100)}
              className={twMerge('line-through text-xs font-medium', className)}
            />
          )}
        </div>
        <p className='text-muted-foreground'>{label}</p>
      </div>
    </div>
  );
}
