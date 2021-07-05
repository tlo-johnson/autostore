import { FunctionComponent } from "react";
import { Product } from "domain/product";
import "./Card.css";

interface CardProps {
  product: Product;
}

const Card: FunctionComponent<CardProps> = ({ product }) => {
  return (
    <div className="Card">
      <p>{`Name: ${product.name}`}</p>
      {product.description && <p>{`Description: ${product.description}`}</p>}
    </div>
  );
};

export default Card;
