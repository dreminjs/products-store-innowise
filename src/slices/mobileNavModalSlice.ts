import { createSlice } from "@reduxjs/toolkit";

export const mobileNavModalSlice = createSlice({
  name: "modalNavModal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    onToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { onToggle } = mobileNavModalSlice.actions;
