import { Globe, Headphones, Phone, Users } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const contactData = [
  {
    icon: Headphones,
    title: 'Bantuan & Dukungan',
    description: 'Bantuan produk dan layanan.',
    contacts: [
      { type: 'email', value: 'hefram.id@gmail.com' },
      { type: 'phone', value: '0813-3535-3290' },
    ],
    iconBgColor: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    icon: Users,
    title: 'Customer Service',
    description: 'Layanan kerja sama proyek.',
    contacts: [
      { type: 'phone', value: '0851-2467-2207' },
      { type: 'phone', value: '0895-3272-13348' },
    ],
    iconBgColor: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    icon: Phone,
    title: 'Telephone Kantor',
    description: 'Hubungi tim langsung.',
    contacts: [{ type: 'phone', value: '021 8372-2169' }],
    iconBgColor: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    icon: Globe,
    title: 'Website Resmi',
    description: 'Info produk & layanan.',
    contacts: [{ type: 'website', value: 'www.dosingpumpindo.com' }],
    iconBgColor: 'bg-primary/10',
    iconColor: 'text-primary',
  },
];

export function CustomerCarePanel() {
  return (
    <div className='flex flex-wrap justify-between gap-4 md:gap-6 my-12'>
      {contactData.map((item, index) => (
        <Card
          key={index}
          className='border-none p-0 shadow-none bg-transparent'
        >
          <CardContent className='p-2 md:p-0'>
            <div
              className={`w-14 h-14 rounded-xl ${item.iconBgColor} flex items-center justify-center mb-4`}
            >
              <item.icon className={`w-7 h-7 ${item.iconColor}`} />
            </div>
            <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
            <p className='text-sm text-muted-foreground mb-3'>
              {item.description}
            </p>
            <div className='space-y-1'>
              {item.contacts.map((contact, idx) => (
                <a
                  key={idx}
                  href={
                    contact.type === 'email'
                      ? `mailto:${contact.value}`
                      : contact.type === 'website'
                      ? `https://${contact.value}`
                      : `tel:${contact.value.replace(/[^0-9+]/g, '')}`
                  }
                  className='block text-sm text-darkBlue hover:text-primary transition-colors'
                  target={contact.type === 'website' ? '_blank' : undefined}
                  rel={
                    contact.type === 'website'
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  {contact.value}
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
