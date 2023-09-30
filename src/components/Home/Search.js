import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
export default function Search({ setupdatedProduct }) {
  const { products } = useContext(ProductContext);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let array = products.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setupdatedProduct(array);
    }, 1500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);
  return (
    <div>
      <input
        className="search"
        style={{ color: "black" }}
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
