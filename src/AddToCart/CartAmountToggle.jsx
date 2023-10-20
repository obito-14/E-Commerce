/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BsDash, BsPlusLg } from "react-icons/bs";
import "./CartAmountToggle.css";
const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
  return (
    <div className="AmountContainer">
      <button className="AmountIcons" onClick={() => setDecrease()}>
        <BsDash />
      </button>
      <div className="Amount">{amount}</div>
      <button className="AmountIcons" onClick={() => setIncrease()}>
        <BsPlusLg />
      </button>
    </div>
  );
};

export default CartAmountToggle;
