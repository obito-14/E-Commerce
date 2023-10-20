import { useProductContext } from "./Context/ProductContext";
import HeroSection from "./HeroSection/HeroSection";
import FeatureProduct from "./FeatureProduct/FeatureProduct";

const About = () => {
  const data = {
    name: "Vs ECommerce",
  };
  const { myName } = useProductContext();
  return (
    <div>
      {myName}
      <HeroSection myData={data} />
      <FeatureProduct />
    </div>
  );
};

export default About;
