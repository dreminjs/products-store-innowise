import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@shared/api/base-query";

export const categoriesApi = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    // getCategories: builder.query<void, string[]>({
    //   query: () => "/products/category-list",
    // }),
  }),
});
