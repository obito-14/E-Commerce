import { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/vsStore.png";
import Model from "./Model_/Model";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/Cart_context";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const [showModel, setShowModel] = useState();
  const { total_item } = useCartContext();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <div>
      <div className="navbarContainer">
        <div className="logoImgBox">
          <Link to={"/"}>
            <img className="logoImg" src={Logo} />
          </Link>
        </div>
        <ul className="navbarPages">
          <Link to={"/"}>
            <li className="pages">
              <p>Home</p>
            </li>
          </Link>
          <Link to={"/products"}>
            <li className="pages">
              <p>Products</p>
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="pages">
              <p>About</p>
            </li>
          </Link>
          <Link to={"/contact"}>
            <li className="pages">
              <p>Contact</p>
            </li>
          </Link>
          {isAuthenticated && (
            <div className="NavbarProfileBox">
              <img
                className="NavbarProfile"
                src={user.picture}
                alt={user.name}
              />
              <p className="NavbarProfileName">{user.name}</p>
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
            <li className="pages">
              <p className="cart">
                <AiOutlineShoppingCart />
              </p>
              <span className="cartNum">{total_item}</span>
            </li>
          </Link>
        </ul>
        <p className="NavbarMenu" onClick={() => setShowModel(true)}>
          <AiOutlineMenu />
        </p>

        {showModel && <Model remove={setShowModel} />}
      </div>
    </div>
  );
};

export default Navbar;
