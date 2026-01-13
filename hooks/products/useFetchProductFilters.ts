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
                'ck_6fb76d7f0fed307967f5f776399d036a96b0c2d7:cs_cfdde3ceb6b3bdfe040a4411eeec22dfc8c9036e'
              ),
          },
        }),
        axiosInstance.get('/wc/v3/products/tags', {
          headers: {
            Authorization:
              'Basic ' +
              btoa(
                'ck_6fb76d7f0fed307967f5f776399d036a96b0c2d7:cs_cfdde3ceb6b3bdfe040a4411eeec22dfc8c9036e'
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
