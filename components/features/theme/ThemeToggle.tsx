'use client';

import { ComponentProps } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ThemeToggleProps = ComponentProps<typeof Button>;

export function ThemeToggle({ className, ...props }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={handleClick}
      aria-label='Toggle theme'
      className={cn('cursor-pointer', className)}
      {...props}
    >
      <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
    </Button>
  );
}
