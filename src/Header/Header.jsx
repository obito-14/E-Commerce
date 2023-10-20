/* eslint-disable react/prop-types */
import FeatureProduct from "../FeatureProduct/FeatureProduct";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../Footer/Services_/Service";
import Trusted from "../Footer/Services_/Trusted/Trusted";
// import Navbar from "./Navbar/Navbar";

const Header = ({ myData }) => {
  return (
    <div>
      <HeroSection myData={myData} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </div>
  );
};

export default Header;
