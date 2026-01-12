import Link from 'next/link';
import Image from 'next/image';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { WHATSAPP_LINK } from '@/lib/constant';

export function ContactBanner() {
  return (
    <section className='w-full max-w-(--breakpoint-xl) mx-auto'>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='flex-1'>
          <Badge
            variant='secondary'
            className='mb-2 text-base md:text-lg capitalize'
          >
            Kami Siap Membantu Anda
          </Badge>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 md:mb-4'>
            Hubungi Kami
          </h2>
          <p className='mb-4 text-base md:text-lg md:pr-5'>
            Untuk informasi lebih lengkap mengenai produk, layanan, atau
            konsultasi kebutuhan proyek Anda, jangan ragu untuk menghubungi tim
            kami.
          </p>
          <Button asChild>
            <Link href={WHATSAPP_LINK}>Hubungi WhatsApp</Link>
          </Button>
        </div>
        <Card className='relative w-full hidden md:block md:w-1/2 h-[504px] items-center justify-center'>
          <Image
            src='/FELISA.webp'
            alt='Customer Service'
            fill
            priority
            fetchPriority='high'
            sizes='(max-width: 768px) 90vw, 504px'
            quality={75}
            className='object-cover'
          />
        </Card>
      </div>
    </section>
  );
}
