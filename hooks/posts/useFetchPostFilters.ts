import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
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
        axios.get('https://tubesettlerlamella.com/wp-json/wp/v2/users'),
        axios.get('https://tubesettlerlamella.com/wp-json/wp/v2/tags'),
        axios.get('https://tubesettlerlamella.com/wp-json/wp/v2/categories'),
      ]);

      return {
        authors: authors.data,
        tags: tags.data,
        categories: categories.data,
      };
    },
  });
};
