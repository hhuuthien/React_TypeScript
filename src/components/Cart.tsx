import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/configStore";
import { delProduct } from "../redux/reducer/gioHangReducer";

type Props = {};

export default function Cart({}: Props) {
  const cart = useSelector((state: RootState) => state.gioHangReducer.cart);
  const dispatch = useDispatch();

  const hdDelete = (idClick: number) => {
    const action = delProduct(idClick);
    dispatch(action);
  };

  return (
    <div>
      {cart.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              hdDelete(item.id);
            }}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
