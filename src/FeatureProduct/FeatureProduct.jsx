/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useProductContext } from "../Context/ProductContext";
import Product from "../FeatureProduct/Product/Product";

import "./FeatureProduct.css";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
  if (isLoading) {
    return (
      // <div className="FPLoad">....Loading</div>
      <div className="FPLoad2">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  return (
    <div className="FPContainer">
      <div className="FPBox">
        <Link to={"/products"}>
          <p className="FPSubHead">CHECK NOW</p>
        </Link>
        <h1 className="FPMainHead">Our Feature Services</h1>
      </div>
      <div className="FProductBox">
        {featureProducts.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default FeatureProduct;
