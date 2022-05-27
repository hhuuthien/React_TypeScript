import React, { useState } from "react";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";
import { ProductModel } from "../_core/models/ProductModel";

type Props = {};

const arrProduct: ProductModel[] = [
  { id: 1, name: "ABC" },
  { id: 2, name: "DEF" },
];

export default function HomePage({}: Props) {
  const [num, setNum] = useState<number>(1);
  return (
    <div className="container">
      <Cart />
      <div style={{ width: 10, minHeight: 50 }}></div>
      <ProductList arrProduct={arrProduct} />
    </div>
  );
}
