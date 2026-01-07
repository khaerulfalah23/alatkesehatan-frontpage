import Image from 'next/image';
import payment from '@/public/payment.webp';
import { Container } from './Craft';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='bg-lightBg text-sm'>
      <Container className='py-5'>
        <footer className='flex items-center justify-between'>
          <p className='text-gray-500'>
            Hak Cipta © {currentYear}{' '}
            <span className='text-darkBlue font-semibold'>
              PT.Hefram Asasta Indonesia.
            </span>
          </p>
          <Image src={payment} alt='payment' className='w-64 object-cover' />
        </footer>
      </Container>
    </div>
  );
}
