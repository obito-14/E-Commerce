/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import "./SingleProductPage.css";
import FormatPrice from "./Helper/FormatPrice";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "./Context/ProductContext";
import MyImage from "./FeatureProduct/MyImage/MyImage";
const API = "https://api.pujakaitem.com/api/products";
import { TbTruckDelivery, TbReplaceFilled } from "react-icons/tb";
import { PiShieldCheckeredFill } from "react-icons/pi";
import Stars from "./FeatureProduct/Stars/Stars";
import AddToCart from "./AddToCart/AddToCart";

const SingleProductPage = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    image,
    category,
    stock,
    stars,
    reviews,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  if (isSingleLoading) {
    return (
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
      <div className="SPPNavBackground">
        <Link to={"/"}>
          <div className="SPPNavHome">Home </div>
        </Link>
        <div className="SPPNavName">/{name}</div>
      </div>

      <div className="SPPContainer">
        <div className="SPPImage">
          <MyImage image={image} />
        </div>
        <div className="SPPDataBox">
          <h1 className="SPPDataName">{name}</h1>
          <Stars stars={stars} reviews={reviews} />
          <p className="SPPDataOffPrice">
            MRP:{" "}
            <del className="SPPSpan">
              {<FormatPrice price={price + 250000} />}
            </del>
          </p>
          <p className="SPPDataPrice">
            Deal Of The Day :<FormatPrice price={price} />
          </p>
          <p className="SPPData">{description}</p>
          <div className="SPPOffersBox">
            <div className="SPPOffers">
              <p className="SPPOffersIcon">
                <TbTruckDelivery />
              </p>
              <p className="SPPOffersName">Free Delivery</p>
            </div>
            <div className="SPPOffers">
              <p className="SPPOffersIcon">
                <TbReplaceFilled />
              </p>
              <p className="SPPOffersName">30 Days RePlaceMent</p>
            </div>
            <div className="SPPOffers">
              <p className="SPPOffersIcon">
                <TbTruckDelivery />
              </p>
              <p className="SPPOffersName">Fast Delivery</p>
            </div>
            <div className="SPPOffers">
              <p className="SPPOffersIcon">
                <PiShieldCheckeredFill />
              </p>
              <p className="SPPOffersName">2 Years warranty</p>
            </div>
          </div>
          <hr />
          <p className="SPPStock">
            Available:
            <span className="SPPSpan">
              {stock > 0 ? "In Stock" : "Not Available"}
            </span>
          </p>
          <p className="SPPId">
            ID: <span className="SPPSpan">{alias}</span>
          </p>
          <p className="SPPBrand">
            Brand: <span className="SPPSpan">{company}</span>
          </p>
          <hr />
          <div>{stock > 0 && <AddToCart product={singleProduct} />}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
