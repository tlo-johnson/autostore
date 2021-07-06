import { FunctionComponent } from "react";
import { SearchResult } from "domain/searchResults";
import Product from "components/Product";
import NoSearchResults from "components/NoSearchResults";

interface SearchResultsProps {
  result: SearchResult;
}

const SearchResults: FunctionComponent<SearchResultsProps> = (props) => {
  const { result } = props;
  if (!result.success) return <NoSearchResults />;

  const { products } = result;
  if (!products.length) return <NoSearchResults />;

  return (
    <>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
};

export default SearchResults;
