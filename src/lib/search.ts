/*
 * There's an algolia javascript client. I assume we don't particularly want me using said client.
 * https://github.com/algolia/algoliasearch-client-javascript
 */

import { searchUrl } from "lib/constants";
import { SearchResult, ErrorSearchResult } from "domain/searchResults";
import { mapSearchResults } from "lib/mappers/searchResults";

export const performSearch = async (
  query: string,
  hitsPerPage: number,
  pageNumber: number = 0
): Promise<SearchResult> => {
  const body = { query, hitsPerPage, page: pageNumber };
  const options = { body: JSON.stringify(body), method: "POST" };

  try {
    const response = await fetch(searchUrl, options);
    const data = await response.json();
    return { success: true, ...mapSearchResults(data) };
  } catch (error) {
    console.log(error);
    return ErrorSearchResult;
  }
};
