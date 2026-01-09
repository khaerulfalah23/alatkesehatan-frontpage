'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

import {
  ProductCategory,
  ProductTag,
} from '@/hooks/products/useFetchProductFilters';

interface FilterProductsProps {
  categories: ProductCategory[];
  selectedCategory?: string;
  tags: ProductTag[];
  selectedTag?: string;
}

export function FilterProducts({
  categories,
  selectedCategory,
  tags,
  selectedTag,
}: FilterProductsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleFilterChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete('page');
    params.delete('search');

    value === 'all' ? params.delete(type) : params.set(type, value);

    router.push(`${pathname}?${params.toString()}`);
  };

  const handleResetFilters = () => {
    router.push(pathname);
  };

  const hasCategories = categories.length > 0;
  const hasTags = tags.length > 0;

  return (
    <>
      <Select
        value={selectedCategory || 'all'}
        onValueChange={(value) => handleFilterChange('category', value)}
      >
        <SelectTrigger
          className='w-full cursor-pointer'
          disabled={!hasCategories}
        >
          {hasCategories ? (
            <SelectValue placeholder='All Categories' />
          ) : (
            'No categories found'
          )}
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='all'>Semua Kategori</SelectItem>
          {categories.map((category) => (
            <SelectItem
              className='cursor-pointer'
              key={category.id}
              value={category.id.toString()}
            >
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        value={selectedTag || 'all'}
        onValueChange={(value) => handleFilterChange('tag', value)}
      >
        <SelectTrigger className='w-full cursor-pointer' disabled={!hasTags}>
          {hasTags ? <SelectValue placeholder='All Tags' /> : 'No tags found'}
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='all'>Semua Tag</SelectItem>
          {tags.map((tag) => (
            <SelectItem key={tag.id} value={tag.id.toString()}>
              {tag.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        variant='outline'
        className='cursor-pointer'
        onClick={handleResetFilters}
      >
        Reset Filters
      </Button>
    </>
  );
}
