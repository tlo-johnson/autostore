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


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
