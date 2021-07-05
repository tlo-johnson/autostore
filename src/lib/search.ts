/*
 * There's an algolia javascript client. I assume we don't particularly want me using said client.
 * https://github.com/algolia/algoliasearch-client-javascript
 */

import { searchUrl, hitsPerPage } from "lib/constants";
import { SearchResult, ErrorSearchResult } from "domain/searchResults";
import { mapSearchResults } from "lib/mappers/searchResults";

export const performSearch = async (query: string): Promise<SearchResult> => {
  const body = { query, hitsPerPage };
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
