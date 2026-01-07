export interface ProductPrice {
  price: number | undefined;
  discount: number | undefined;
  className?: string;
  label?: string;
}

export interface PriceFormatter {
  amount: number | undefined;
  className?: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  stock_quantity: number | null;
  images: { id: number; src: string; alt: string }[];
  categories: { id: number; name: string; slug: string }[];
  average_rating: string;
  rating_count: number;
  sku: string;
}
