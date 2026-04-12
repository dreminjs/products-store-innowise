import {
  createApi,
  EndpointBuilder,
  EndpointDefinitions,
} from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@shared/api/base-query-with-reauth";
import { ICartQueryParams, ICartsResponse } from "../model/carts.interface";

export const cartsApi = createApi({
  reducerPath: "cartsApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getCartsByUserId: builder.query<ICartsResponse, ICartQueryParams>({
      query: (dto) => ({
        url: `/carts/user/${dto.userId}?skip=${dto.skip}&take=${dto.take}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCartsByUserIdQuery } = cartsApi;
