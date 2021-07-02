/*
 * There's an algolia javascript client. I assume we don't particularly want me using said client.
 * https://github.com/algolia/algoliasearch-client-javascript
 */

import {searchUrl, hitsPerPage} from 'lib/constants';

export const performSearch = async (query: string) => {
  const body = {query, hitsPerPage};
  const options = {body: JSON.stringify(body), method: 'POST'};
  const response = await fetch(searchUrl, options);

  const data = await response.json();
  // error handling?
  console.log(data);
}
