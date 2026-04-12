import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsersStore } from "./users.interface";
import { logoutAction } from "./actions";

const initialState: IUsersStore = {
  isLoading: false,
  isError: false,
  currentUser: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setLogout: (state) => {
      state.currentUser = null;
      localStorage.clear();
    },
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, (state) => {
      state.currentUser = null;
      localStorage.clear();
    });
  },
});

export const { setIsLoading, setCurrentUser, setIsError, setLogout } =
  usersSlice.actions;
