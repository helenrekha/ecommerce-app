import Categories from "./Categories";
import ImageLoader from "./ImageLoader";
import { ProductContext } from "../context/ProductContext";
import { useContext, useEffect, useState } from "react";
import Search from "./Search";
export default function ProductDisplay() {
  const { products } = useContext(ProductContext);
  const [filters, setFilters] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [updatedProduct, setupdatedProduct] = useState([]);
  const [itemsFound, setItemsFound] = useState(null);
  //
  useEffect(() => {
    let newProducts = [];
    if (filters !== "") {
      console.log("hello");
      newProducts = products.filter((product) => filters === product.category);
    }
    setFilteredProducts(newProducts);
  }, [filters]);
  return (
    <div>
      <Search
        setupdatedProduct={setupdatedProduct}
        setItemsFound={setItemsFound}
      />
      <Categories
        setFilters={setFilters}
        setupdatedProduct={setupdatedProduct}
      />
      {itemsFound === false && <p>No relavent Items found</p>}
      {updatedProduct.length >= 1 ? (
        <ImageLoader products={updatedProduct} />
      ) : filteredProducts.length >= 1 ? (
        <ImageLoader products={filteredProducts} />
      ) : (
        <ImageLoader products={products} />
      )}
    </div>
  );
}
