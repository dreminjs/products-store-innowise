import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@shared/api/base-query";
import {
  IProductsQueryParams,
  IProductsResponse,
} from "../model/products.interface";

export const productsApi = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getProducts: builder.query<IProductsResponse, IProductsQueryParams>({
      query: ({ skip, title, sortVariant }: IProductsQueryParams) =>
        title
          ? `/products/search?q=${title}&skip=${skip}&limit=10`
          : `/products?skip=${skip}&limit=10&order=${sortVariant === "ascending" ? "asc" : "desc"}`,
    }),

    getProductsCategories: builder.query<void, string[]>({
      query: () => "/products/category-list",
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsCategoriesQuery } =
  productsApi;
