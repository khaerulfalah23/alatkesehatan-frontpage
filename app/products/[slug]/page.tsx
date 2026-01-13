import { Metadata } from 'next';

import { Container } from '@/components/common/Craft';
import { ProductGallery } from '@/components/features/products/ProductGallery';
import { ProductInfo } from '@/components/features/products/ProductInfo';
import { ProductTabs } from '@/components/features/products/ProductTabs';
import { notFound } from 'next/navigation';
import { stripHtml } from '@/lib/metadata';
import { siteConfig } from '@/types';

async function getProductBySlug(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wc/v3/products?slug=${slug}`,
    {
      headers: {
        Authorization:
          'Basic ' +
          btoa(
            'ck_6fb76d7f0fed307967f5f776399d036a96b0c2d7:cs_cfdde3ceb6b3bdfe040a4411eeec22dfc8c9036e'
          ),
      },
      next: { revalidate: 60 },
    }
  );
  const products = await res.json();
  return products.length > 0 ? products[0] : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const resolved = await params;
  const product = await getProductBySlug(resolved.slug);

  if (!product) return {};

  let ogImage: string | undefined;

  if (product.images?.length > 0) {
    ogImage = product.images[0].src;
  }

  const title = product.name;
  const description = stripHtml(
    product.short_description || product.description || ''
  );

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      title,
      description,
      url: `${siteConfig.site_domain}/products/${product.slug}`,
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolved = await params;
  const product = await getProductBySlug(resolved.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className='min-h-screen'>
      <Container>
        {/* Product Section */}
        <div className='bg-card rounded-2xl border border-border p-6 mb-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <ProductGallery
              images={product.images.map((img: { src: string }) => img.src)}
              productName={product.name}
            />
            <ProductInfo
              name={product.name}
              price={parseFloat(product.price)}
              model={product.sku}
              weight={product.weight}
              reviewCount={product.rating_count}
              rating={Math.round(product.average_rating)}
            />
          </div>
        </div>

        {/* Tabs Section */}
        <div className='bg-card rounded-2xl border border-border p-6'>
          <ProductTabs
            description={product.description}
            registrationNumber={product.sku}
            tags={product.tags?.map((t: { name: string }) => t.name) || []}
          />
        </div>
      </Container>
    </div>
  );
}
