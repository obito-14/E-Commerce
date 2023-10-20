/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import "./AddToCart.css";
import CartAmountToggle from "./CartAmountToggle";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/Cart_context";
const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);

  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <div>
      <div>
        <p>
          <span className="colors"> Colors:</span>
          {colors.map((currColor, index) => {
            return (
              <button
                style={{ backgroundColor: currColor }}
                key={index}
                className={color === currColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(currColor)}>
                {color === currColor ? (
                  <FaCheck className="checkStyle" />
                ) : null}
              </button>
            );
          })}
        </p>
      </div>
      <div>
        <CartAmountToggle
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />
      </div>
      <div>
        <Link
          to={"/cart"}
          onClick={() => addToCart(id, color, amount, product)}>
          <button className="AddToCart">ADD TO CART</button>
        </Link>
      </div>
    </div>
  );
};

export default AddToCart;
