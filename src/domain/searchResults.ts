import { Product } from "domain/product";

export interface SearchResult {
  success: boolean;
  products: Product[];
  page: number;
  hasMorePages: boolean;
}

export const DefaultSearchResult = { success: true, products: [] as Product[] } as SearchResult;
export const ErrorSearchResult = { success: false } as SearchResult;
