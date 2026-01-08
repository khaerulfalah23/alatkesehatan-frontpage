import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PostGrid } from './PostGrid';
import { Post } from './types';

async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    'https://strainernozzle.com/wp-json/wp/v2/posts?per_page=4&orderby=date&order=desc',
    {
      next: { revalidate: 60 },
    }
  );
  if (!res.ok) throw new Error('Failed to fetch blog posts');
  return res.json();
}

export async function PostList() {
  const posts = await getPosts();
  return (
    <>
      <div className='py-5 flex justify-between'>
        <div className='w-1/2 pr-4'>
          <h2 className='text-2xl font-semibold'>
            Dari blog <span className='text-lightBlue'>kami</span>
          </h2>
          <p className='text-sm text-muted-foreground'>
            Artikel seputar alat kesehatan, tips teknis, dan solusi distribusi
            cairan medis.
          </p>
        </div>
        <div className='w-1/2 flex justify-end items-center'>
          <Link
            href='/posts'
            className='inline-flex items-center text-sm font-medium  hover:underline'
          >
            <span>Lihat Semua</span>
            <ArrowRight className='w-4 h-4 ml-2' />
          </Link>
        </div>
      </div>
      <PostGrid posts={posts} />
    </>
  );
}
