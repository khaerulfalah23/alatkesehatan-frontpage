import { twMerge } from 'tailwind-merge';
import type { PriceFormatter } from './types';

export default function PriceFormatter({ amount, className }: PriceFormatter) {
  const formattedPrice = new Number(amount).toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });
  return (
    <span className={twMerge('text-sm font-semibold text-darkText', className)}>
      {' '}
      {formattedPrice}{' '}
    </span>
  );
}
