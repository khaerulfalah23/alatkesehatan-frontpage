import { cardsData } from './data';
import { TestimonialCard } from './TestimonialCard';

export function TestimonialCarousel() {
  return (
    <div className='mb-11'>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }
        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      {[false, true].map((reverse, i) => (
        <div key={i} className='overflow-hidden relative'>
          <div className='absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-white dark:from-background to-transparent' />
          <div
            className={`marquee-inner ${
              reverse ? 'marquee-reverse' : ''
            } flex transform-gpu min-w-[200%] pt-10`}
          >
            {[...cardsData, ...cardsData].map((card, index) => (
              <TestimonialCard key={`${i}-${index}`} {...card} />
            ))}
          </div>
          <div className='absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-white dark:from-background to-transparent' />
        </div>
      ))}
    </div>
  );
}
