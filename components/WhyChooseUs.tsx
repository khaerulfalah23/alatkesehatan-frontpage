import { ReactNode } from 'react';
import { HeartPulse, ShieldCheck, Truck } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';

export function WhyChooseUs() {
  return (
    <div className='@container mx-auto mb-5 md:mb-10 max-w-5xl px-6'>
      <div className='text-center'>
        <h2 className='text-balance text-4xl font-semibold lg:text-5xl'>
          Kenapa Memilih Kami
        </h2>
        <p className='mt-4'>
          Menyediakan solusi alat kesehatan yang aman, efisien, dan terpercaya.
        </p>
      </div>
      <div className='@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16'>
        <Card className='group shadow-zinc-950/5'>
          <CardHeader className='pb-3'>
            <CardDecorator>
              <ShieldCheck className='size-6' aria-hidden />
            </CardDecorator>

            <h3 className='mt-6 font-medium'>Kualitas Terjamin</h3>
          </CardHeader>

          <CardContent>
            <p className='text-sm'>
              Produk alat kesehatan kami memenuhi standar mutu dan keamanan
              untuk mendukung perawatan yang optimal.
            </p>
          </CardContent>
        </Card>

        <Card className='group shadow-zinc-950/5'>
          <CardHeader className='pb-3'>
            <CardDecorator>
              <HeartPulse className='size-6' aria-hidden />
            </CardDecorator>

            <h3 className='mt-6 font-medium'>Dukungan Profesional</h3>
          </CardHeader>

          <CardContent>
            <p className='mt-3 text-sm'>
              Tim berpengalaman siap membantu memilih produk sesuai kebutuhan
              rumah sakit, klinik, maupun individu.
            </p>
          </CardContent>
        </Card>

        <Card className='group shadow-zinc-950/5'>
          <CardHeader className='pb-3'>
            <CardDecorator>
              <Truck className='size-6' aria-hidden />
            </CardDecorator>

            <h3 className='mt-6 font-medium'>Distribusi Cepat</h3>
          </CardHeader>

          <CardContent>
            <p className='mt-3 text-sm'>
              Layanan pengiriman yang efisien memastikan produk sampai tepat
              waktu dan dalam kondisi terbaik.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className='relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]'>
    <div
      aria-hidden
      className='absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]'
    />
    <div
      aria-hidden
      className='bg-radial to-background absolute inset-0 from-transparent to-75%'
    />
    <div className='bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t'>
      {children}
    </div>
  </div>
);
