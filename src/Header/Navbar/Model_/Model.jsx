/* eslint-disable react/prop-types */
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import "./Model.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../Context/Cart_context";
import { useAuth0 } from "@auth0/auth0-react";

const Model = ({ remove }) => {
  const { total_item } = useCartContext();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="NavContainer">
      <ul className="NavMainPages">
        <p className="NavCross" onClick={() => remove(false)}>
          <RxCross2 />
        </p>
        <Link to={"/"}>
          <li className="NavPages">
            <p onClick={() => remove(false)}>Home</p>
          </li>
        </Link>
        <Link to={"/products"}>
          <li className="NavPages">
            <p onClick={() => remove(false)}>Products</p>
          </li>
        </Link>
        <Link to={"/about"}>
          <li className="NavPages">
            <p onClick={() => remove(false)}>About</p>
          </li>
        </Link>

        <Link to={"/contact"}>
          <li className="NavPages">
            <p onClick={() => remove(false)}>Contact</p>
          </li>
        </Link>
        {isAuthenticated && (
          <div>
            <img src={user.picture} alt={user.name} />
            <p>{user.name}</p>
          </div>
        )}
        {isAuthenticated ? (
          <li className="pages">
            <p
              className="logIn"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }>
              Log Out
            </p>
          </li>
        ) : (
          <li className="pages">
            <p className="logIn" onClick={() => loginWithRedirect()}>
              Log In
            </p>
          </li>
        )}
        <Link to={"/cart"}>
          <li className="NavPages">
            <p onClick={() => remove(false)} className="NavCart">
              <AiOutlineShoppingCart />
            </p>
            <span className="NavCartNum">{total_item}</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Model;
