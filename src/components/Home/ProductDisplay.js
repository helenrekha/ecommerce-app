import Categories from "./Categories";
import ImageLoader from "./ImageLoader";
import { ProductContext } from "../context/ProductContext";
import { useContext, useEffect, useState } from "react";
import Search from "./Search";
import "./ProductsDisplay.scss";
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
    //eslint-disable-next-line
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
      {itemsFound === false && (
        <div className="Error">
          <p>No relavent Items found</p>
          <p>Loading All items...</p>
        </div>
      )}
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
