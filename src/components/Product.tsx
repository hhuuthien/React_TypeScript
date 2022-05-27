import React from "react";
import { ProductModel } from "../_core/models/ProductModel";

type Props = {
  prod: ProductModel;
};

export default function Product({ prod }: Props) {
  return (
    <div>
      Sản phẩm: {prod.id} - Tên: {prod.name}
    </div>
  );
}
