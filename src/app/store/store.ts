import { searchSlice } from "@components/header";
import { favouritesSlice } from "@slices/favouritesSlice";
import { purchasesSlice } from "@slices/purchasesSlice";
import { mobileNavModalSlice } from "@slices/mobileNavModalSlice";

import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "@modules/products";
import { filtersSlice } from "@modules/products/model/filters.slice";
import { productsSlice } from "@modules/products/model/products.slice";
import { usersApi, usersSlice } from "@modules/Users";
import { notificationSlice } from "@modules/Notifications";

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
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
