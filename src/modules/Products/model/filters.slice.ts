import { createSlice } from "@reduxjs/toolkit/react";
import { IFiltersSlice } from "./filters.interface";
import { toggle } from "@shared/index";

const initialState: IFiltersSlice = {
  categories: [],
  colors: [],
  sizes: [],
  brands: [],
  conditions: [],
  prizes: [],
  shops: [],
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.categories = toggle(state.categories, action.payload);
    },
    setColor: (state, action) => {
      state.colors = toggle(state.colors, action.payload);
    },
    setSize: (state, action) => {
      state.sizes = toggle(state.sizes, action.payload);
    },
    setBrand: (state, action) => {
      state.brands = toggle(state.brands, action.payload);
    },
    setCondition: (state, action) => {
      state.conditions = toggle(state.conditions, action.payload);
    },
    setPrize: (state, action) => {
      state.prizes = toggle(state.prizes, action.payload);
    },
    setShop: (state, action) => {
      state.shops = toggle(state.shops, action.payload);
    },
    removeShop: (state) => {
      state.shops.pop();
    },
    removeCategory: (state) => {
      state.categories.pop();
    },
    removeColor: (state) => {
      state.colors.pop();
    },
    removeSize: (state) => {
      state.sizes.pop();
    },
    removeBrand: (state) => {
      state.brands.pop();
    },
    removeCondition: (state) => {
      state.conditions.pop();
    },
    removePrize: (state) => {
      state.prizes.pop();
    },
  },
});

export const {
  setCategory,
  setColor,
  setSize,
  setBrand,
  setCondition,
  removeCategory,
  removeColor,
  removeSize,
  removeBrand,
  removeCondition,
  removePrize,
  setPrize,
  removeShop,
  setShop,
} = filtersSlice.actions;
