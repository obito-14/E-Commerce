/* eslint-disable react/prop-types */

import Product from "../../../FeatureProduct/Product/Product";
import "./GridView.css";

const GridView = ({ products, isLoading }) => {
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
    <div className="GridViewContainer">
      {products.map((currElm) => {
        return <Product key={currElm.id} {...currElm} />;
      })}
    </div>
  );
};

export default GridView;
