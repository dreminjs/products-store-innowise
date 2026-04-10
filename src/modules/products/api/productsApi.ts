import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@shared/api/base-query";

export const productsApi = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getProductsCategories: builder.query<void, string[]>({
      query: () => "/products/category-list",
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsCategoriesQuery } =
  productsApi;
