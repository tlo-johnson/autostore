const searchAppId = process.env.REACT_APP_X_ALGOLIA_APPLICATION_ID;
const searchApiKey = process.env.REACT_APP_X_ALGOLIA_API_KEY;

export const searchUrl = `https://i1cqoys68c-dsn.algolia.net/1/indexes/stg_choicemarket_products/query?x-algolia-application-id=${searchAppId}&x-algolia-api-key=${searchApiKey}`;

export const defaultNumHitsPerPage = 10;
