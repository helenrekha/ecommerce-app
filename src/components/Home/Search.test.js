// Search.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "./Search";

// const mockProductContext = {
//   products: [
//     { title: "Product A" },
//     { title: "Product B" },
//     { title: "Another Product" },
//   ],
// };

// jest.mock("../context/ProductContext", () => ({
//   ProductContext: {
//     Consumer: ({ children }) => children(mockProductContext),
//   },
// }));
test("Renders the input element", () => {
  render(<Search setupdatedProduct={() => {}} setItemsFound={() => {}} />);
  const searchInput = screen.getByPlaceholderText("Search for products");
  expect(searchInput).toBeInTheDocument();
});
