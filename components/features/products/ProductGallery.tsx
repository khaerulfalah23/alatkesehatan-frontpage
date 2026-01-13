'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const [thumbMaxHeight, setThumbMaxHeight] = useState(300);

  useEffect(() => {
    const updateHeight = () => {
      if (mainRef.current) {
        setThumbMaxHeight(mainRef.current.offsetHeight);
      }
    };
    updateHeight();
    const ro = new ResizeObserver(() => {
      if (mainRef.current) {
        setThumbMaxHeight(mainRef.current.offsetHeight);
      }
    });
    if (mainRef.current) {
      ro.observe(mainRef.current);
    }
    window.addEventListener('resize', updateHeight);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <div className='flex flex-col-reverse md:flex-row gap-4 md:gap-0'>
      {/* Thumbnails */}
      <div
        className='flex md:flex-col gap-2 w-full md:w-20 overflow-x-auto md:overflow-y-auto no-scrollbar'
        style={{ maxHeight: thumbMaxHeight }}
      >
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`cursor-pointer shrink-0 w-16 h-16 rounded-lg border-2 overflow-hidden transition-all ${
              selectedImage === index
                ? 'border-primary'
                : 'border-border hover:border-muted-foreground'
            }`}
          >
            <Image
              src={image || '/placeholder.svg'}
              alt={`${productName} - Gambar ${index + 1}`}
              width={64}
              height={64}
              className='w-full h-full object-cover'
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className='flex-1 bg-card rounded-xl border border-border'>
        <div ref={mainRef} className='relative aspect-square'>
          <Image
            src={images[selectedImage] || '/placeholder.svg'}
            alt={productName}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-contain rounded-xl'
          />
        </div>
      </div>
    </div>
  );
}
