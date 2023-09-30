import { createContext, useState, useEffect } from "react";
export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((value) => {
        const productsWithQuantity = value.map((item) => ({
          ...item,
          quantity: 1,
          totalPrice: 1,
        }));
        setProducts(productsWithQuantity);
        console.log(products);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
