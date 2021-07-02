export interface SearchResults {
  success: boolean;
  results: [];
  page: number;
}

export const DefaultSearchResults = {success: true, results: []} as SearchResults;
export const ErrorSearchResults = {success: false} as SearchResults;
