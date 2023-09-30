// Search.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For additional matchers
import Search from "./Search";

const mockProductContext = {
  products: [
    { title: "Product A" },
    { title: "Product B" },
    { title: "Another Product" },
  ],
};

jest.mock("../context/ProductContext", () => ({
  ProductContext: {
    Consumer: ({ children }) => children(mockProductContext),
  },
}));
test("Renders the input element", () => {
  render(<Search setupdatedProduct={() => {}} />);
  const searchInput = screen.getByPlaceholderText("Search for products");
  expect(searchInput).toBeInTheDocument();
});
