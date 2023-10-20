/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import "./MyImage.css";
const MyImage = ({ image = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(image[0]);
  return (
    <div className="MyImageContainer">
      <div className="MyImageContainerBox">
        {image.map((currElm, index) => {
          return (
            <figure className="MISideBarImg">
              <img
                className="MyImages"
                src={currElm.url}
                alt={index}
                onClick={() => setMainImage(currElm)}
                key={index}
              />
            </figure>
          );
        })}
      </div>
      <div className="MIMainImg">
        <img
          className="MyMainImage"
          src={mainImage.url}
          alt={mainImage.filename}
        />
      </div>
    </div>
  );
};

export default MyImage;
