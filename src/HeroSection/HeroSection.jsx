/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./HeroSection.css";
const HeroSection = ({ myData }) => {
  const { name } = myData;
  return (
    <div className="HeroContainer">
      <div className="HeroDescription">
        <p className="heroP1">Welcome To Vs Store</p>
        <h1 className="HeroMainHead">{name}</h1>
        <p className="HeroP2">
          Also known as store managers or store supervisors, store keepers take
          stock of inventory, manage the store layout, supervise staff and keep
          records of sales.
        </p>
        <Link to={"/products"}>
          <button className="HeroShop">Shop Now</button>
        </Link>
      </div>
      <div className="HeroImgSection">
        <div>
          <p className="HeroImgBack"></p>
        </div>
        <img
          className="HeroMainImg"
          src="https://img.freepik.com/free-photo/happy-family-with-child-shopping-cart-buying-food_171337-2392.jpg?w=2000"
        />
      </div>
    </div>
  );
};

export default HeroSection;
