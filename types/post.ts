export interface PostList {
  id: number;
  slug: string;
  date: string;

  title: {
    rendered: string;
  };

  excerpt: {
    rendered: string;
  };

  _embedded?: {
    'wp:featuredmedia'?: FeaturedMedia[];
    'wp:term'?: WP_Term[][];
  };
}

export interface FeaturedMedia {
  id: number;
  source_url: string;
  alt_text?: string;
  media_details?: {
    width: number;
    height: number;
  };
}

export interface WP_Term {
  id: number;
  name: string;
  slug: string;
  taxonomy: 'category' | 'post_tag';
}

interface Taxonomy {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  meta: Record<string, unknown>;
}

export interface Category extends Taxonomy {
  taxonomy: 'category';
  parent: number;
}

export interface Author {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: Record<string, string>;
  meta: Record<string, unknown>;
}

export interface Tag extends Taxonomy {
  taxonomy: 'post_tag';
}
