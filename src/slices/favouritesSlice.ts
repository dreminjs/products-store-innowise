import { createSlice } from "@reduxjs/toolkit/react";

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState: 0,
  reducers: {
    onAddFavourite: (state) => state + 1,
    onRemoveFavourite: (state) => state - 1,
  },
});

export const { onAddFavourite, onRemoveFavourite } = favouritesSlice.actions;
