import { useFilterContext } from "../../Context/FilterContext";
import GridView from "./GridView/GridView";
import ListView from "./ListView/ListView";

const ProductList = () => {
  const { filter_products, grid_view, isLoading } = useFilterContext();

  if (grid_view === true) {
    return <GridView products={filter_products} isLoading={isLoading} />;
  }
  if (grid_view === false) {
    return <ListView products={filter_products} isLoading={isLoading} />;
  }
};

export default ProductList;
