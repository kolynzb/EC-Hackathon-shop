import { createSlice } from "@reduxjs/toolkit";
import data from "../../dummydata/data";
import { Product } from "../../interfaces/Product.interface";

type Cart = Array<Product>;

interface CartState {
  cart: Cart | null;
}

const initialState: CartState = {
  cart: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart?.push(
        ...data.filter((product) => product.id == action.payload)
      );
    },
    removeFromCart: (state, action) => {
      const index = state.cart?.indexOf(
        state.cart?.filter((product) => product.id == action.payload)[0]
      );
      if (index! > -1) {
        state.cart?.splice(index!, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
