import { FunctionComponent } from "react";
import { SearchResult } from "domain/searchResults";
import Product from "components/Product";
import ErrorMessage from "components/ErrorMessage";
import Pagination from "components/Pagination";

interface SearchResultsProps {
  result: SearchResult;
}

const SearchResults: FunctionComponent<SearchResultsProps> = (props) => {
  const { result } = props;
  if (!result.success) return <ErrorMessage />;

  const { products } = result;
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      <Pagination numPages={result.numPages} />
    </>
  );
};

export default SearchResults;
