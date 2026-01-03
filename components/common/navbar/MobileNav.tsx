'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';

import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

import Logo from '@/public/logo.svg';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
  SheetDescription,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { mainMenu } from './data';
import { ThemeToggle } from '@/components/features/theme/ThemeToggle';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          className='px-0 border w-10 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'
        >
          <Menu />
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='pr-0'>
        <SheetHeader>
          <SheetTitle className='text-left'>
            <MobileLink
              href='/'
              className='hover:opacity-75 transition-all flex gap-4 items-center'
              onOpenChange={setOpen}
            >
              <Image
                src={Logo}
                alt='Logo'
                loading='eager'
                className='dark:invert'
                width={42}
                height={26}
              />
              <span>Alat kesehatan</span>
            </MobileLink>
          </SheetTitle>
          <SheetDescription className='sr-only'>
            Navigation Menu
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className='my-4 h-[calc(100vh-8rem)] pb-10 px-4'>
          <div className='flex flex-col space-y-3'>
            <h3 className='text-small mt-6'>Menu</h3>
            <Separator />
            {Object.entries(mainMenu).map(([key, href]) => (
              <MobileLink key={key} href={href} onOpenChange={setOpen}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </MobileLink>
            ))}
            <Separator />
            <ThemeToggle className='w-full' />
            <Button asChild>
              <Link href='/'>Pesan</Link>
            </Button>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn('text-lg', className)}
      {...props}
    >
      {children}
    </Link>
  );
}
