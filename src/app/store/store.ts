import { searchSlice } from "@components/header";
import { favouritesSlice } from "@slices/favouritesSlice";
import { purchasesSlice } from "@slices/purchasesSlice";
import { mobileNavModalSlice } from "@slices/mobileNavModalSlice";
import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "@modules/Products";
import { filtersSlice } from "@modules/Products/model/filters.slice";
import { productsSlice } from "@modules/Products/model/products.slice";
import { usersApi, usersSlice } from "@modules/Users";
import { notificationSlice } from "@modules/Notifications";
import { authApi } from "@modules/Login";
import { cartsApi } from "@modules/Products/api/cartsApi";

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    favourites: favouritesSlice.reducer,
    purchases: purchasesSlice.reducer,
    mobileNavModal: mobileNavModalSlice.reducer,
    filters: filtersSlice.reducer,
    products: productsSlice.reducer,
    users: usersSlice.reducer,
    notifications: notificationSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [cartsApi.reducerPath]: cartsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      usersApi.middleware,
      authApi.middleware,
      cartsApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
