import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/axios';
import type { Product } from '@/components/features/products/types';

interface FetchProductsParams {
  search?: string;
  category?: string;
  tag?: string;
  page?: number;
  perPage?: number;
  minPrice?: number;
  maxPrice?: number;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  totalPages: number;
  minPrice: number;
  maxPrice: number;
}

export const useFetchProducts = ({
  search,
  category,
  tag,
  page = 1,
  perPage = 9,
  minPrice,
  maxPrice,
}: FetchProductsParams) => {
  return useQuery<ProductsResponse, Error>({
    queryKey: [
      'products',
      { page, perPage, search, category, tag, minPrice, maxPrice },
    ],
    queryFn: async (): Promise<ProductsResponse> => {
      const res = await axiosInstance.get<Product[]>('/wc/v3/products', {
        headers: {
          Authorization:
            'Basic ' +
            btoa(
              `${process.env.NEXT_PUBLIC_CONSUMER_KER}:${process.env.NEXT_PUBLIC_CONSUMER_SECRET}`
            ),
        },
        params: {
          search: search || undefined,
          category: category || undefined,
          tag: tag || undefined,
          min_price: minPrice || undefined,
          max_price: maxPrice || undefined,
          page,
          per_page: perPage,
          _embed: true,
        },
      });
      return {
        products: res.data,
        total: Number(res.headers['x-wp-total'] ?? 0),
        totalPages: Number(res.headers['x-wp-totalpages'] ?? 1),
        minPrice: minPrice || 0,
        maxPrice: maxPrice || 0,
      };
    },
    placeholderData: (previousData) => previousData,
    staleTime: 60 * 1000,
  });
};
