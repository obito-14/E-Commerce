/* eslint-disable react/prop-types */
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "./Stars.css";
const Stars = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars > index + 1 ? (
          <FaStar className="Star" />
        ) : stars > number ? (
          <FaStarHalfAlt className="Star" />
        ) : (
          <AiOutlineStar className="OutlineStar" />
        )}
      </span>
    );
  });
  return (
    <div>
      {ratingStar}
      <span className="Reviews">({reviews} Customer Reviews)</span>
    </div>
  );
};

export default Stars;
