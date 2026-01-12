import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { consultationData } from './data';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constant';

export function ConsultationBanner() {
  return (
    <section className='w-full max-w-(--breakpoint-xl) mx-auto py-6 md:py-12 lg:py-24'>
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
        <div className='flex-1 p-0 md:px-12'>
          <Badge variant='outline' className='mb-2 md:mb-4 capitalize'>
            {consultationData.badge}
          </Badge>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-2 md:mb-4'>
            {consultationData.title}
          </h2>
          <p className='text-muted-foreground mb-4'>
            {consultationData.description}
          </p>
          <div className='flex items-center gap-5'>
            <Button asChild>
              <Link href={WHATSAPP_LINK}>{consultationData.cta}</Link>
            </Button>
            <Link
              href='/contact'
              className='inline-flex items-center text-sm font-medium  hover:underline'
            >
              <span>Konsultasi</span>
              <ArrowRight className='w-4 h-4 ml-2' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
