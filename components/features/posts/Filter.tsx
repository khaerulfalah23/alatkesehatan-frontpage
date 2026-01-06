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
import { Author, Category, Tag } from '@/types';

interface FilterPostsProps {
  authors: Author[];
  tags: Tag[];
  categories: Category[];
  selectedAuthor?: string;
  selectedTag?: string;
  selectedCategory?: string;
}

export function FilterPosts({
  authors,
  tags,
  categories,
  selectedAuthor,
  selectedTag,
  selectedCategory,
}: FilterPostsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleFilterChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    // reset page & search when filtering
    params.delete('page');
    params.delete('search');

    value === 'all' ? params.delete(type) : params.set(type, value);

    router.push(`${pathname}?${params.toString()}`);
  };

  const handleResetFilters = () => {
    router.push(pathname);
  };

  const hasTags = tags.length > 0;
  const hasCategories = categories.length > 0;
  const hasAuthors = authors.length > 0;

  return (
    <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-3 my-4 w-full items-end'>
      {/* Tags */}
      <Select
        value={selectedTag || 'all'}
        onValueChange={(value) => handleFilterChange('tag', value)}
      >
        <SelectTrigger className='w-full' disabled={!hasTags}>
          {hasTags ? <SelectValue placeholder='All Tags' /> : 'No tags found'}
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='all'>All Tags</SelectItem>
          {tags.map((tag) => (
            <SelectItem key={tag.id} value={tag.id.toString()}>
              {tag.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Categories */}
      <Select
        value={selectedCategory || 'all'}
        onValueChange={(value) => handleFilterChange('category', value)}
      >
        <SelectTrigger className='w-full' disabled={!hasCategories}>
          {hasCategories ? (
            <SelectValue placeholder='All Categories' />
          ) : (
            'No categories found'
          )}
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='all'>All Categories</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.id.toString()}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Authors */}
      <Select
        value={selectedAuthor || 'all'}
        onValueChange={(value) => handleFilterChange('author', value)}
      >
        <SelectTrigger className='w-full' disabled={!hasAuthors}>
          {hasAuthors ? (
            <SelectValue placeholder='All Authors' />
          ) : (
            'No authors found'
          )}
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='all'>All Authors</SelectItem>
          {authors.map((author) => (
            <SelectItem key={author.id} value={author.id.toString()}>
              {author.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button variant='outline' onClick={handleResetFilters}>
        Reset Filters
      </Button>
    </div>
  );
}
