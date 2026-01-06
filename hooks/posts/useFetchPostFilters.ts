import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/axios';
import { Author, Category, Tag } from '@/types';

export const useFetchPostFilters = () => {
  return useQuery<
    {
      authors: Author[];
      tags: Tag[];
      categories: Category[];
    },
    Error
  >({
    queryKey: ['post-filters'],
    queryFn: async () => {
      const [authors, tags, categories] = await Promise.all([
        axiosInstance.get('/wp-json/wp/v2/users'),
        axiosInstance.get('/wp-json/wp/v2/tags'),
        axiosInstance.get('/wp-json/wp/v2/categories'),
      ]);

      return {
        authors: authors.data,
        tags: tags.data,
        categories: categories.data,
      };
    },
  });
};
