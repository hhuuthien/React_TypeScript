import React from "react";
import { ProductModel } from "../_core/models/ProductModel";
import Product from "./Product";

type Props = {
  arrProduct: ProductModel[];
};

export default function ProductList({ arrProduct }: Props) {
  return (
    <div>
      {arrProduct.map((p, i) => {
        return (
          <div key={i}>
            <Product prod={p} />
          </div>
        );
      })}
    </div>
  );
}
