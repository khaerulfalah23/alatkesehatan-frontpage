import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/axios';
import type { PostList } from '@/types';

interface FetchPostsParams {
  search?: string;
  category?: string;
  tag?: string;
  author?: string;
  page?: number;
  perPage?: number;
}

export interface PostsResponse {
  posts: PostList[];
  total: number;
  totalPages: number;
}

export const useFetchPosts = ({
  search,
  category,
  tag,
  author,
  page = 1,
  perPage = 9,
}: FetchPostsParams) => {
  return useQuery<PostsResponse, Error>({
    queryKey: ['posts', { search, category, tag, author, page, perPage }],

    queryFn: async (): Promise<PostsResponse> => {
      const res = await axiosInstance.get<PostList[]>('/wp-json/wp/v2/posts', {
        params: {
          page,
          per_page: perPage,
          search: search || undefined,
          categories: category || undefined,
          tags: tag || undefined,
          author: author || undefined,
          _embed: true,
        },
      });

      return {
        posts: res.data,
        total: Number(res.headers['x-wp-total'] ?? 0),
        totalPages: Number(res.headers['x-wp-totalpages'] ?? 1),
      };
    },

    placeholderData: (previousData) => previousData,

    staleTime: 60 * 1000,
  });
};
