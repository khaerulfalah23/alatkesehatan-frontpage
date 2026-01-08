import {
  getPostBySlug,
  getFeaturedMediaById,
  getAuthorById,
  getCategoryById,
  getAllPostSlugs,
} from '@/lib/wordpress';
import { stripHtml } from '@/lib/metadata';
import Image from 'next/image';

import { badgeVariants } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Article, Container, Prose, Section } from '@/components/common/Craft';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/types';

export async function generateStaticParams() {
  return await getAllPostSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const resolved = await params;
  const post = await getPostBySlug(resolved.slug);

  if (!post) return {};

  let ogImage: string | undefined;

  if (post.featured_media) {
    try {
      const media = await getFeaturedMediaById(post.featured_media);
      ogImage = media?.source_url;
    } catch {
      ogImage = undefined;
    }
  }

  const title = post.title.rendered;
  const description = stripHtml(post.excerpt.rendered);

  return {
    title,
    description,
    openGraph: {
      type: 'article',
      title,
      description,
      url: `${siteConfig.site_domain}/posts/${post.slug}`,
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

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolved = await params;
  const post = await getPostBySlug(resolved.slug);

  if (!post) {
    notFound();
  }

  const featuredMedia = post.featured_media
    ? await getFeaturedMediaById(post.featured_media)
    : null;
  const author = await getAuthorById(post.author);
  const date = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const category = await getCategoryById(post.categories[0]);

  return (
    <Section className='max-w-3xl mx-auto py-2 md:py-4'>
      <Container>
        <Button className='mb-5' asChild>
          <Link href='/posts'>
            <ArrowLeft />
            Kembali
          </Link>
        </Button>

        <Prose>
          <h1>
            <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </h1>

          <div className='flex justify-between items-center gap-4 text-sm mb-4'>
            <h5>
              Published {date} by{' '}
              {author.name && (
                <span>
                  <a href={`/posts/?author=${author.id}`}>{author.name}</a>{' '}
                </span>
              )}
            </h5>

            <Link
              href={`/posts/?category=${category.id}`}
              className={cn(
                badgeVariants({ variant: 'outline' }),
                'no-underline!'
              )}
            >
              {category.name}
            </Link>
          </div>

          {featuredMedia?.source_url && (
            <Image
              src={featuredMedia.source_url}
              alt={post.title.rendered}
              width={1200}
              height={675}
              priority
              quality={75}
              sizes='100vw'
              className='w-full h-auto rounded-lg object-cover'
            />
          )}
        </Prose>

        <Article dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </Container>
    </Section>
  );
}
