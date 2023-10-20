/* eslint-disable no-unused-vars */
import Home from "./Home";
import Products from "./Products/Products";
import About from "./About";
import Contacts from "./Contacts";
import Cart from "./Cart";
import SingleProductPage from "./SingleProductPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Header/Navbar/Navbar";
import Footer from "./Footer/Footer";
import ErrorPage from "./ErrorPage/ErrorPage";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/singleProductPage/:id"
            element={<SingleProductPage />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
