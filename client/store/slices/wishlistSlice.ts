import { createSlice } from "@reduxjs/toolkit";
import data from "../../dummydata/data";
import { Product } from "../../interfaces/Product.interface";

type Wishlist = Array<Product>;
interface WishlistState {
  wishlist: Wishlist[];
}
const initialState: WishlistState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist.push(
        data.filter((product) => product.id == action.payload)
      );
    },

    removeFromWishlist: (state, action) => {
      state.wishlist.push(
        data.filter((product) => product.id == action.payload)
      );
    },
  },
});
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
