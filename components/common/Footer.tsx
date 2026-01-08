import Link from 'next/link';
import { Container } from './Craft';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const SOCIAL_ITEMS = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/acara',
    icon: <Facebook />,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/@acara',
    icon: <Instagram />,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/@acara',
    icon: <Twitter />,
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@acara',
    icon: <Youtube />,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className='border-t text-sm'>
        <Container className='py-5'>
          <footer className='flex items-center justify-between'>
            <p className='font-semibold'>
              © {currentYear} PT.Hefram Asasta Indonesia.
            </p>
            <div className='flex items-center justify-between gap-8'>
              {SOCIAL_ITEMS.map((item) => (
                <Link
                  href={item.href}
                  className='text-3xl'
                  key={`footer-social-${item.label}`}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </footer>
        </Container>
      </div>
    </>
  );
}
