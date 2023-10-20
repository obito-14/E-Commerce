/* eslint-disable react/prop-types */
import { FaTrash } from "react-icons/fa";
import FormatPrice from "../Helper/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import "./CartItem.css";
import { useCartContext } from "../Context/Cart_context";
const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrease, setIncrease } = useCartContext();

  return (
    <div className="CartItContainer">
      <div className="CartItImgBox">
        <img className="CartItImg" src={image} alt={id} />
        <div>
          <p className="CartItName">{name}</p>
          <div className="colorBox">
            <p>Color:</p>
            <div
              className="colorStyle"
              style={{ backgroundColor: color, color: color }}></div>
          </div>
        </div>
      </div>
      <div className="CartItPrice">
        <FormatPrice price={price} />
      </div>
      <div className="CartItAmount">
        <CartAmountToggle
          amount={amount}
          setDecrease={() => setDecrease(id)}
          setIncrease={() => setIncrease(id)}
        />
      </div>
      <div className="CartItSubTotal">
        <FormatPrice price={price * amount} />
      </div>
      <div className="CartItRemove">
        <FaTrash className="FaTrash" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
