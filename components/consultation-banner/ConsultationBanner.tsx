import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { consultationData } from './data';

export default function ConsultationBanner() {
  return (
    <section className='w-full max-w-(--breakpoint-xl) mx-auto py-0 md:py-24'>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='relative w-full md:w-1/2 h-[560px] flex items-center justify-center'>
          <Image
            src={consultationData.imageSrc}
            alt={consultationData.title}
            fill
            priority
            fetchPriority='high'
            sizes='(max-width: 768px) 90vw, 378px'
            quality={75}
            className='object-contain transition-transform duration-300 ease-in-out md:hover:scale-105'
          />
        </div>
        <div className='flex-1 p-6 md:px-12'>
          <Badge variant='outline' className='mb-2 md:mb-4 capitalize'>
            {consultationData.badge}
          </Badge>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-2 md:mb-4'>
            {consultationData.title}
          </h2>
          <p className='text-muted-foreground mb-4'>
            {consultationData.description}
          </p>
          <Button asChild>
            <Link href='/products'>{consultationData.cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
