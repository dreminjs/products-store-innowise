import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import { TProduct } from "@interfaces/products.interface";
import type { IProductsSlice } from "./products.interface";

const initialState: IProductsSlice = {
  favouritesProducts: {},
  purchaseProducts: {},
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleFavouriteProduct: (state, action: PayloadAction<TProduct>) => {
      const product = action.payload;
      if (state.favouritesProducts[product.id]) {
        delete state.favouritesProducts[product.id];
      } else {
        state.favouritesProducts[product.id] = product;
      }
    },

    togglePurchaseProduct: (state, action: PayloadAction<TProduct>) => {
      const product = action.payload;
      if (state.purchaseProducts[product.id]) {
        delete state.purchaseProducts[product.id];
      } else {
        state.purchaseProducts[product.id] = product;
      }
    },

    clearFavouriteProducts: (state) => {
      state.favouritesProducts = {};
    },
    clearPurchaseProducts: (state) => {
      state.purchaseProducts = {};
    },
  },
});

export const {
  clearFavouriteProducts,
  clearPurchaseProducts,
  toggleFavouriteProduct,
  togglePurchaseProduct,
} = productsSlice.actions;
