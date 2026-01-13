'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Heart,
  ShoppingCart,
  Minus,
  Plus,
  Star,
  RefreshCw,
} from 'lucide-react';

interface ProductInfoProps {
  name: string;
  price: number;
  model: string;
  weight: string;
  reviewCount: number;
  rating: number;
}

export function ProductInfo({
  name,
  price,
  model,
  weight,
  reviewCount,
  rating,
}: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID').format(price);
  };

  return (
    <div className='space-y-4'>
      <h1 className='text-xl md:text-2xl font-semibold text-foreground leading-tight'>
        {name}
      </h1>

      <div className='space-y-1'>
        <p className='text-2xl md:text-3xl font-bold text-price'>
          Rp {formatPrice(price)}
        </p>
        <div className='text-sm md:text-base text-muted-foreground space-y-0.5'>
          <p>Model: {model}</p>
          <p>Berat: {weight}</p>
        </div>
      </div>

      {/* Quantity and Actions */}
      <div className='flex flex-col md:flex-row items-stretch md:items-center gap-2 pt-2'>
        {/* Quantity */}
        <div className='flex items-center border border-border rounded-lg w-full md:w-auto'>
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className='p-2 hover:bg-muted transition-colors'
          >
            <Minus className='w-4 h-4' />
          </button>
          <span className='px-4 py-2 min-w-[40px] text-center'>{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className='p-2 hover:bg-muted transition-colors'
          >
            <Plus className='w-4 h-4' />
          </button>
        </div>

        {/* Actions */}
        <Button className='flex-1 bg-primary hover:bg-primary/90 text-primary-foreground'>
          <ShoppingCart className='w-4 h-4 mr-2' />+ Keranjang
        </Button>

        <Button
          variant='outline'
          className='flex-1 md:flex-none border-primary text-primary hover:bg-primary/10 bg-transparent'
        >
          Beli Sekarang
        </Button>

        <div className='flex gap-2'>
          <Button variant='outline' size='icon'>
            <Heart className='w-4 h-4' />
          </Button>
          <Button variant='outline' size='icon'>
            <RefreshCw className='w-4 h-4' />
          </Button>
        </div>
      </div>

      {/* Rating and Reviews */}
      <div className='flex flex-col md:flex-row md:items-center gap-2 text-sm md:text-base'>
        <div className='flex items-center gap-1'>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-border'
              }`}
            />
          ))}
        </div>
        <span>Berdasarkan {reviewCount} ulasan</span>
        <span className='text-primary cursor-pointer hover:underline'>
          | Tulis ulasan
        </span>
      </div>
    </div>
  );
}
