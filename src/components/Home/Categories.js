import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./Categories.scss";
export default function Categories({ setFilters, setupdatedProduct }) {
  const { products } = useContext(ProductContext);
  let categories = products.map((value) => value.category);
  let uniquecategories = categories.reduce(
    (uniqueValues, currentValue) =>
      uniqueValues.includes(currentValue)
        ? uniqueValues
        : [...uniqueValues, currentValue],
    []
  );
  const onclick = (category) => {
    setupdatedProduct([]);
    setFilters(Object.values(category)[0]);
  };

  return (
    <div className="categories">
      {uniquecategories.map((category) => (
        <button
          className="categoriesButton"
          key={category}
          onClick={() => onclick({ category })}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
