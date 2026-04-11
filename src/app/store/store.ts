import { searchSlice } from "@components/header";
import { favouritesSlice } from "@slices/favouritesSlice";
import { purchasesSlice } from "@slices/purchasesSlice";
import { mobileNavModalSlice } from "@slices/mobileNavModalSlice";

import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "@modules/products";

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    favourites: favouritesSlice.reducer,
    purchases: purchasesSlice.reducer,
    mobileNavModal: mobileNavModalSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
