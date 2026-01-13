'use client';

import { useState } from 'react';

interface ProductTabsProps {
  description: string;
  registrationNumber: string;
  tags: string[];
}

export function ProductTabs({
  description,
  registrationNumber,
  tags,
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Deskripsi Produk' },
    { id: 'reviews', label: 'Ulasan' },
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
            {/* Deskripsi Produk */}
            <div
              className='text-foreground leading-relaxed product-description'
              dangerouslySetInnerHTML={{ __html: description }}
            />

            {/* Nomor Registrasi */}
            <div className='space-y-2'>
              <h3 className='font-semibold text-foreground'>
                Nomor Registrasi / Izin Edar Alkes
              </h3>
              <p className='text-muted-foreground'>{registrationNumber}</p>
            </div>

            {/* Tags */}
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
      </div>
    </div>
  );
}
