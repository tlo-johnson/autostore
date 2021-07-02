/*
 * There's an algolia javascript client. I assume we don't particularly want me using said client.
 * https://github.com/algolia/algoliasearch-client-javascript
 */

import {searchUrl, hitsPerPage} from 'lib/constants';
import {SearchResults, ErrorSearchResults} from 'domain/searchResults';
import {mapSearchResults} from 'lib/mappers/searchResults';

export const performSearch = async (query: string): Promise<SearchResults> => {
  const body = {query, hitsPerPage};
  const options = {body: JSON.stringify(body), method: 'POST'};

  try {
    const response = await fetch(searchUrl, options);
    const data = await response.json();
    const {results, page} = mapSearchResults(data);
    return {success: true, results, page};
  } catch {
    return ErrorSearchResults;
  }
}
