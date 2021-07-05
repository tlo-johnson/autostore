import { FunctionComponent } from "react";
import { Product as ProductDto } from "domain/product";
import "./Product.css";

interface ProductProps {
  product: ProductDto;
}

const Product: FunctionComponent<ProductProps> = ({ product }) => {
  return (
    <div className="Product">
      <p>{`Name: ${product.name}`}</p>
      {product.description && <p>{`Description: ${product.description}`}</p>}
    </div>
  );
};

export default Product;
