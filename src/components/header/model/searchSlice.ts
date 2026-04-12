import { createSlice } from "@reduxjs/toolkit";
import { ISearchStore } from "./interfaces/search.interface";
import { PayloadAction } from "@reduxjs/toolkit";
import { IInputChangeEvent } from "@shared/index";

const initialState: ISearchStore = {
  searchValue: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    onSetSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { onSetSearchValue } = searchSlice.actions;
