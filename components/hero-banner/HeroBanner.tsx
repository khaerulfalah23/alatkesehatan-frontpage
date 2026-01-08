import Link from 'next/link';
import Image from 'next/image';

import { heroData } from './data';

import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export function HeroBanner() {
  return (
    <section className='w-full max-w-(--breakpoint-xl) mx-auto'>
      <Card className='p-0'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='flex-1 p-6 md:px-12'>
            <Badge variant='outline' className='mb-2 md:mb-4 capitalize'>
              {heroData.badge}
            </Badge>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-2 md:mb-4'>
              {heroData.title}
            </h2>
            <p className='text-muted-foreground mb-4'>{heroData.description}</p>
            <p className='mb-4'>
              {heroData.beforeHighlight}{' '}
              <span className='font-semibold text-primary uppercase'>
                {heroData.highlight}
              </span>{' '}
              {heroData.afterHighlight}
            </p>
            <Button asChild>
              <Link href='/products'>{heroData.cta}</Link>
            </Button>
          </div>
          <div className='relative w-full md:w-1/2 h-[378px] flex items-center justify-center'>
            <Image
              src={heroData.imageSrc}
              alt={heroData.title}
              fill
              priority
              fetchPriority='high'
              sizes='(max-width: 768px) 90vw, 378px'
              quality={60}
              className='object-contain transition-transform duration-300 ease-in-out md:hover:scale-105'
            />
          </div>
        </div>
      </Card>
    </section>
  );
}
