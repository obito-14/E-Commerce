import { useCartContext } from "./Context/Cart_context";
import "./Cart.css";
import CartItem from "./AddToCart/CartItem";
import { Link } from "react-router-dom";
import FormatPrice from "./Helper/FormatPrice";
import { useAuth0 } from "@auth0/auth0-react";
const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  const { isAuthenticated, user } = useAuth0();
  if (cart.length === 0) {
    return (
      <div className="NoCart">
        <h1>NO Cart In Item</h1>
        <Link to={"/products"}>
          <button className="BtnContinue">Continue Shopping</button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      {isAuthenticated && (
        <div className="cartProfileBox">
          <img className="cartProfile" src={user.picture} alt={user.name} />
          <p className="cartProfileName">{user.name}</p>
        </div>
      )}

      <div className="cartBox">
        <div className="cartSubBox">
          <p className="cartHead1">Item</p>
          <p className="cartHead2">Price</p>
          <p className="cartHead3">Quantity</p>
          <p className="cartHead4">SubTotal</p>
          <p className="cartHead5">Remove</p>
        </div>
      </div>
      <div className="hr">
        <hr />
      </div>
      <div className="cartBox">
        {cart.map((currElm) => {
          return <CartItem key={currElm.id} {...currElm} />;
        })}
      </div>
      <div className="hr">
        <hr />
      </div>
      <div className="cartBox2">
        <Link to={"/products"}>
          <button className="BtnContinue">Continue Shopping</button>
        </Link>
        <button className="BtnClearCart" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
      <div className="order-total--amount">
        <div className="order-total--subdata">
          <div className="order-total--subData1">
            <p>subtotal:</p>
            <p className="CartPrice">
              <FormatPrice price={total_price} />
            </p>
          </div>
          <div className="order-total--subData1">
            <p>shipping fee:</p>
            <p className="CartPrice">
              <FormatPrice price={shipping_fee} />
            </p>
          </div>
          <hr className="hr" />
          <div className="order-total--subData1">
            <p>order total:</p>
            <p className="CartPrice">
              <FormatPrice price={shipping_fee + total_price} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
