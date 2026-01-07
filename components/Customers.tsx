import { InfiniteSlider } from './ui/infinite-slider';
import { ProgressiveBlur } from './ui/progressive-blur';

const logos = [
  {
    src: 'https://html.tailus.io/blocks/customers/nvidia.svg',
    alt: 'Nvidia Logo',
    height: 20,
    className: 'h-5',
  },
  {
    src: 'https://html.tailus.io/blocks/customers/column.svg',
    alt: 'Column Logo',
    height: 16,
    className: 'h-4',
  },
  {
    src: 'https://html.tailus.io/blocks/customers/github.svg',
    alt: 'GitHub Logo',
    height: 16,
    className: 'h-4',
  },
  {
    src: 'https://html.tailus.io/blocks/customers/nike.svg',
    alt: 'Nike Logo',
    height: 20,
    className: 'h-5',
  },
  {
    src: 'https://html.tailus.io/blocks/customers/lemonsqueezy.svg',
    alt: 'Lemon Squeezy Logo',
    height: 20,
    className: 'h-5',
  },
  {
    src: 'https://html.tailus.io/blocks/customers/laravel.svg',
    alt: 'Laravel Logo',
    height: 16,
    className: 'h-4',
  },
  {
    src: 'https://html.tailus.io/blocks/customers/lilly.svg',
    alt: 'Lilly Logo',
    height: 28,
    className: 'h-7',
  },
  {
    src: 'https://html.tailus.io/blocks/customers/openai.svg',
    alt: 'OpenAI Logo',
    height: 24,
    className: 'h-6',
  },
];

export function Customers() {
  return (
    <div className='group relative m-auto max-w-6xl my-5 px-6 overflow-x-hidden'>
      <div className='flex flex-col items-center md:flex-row'>
        <div className='md:max-w-44 md:border-r md:pr-6'>
          <p className='text-end text-sm'>Dipercaya oleh pelanggan kami</p>
        </div>
        <div className='relative py-6 md:w-[calc(100%-11rem)]'>
          <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
            {logos.map((logo, i) => (
              /* eslint-disable @next/next/no-img-element */
              <div key={i} className='flex'>
                <img
                  className={`mx-auto w-fit dark:invert ${logo.className}`}
                  src={logo.src}
                  alt={logo.alt}
                  height={logo.height}
                  width='auto'
                />
              </div>
            ))}
          </InfiniteSlider>

          <div className='bg-linear-to-r from-background absolute inset-y-0 left-0 w-20'></div>
          <div className='bg-linear-to-l from-background absolute inset-y-0 right-0 w-20'></div>
          <ProgressiveBlur
            className='pointer-events-none absolute left-0 top-0 h-full w-20'
            direction='left'
            blurIntensity={1}
          />
          <ProgressiveBlur
            className='pointer-events-none absolute right-0 top-0 h-full w-20'
            direction='right'
            blurIntensity={1}
          />
        </div>
      </div>
    </div>
  );
}
