import { useFilterContext } from "../../Context/FilterContext";
import "./FilterSection.css";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../../Helper/FormatPrice";

const FilterSection = () => {
  const {
    filters: { text, color, price, maxPrice, minPrice },
    all_products,
    updateFilterValue,
    clearFilters,
  } = useFilterContext();
  // To Get The UNIQUE Data Of Each Fields
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    if (property === "colors") {
      // return (newVal = ["all", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }
    return (newVal = ["all", ...new Set(newVal)]);
  };
  // To Get The UNIQUE Data
  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorData = getUniqueData(all_products, "colors");

  return (
    <div>
      <div className="FilterSearch">
        <form onSubmit={(e) => e.preventDefault.default()}>
          <input
            type="text"
            name="text"
            value={text}
            className="searchInput"
            onChange={updateFilterValue}
            placeholder="Search Any Products"
          />
        </form>
      </div>
      <div className="FilterBox">
        <div className="categoryBox">
          <h1>Category</h1>
          <form action="#">
            <select name="category" id="category" onClick={updateFilterValue}>
              {categoryData.map((currElem, index) => {
                return (
                  <option key={index} name="category" value={currElem}>
                    {currElem}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
        <div className="categoryBox">
          <h1>Company</h1>
          <form action="#">
            <select name="company" id="company" onClick={updateFilterValue}>
              {companyData.map((currElem, index) => {
                return (
                  <option key={index} name="company" value={currElem}>
                    {currElem}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
        <div className="categoryBox">
          <h1>Colors</h1>
          <div>
            {colorData.map((curColor, index) => {
              if (curColor === "all") {
                return (
                  <button
                    key={index}
                    type="button"
                    value={curColor}
                    name="color"
                    className="colorsBtn1"
                    onClick={updateFilterValue}>
                    all
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className="colorsBtn2"
                  style={{ backgroundColor: curColor }}
                  onClick={updateFilterValue}>
                  {color === curColor ? (
                    <FaCheck className="checkStyle" />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <h3>Price</h3>
          <p>
            <FormatPrice price={price} />
          </p>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilterValue}
          />
        </div>
        <div>
          <button className="BtnClear" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
