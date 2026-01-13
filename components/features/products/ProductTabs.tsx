'use client';

import { useState } from 'react';

interface ProductTabsProps {
  description: string;
  features: string[];
  registrationNumber: string;
  tags: string[];
}

export function ProductTabs({
  description,
  features,
  registrationNumber,
  tags,
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Deskripsi Produk' },
    { id: 'reviews', label: 'Ulasan' },
    { id: 'faq', label: 'Pertanyaan Umum' },
  ];

  return (
    <div className='space-y-6'>
      {/* Tab Headers */}
      <div className='flex gap-2 border-b border-border'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
              activeTab === tab.id
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className='min-h-[200px]'>
        {activeTab === 'description' && (
          <div className='space-y-6'>
            <p className='text-foreground leading-relaxed'>{description}</p>

            <div className='space-y-3'>
              <h3 className='font-semibold text-foreground'>Fitur Produk:</h3>
              <ul className='list-disc list-inside space-y-1 text-foreground'>
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className='space-y-2'>
              <h3 className='font-semibold text-foreground'>
                Nomor Registrasi / Izin Edar Alkes
              </h3>
              <p className='text-muted-foreground'>{registrationNumber}</p>
            </div>

            <div className='flex flex-wrap gap-2'>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className='px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className='text-center py-12 text-muted-foreground'>
            <p>Belum ada ulasan untuk produk ini.</p>
            <button className='text-primary hover:underline mt-2'>
              Jadilah yang pertama memberikan ulasan
            </button>
          </div>
        )}

        {activeTab === 'faq' && (
          <div className='space-y-4'>
            <div className='border border-border rounded-lg p-4'>
              <h4 className='font-medium text-foreground'>
                Apakah produk ini memiliki garansi?
              </h4>
              <p className='text-muted-foreground mt-2'>
                Ya, produk ini memiliki garansi resmi dari distributor.
              </p>
            </div>
            <div className='border border-border rounded-lg p-4'>
              <h4 className='font-medium text-foreground'>
                Berapa lama waktu pengiriman?
              </h4>
              <p className='text-muted-foreground mt-2'>
                Waktu pengiriman tergantung lokasi, umumnya 2-5 hari kerja.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
