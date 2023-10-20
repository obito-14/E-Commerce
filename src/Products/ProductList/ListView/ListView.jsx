/* eslint-disable react/jsx-key */

import "./ListView.css";
import { Link } from "react-router-dom";
import FormatPrice from "../../../Helper/FormatPrice";

/* eslint-disable react/prop-types */
const ListView = ({ products, isLoading }) => {
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
    <div>
      {products.map((currElm) => {
        const { id, name, image, price, description } = currElm;
        return (
          <div className="ListViewContainer">
            <div className="ListViewImgBox">
              <figure>
                <img className="LVMainImg" src={image} alt={name} />
              </figure>
            </div>
            <div className="LVBox2">
              <h2 className="LVName">{name}</h2>
              <p className="LVPrice">
                <FormatPrice price={price} />
              </p>
              <p className="LVDescription">{description}</p>
              <Link to={`/singleProductPage/${id}`}>
                <button className="LVBtn">See More</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
