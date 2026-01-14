import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/axios';

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  display: string;
  image?: { id: number; src: string; alt: string };
  menu_order: number;
  count: number;
}

export interface ProductTag {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export interface ProductFiltersResponse {
  categories: ProductCategory[];
  tags: ProductTag[];
}

export const useFetchProductFilters = () => {
  return useQuery<ProductFiltersResponse, Error>({
    queryKey: ['product-filters'],
    queryFn: async () => {
      const [categories, tags] = await Promise.all([
        axiosInstance.get('/wc/v3/products/categories', {
          headers: {
            Authorization:
              'Basic ' +
              btoa(
                `${process.env.NEXT_PUBLIC_CONSUMER_KER}:${process.env.NEXT_PUBLIC_CONSUMER_SECRET}`
              ),
          },
        }),
        axiosInstance.get('/wc/v3/products/tags', {
          headers: {
            Authorization:
              'Basic ' +
              btoa(
                `${process.env.NEXT_PUBLIC_CONSUMER_KER}:${process.env.NEXT_PUBLIC_CONSUMER_SECRET}`
              ),
          },
        }),
      ]);

      return {
        categories: categories.data,
        tags: tags.data,
      };
    },
  });
};
