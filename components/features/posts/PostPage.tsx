'use client';

import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { Container, Prose } from '@/components/common/Craft';
import { PostCard } from '@/components/features/posts/PostCard';
import { SearchInput } from '@/components/features/posts/SearchInput';

import { useFetchPosts } from '@/hooks/posts/useFetchPosts';
import { useFetchPostFilters } from '@/hooks/posts/useFetchPostFilters';
import { FilterPosts } from '@/components/features/posts/Filter';

export function PostPage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const search = searchParams.get('search') ?? undefined;
  const category = searchParams.get('category') ?? undefined;
  const tag = searchParams.get('tag') ?? undefined;
  const author = searchParams.get('author') ?? undefined;
  const pageParam = searchParams.get('page');
  const page = pageParam ? Number(pageParam) : 1;

  const { data } = useFetchPosts({
    search,
    category,
    tag,
    author,
    page,
  });

  const { data: filters } = useFetchPostFilters();

  const createPaginationUrl = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());

    if (newPage > 1) {
      params.set('page', String(newPage));
    } else {
      params.delete('page');
    }

    return `${pathname}?${params.toString()}`;
  };

  return (
    <Container>
      <div className='space-y-8'>
        <Prose className='text-center'>
          <h2>Artikel Kesehatan</h2>
          <p className='text-muted-foreground'>{data?.total ?? 0} Artikel</p>
        </Prose>

        {/* SEARCH + FILTER */}
        <div>
          <SearchInput defaultValue={search} placeholder='Cari artikel...' />
          {filters && (
            <FilterPosts
              authors={filters.authors}
              tags={filters.tags}
              categories={filters.categories}
              selectedAuthor={author}
              selectedTag={tag}
              selectedCategory={category}
            />
          )}
        </div>

        {/* POSTS */}
        {data?.posts?.length ? (
          <div className='grid md:grid-cols-3 gap-4'>
            {data.posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className='h-24 w-full border rounded-lg bg-accent/25 flex items-center justify-center'>
            <p className='text-sm text-muted-foreground'>Tidak ada artikel</p>
          </div>
        )}

        {/* PAGINATION */}
        {data && data.totalPages > 1 && (
          <div className='flex justify-center py-8'>
            <Pagination>
              <PaginationContent>
                {page > 1 && (
                  <PaginationItem>
                    <Link href={createPaginationUrl(page - 1)}>
                      <PaginationPrevious />
                    </Link>
                  </PaginationItem>
                )}

                {Array.from({ length: data.totalPages }, (_, i) => i + 1)
                  .filter(
                    (pageNum) =>
                      pageNum === 1 ||
                      pageNum === data.totalPages ||
                      Math.abs(pageNum - page) <= 1
                  )
                  .map((pageNum, index, array) => {
                    const showEllipsis =
                      index > 0 && pageNum - array[index - 1] > 1;

                    return (
                      <div key={pageNum} className='flex items-center'>
                        {showEllipsis && <span className='px-2'>...</span>}
                        <PaginationItem>
                          <Link href={createPaginationUrl(pageNum)}>
                            <PaginationLink isActive={pageNum === page}>
                              {pageNum}
                            </PaginationLink>
                          </Link>
                        </PaginationItem>
                      </div>
                    );
                  })}

                {page < data.totalPages && (
                  <PaginationItem>
                    <Link href={createPaginationUrl(page + 1)}>
                      <PaginationNext />
                    </Link>
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </Container>
  );
}
