import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import "./Search.scss";
export default function Search({ setupdatedProduct }) {
  const { products } = useContext(ProductContext);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    debugger;
    const delayDebounceFn = setTimeout(() => {
      let array = products.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setupdatedProduct(array);
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);
  return (
    <div>
      <input
        className="search"
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        placeholder="search for products"
      />
    </div>
  );
}
