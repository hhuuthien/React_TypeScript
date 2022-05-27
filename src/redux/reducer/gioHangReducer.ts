import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  cart: [{ id: 0, name: "Sản phẩm trong giỏ hàng" }],
};

const gioHangReducer = createSlice({
  name: "gioHang",
  initialState,
  reducers: {
    delProduct: (state, action) => {
      console.log(action);
      state.cart = state.cart.filter((prod) => prod.id !== action.payload);
    },
  },
});

export const { delProduct } = gioHangReducer.actions;

export default gioHangReducer.reducer;
