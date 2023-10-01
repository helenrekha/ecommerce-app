import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import "./Search.scss";
export default function Search({ setupdatedProduct, setItemsFound }) {
  const { products } = useContext(ProductContext);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let array = products.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setupdatedProduct(array);
      if (array.length === 0) {
        setItemsFound(false);
      } else {
        setItemsFound(true);
      }
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
    //eslint-disable-next-line
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
