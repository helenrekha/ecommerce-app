import { useEffect, useState } from "react";
import ProductDisplay from "./ProductDisplay";
export default function ProductFetch() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((value) => {
        const productsWithQuantity = value.map((item) => ({
          ...item,
          quantity: 1,
          totalPrice: 1,
        }));
        setProduct(productsWithQuantity);
      });
  }, []);
  return (
    <div>
      {product !== null && (
        <div>
          <ProductDisplay product={product} />
        </div>
      )}
    </div>
  );
}
