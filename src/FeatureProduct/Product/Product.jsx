/* eslint-disable react/jsx-no-undef */
import FormatPrice from "../../Helper/FormatPrice";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <Link to={`/singleProductPage/${id}`}>
      <div className="ProductContainer">
        <figure>
          <img className="ProductImg" src={image} alt={name} />
          <figcaption>{category}</figcaption>
        </figure>
        <div className="Description">
          <p className="ProductName">{name}</p>
          <p className="ProductPrice">{<FormatPrice price={price} />}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
