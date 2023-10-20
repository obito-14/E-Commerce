/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/FilterReducer";
import { useProductContext } from "./ProductContext";

const FilterContext = createContext();

const initialState = {
  isLoading: false,
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  // To Loading

  const setLoading = () => {
    return dispatch({ type: "SET_LOADING" });
  };

  // To set The Grid View

  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW", payload: products });
  };
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW", payload: products });
  };
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        setLoading,
        sorting,
        updateFilterValue,
        clearFilters,
      }}>
      {children}
    </FilterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFilterContext = () => {
  return useContext(FilterContext);
};
