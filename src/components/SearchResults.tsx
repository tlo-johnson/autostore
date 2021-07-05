import { FunctionComponent } from "react";
import { Product } from "domain/product";
import Card from "components/Card";

interface SearchResultsProps {
  products: Product[];
}

const SearchResults: FunctionComponent<SearchResultsProps> = (props) => {
  const { products } = props;
  return (
    <>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </>
  );
};

export default SearchResults;
