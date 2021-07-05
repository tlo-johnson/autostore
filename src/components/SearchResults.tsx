import { FunctionComponent } from "react";
import { Product } from "domain/product";

interface SearchResultsProps {
  products: Product[];
}

const SearchResults: FunctionComponent<SearchResultsProps> = (props) => {
  const { products } = props;
  return (
    <>
      {products.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </>
  );
};

export default SearchResults;
