# React Search Result page: coding exercise 
The goal of this home exercise is to create a basic search result page based upon a basic product API. The API provided is a staging endpoint as exposed by the Algolia search engine, with real product data from one of our clients.

During the interview, we can talk about the solution and considerations taken into account in order to build the page. The goal is to have a minimal workable search page, which showcases the ability to quickly set up a frontend application. The code, together with running instructions, can be shared as a file bundle or public git repository

An example curl command is:

```
curl 'https://i1cqoys68c-dsn.algolia.net/1/indexes/stg_choicemarket_products/query?x-algolia-application-id=I1CQOYS68C&x-algolia-api-key=eac7b807c0109771a245855c7501fca3' \
    -H 'Connection: keep-alive' \
    -H 'accept: application/json' \
    -H 'Origin: https://www.algolia.com' \
    -H 'content-type: application/x-www-form-urlencoded' \
    -H 'Accept-Encoding: gzip, deflate, br' \
    --data '{"params":"query=chicken&hitsPerPage=5"}' \
    --compressed
```

Key elements:

- Host: https://i1cqoys68c-dsn.algolia.net
- Path: 1/indexes/stg_choicemarket_products/query
- API key: 
    -	x-algolia-application-id=I1CQOYS68C
    -	x-algolia-api-key=eac7b807c0109771a245855c7501fca3
- Data: a json representation of the search query

More advanced documentation (e.g. pagination information) can be found here: [Search API Parameters | API Reference | Algolia Documentation](https://www.algolia.com/doc/api-reference/search-api-parameters/)
