'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { ProductCard } from './ProductCard';
import { Container } from '@/components/common/Craft';
import { SearchInput } from '../posts/SearchInput';

import { useFetchProducts } from '@/hooks/products/useFetchProducts';
import { useFetchProductFilters } from '@/hooks/products/useFetchProductFilters';
import { FilterProducts } from './Filter';
import { PriceRangeFilter } from './PriceRangeFilter';

export function ProductPage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);

  const category = searchParams.get('category') ?? undefined;
  const tag = searchParams.get('tag') ?? undefined;
  const search = searchParams.get('search') ?? undefined;
  const pageParam = searchParams.get('page');
  const page = pageParam ? Number(pageParam) : 1;

  const { data, isPending } = useFetchProducts({
    search,
    category,
    tag,
    page,
    minPrice,
    maxPrice,
  });

  const { data: filters } = useFetchProductFilters();

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
      <div className='flex w-full flex-col justify-center gap-6 lg:flex-row'>
        <div className='h-fit w-full rounded-xl border p-4 lg:sticky lg:top-20 lg:w-80'>
          <h4 className='text-xl font-semibold'>Filter items</h4>
          <div className='mt-4 flex flex-col gap-4'>
            <SearchInput defaultValue={search} placeholder='Cari produk...' />
            {filters && (
              <FilterProducts
                categories={filters.categories}
                selectedCategory={category}
                tags={filters.tags}
                selectedTag={tag}
              />
            )}
            <PriceRangeFilter
              onChange={(min, max) => {
                setMinPrice(min);
                setMaxPrice(max);
              }}
            />
          </div>
        </div>

        <div className='min-h-[70vh] w-full flex-1'>
          <div className='mb-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {isPending ? (
              <div className='h-24 w-full border rounded-lg bg-accent/25 flex items-center justify-center'>
                <p className='text-sm text-muted-foreground'>
                  Loading products...
                </p>
              </div>
            ) : data && data?.products?.length ? (
              data.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className='h-24 w-full border rounded-lg bg-accent/25 flex items-center justify-center'>
                <p className='text-sm text-muted-foreground'>
                  Product is empty
                </p>
              </div>
            )}
          </div>

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
      </div>
    </Container>
  );
}
