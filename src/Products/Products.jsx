import FilterSection from "./FilterSection/FilterSection";
import ProductList from "./ProductList/ProductList";
import Sort from "./Sort/Sort";
import "./Products.css";
const Products = () => {
  return (
    <div className="productsContainer">
      <div className="productFilterSection">
        <FilterSection />
      </div>
      <section className="productBox">
        <div className="productsSort">
          <Sort />
        </div>
        <div className="PProductList">
          <ProductList />
        </div>
      </section>
    </div>
  );
};

export default Products;
