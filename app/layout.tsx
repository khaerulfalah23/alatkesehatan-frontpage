import './globals.css';
import Script from 'next/script';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Navbar } from '@/components/common/navbar/Navbar';
import { Footer } from '@/components/common/Footer';
import { ThemeProvider } from '@/components/features/theme/ThemeProvider';
import { ReactQueryClientProvider } from '@/providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Alat Kesehatan',
  description: 'Aplikasi katalog alat kesehatan sederhana.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <Script
          id='website-schema'
          type='application/ld+json'
          strategy='afterInteractive'
        >
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Alat Kesehatan',
            url: 'https://alatkesehatan-frontpage.vercel.app',
            potentialAction: {
              '@type': 'SearchAction',
              target:
                'https://alatkesehatan-frontpage.vercel.app/?s={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          })}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryClientProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='light'
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
