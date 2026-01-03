import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.svg';

import { mainMenu } from './data';
import { Button } from '@/components/ui/button';
import { MobileNav } from './MobileNav';
import { ThemeToggle } from '@/components/features/theme/ThemeToggle';

interface NavProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export function Navbar({ className, children, id }: NavProps) {
  return (
    <header
      className={cn('sticky z-50 top-0 bg-background', 'border-b', className)}
      id={id}
    >
      <div
        id='nav-container'
        className='max-w-7xl mx-auto py-4 px-4 sm:px-8 flex justify-between items-center'
      >
        <Link
          className='hover:opacity-75 transition-all flex gap-4 items-center'
          href='/'
        >
          <Image
            src={Logo}
            alt='Logo'
            loading='eager'
            className='dark:invert'
            width={42}
            height={26}
          />
          <h2 className='text-sm'>Alat Kesehatan</h2>
        </Link>
        {children}
        <div className='flex items-center gap-2'>
          <div className='mx-2 hidden md:flex'>
            {Object.entries(mainMenu).map(([key, href]) => (
              <Button key={href} asChild variant='ghost' size='sm'>
                <Link href={href}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              </Button>
            ))}
          </div>
          <Button asChild className='hidden md:flex'>
            <Link href='/'>Pesan</Link>
          </Button>
          <MobileNav />
          <ThemeToggle className='hidden md:flex' />
        </div>
      </div>
    </header>
  );
}
