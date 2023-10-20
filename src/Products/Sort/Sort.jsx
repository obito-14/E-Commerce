import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsFillGridFill } from "react-icons/bs";
import { useFilterContext } from "../../Context/FilterContext";
import "./Sort.css";
const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterContext();

  return (
    <div className="SortContainer">
      <div className="SortBox">
        <p
          className={grid_view ? "ActiveSortView" : "SortView"}
          onClick={setGridView}>
          <BsFillGridFill />
        </p>
        <p
          className={!grid_view ? "ActiveSortView" : "SortView"}
          onClick={setListView}>
          <AiOutlineUnorderedList />
        </p>
      </div>
      <div className="SortProductLength">
        <p>{`${filter_products.length} Product Available`}</p>
      </div>
      <div className="SortDropDown">
        <form action="#">
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" onClick={sorting}>
            <option value="lowest">Price(Lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(Highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
