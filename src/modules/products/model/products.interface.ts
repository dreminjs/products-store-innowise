import { IPaginatedResponse } from "@shared/index";
import { IAPIProduct, TProduct } from "@interfaces/products.interface";
import { TSortVariant } from "./filters.interface";

export interface IProductsResponse extends IPaginatedResponse {
  products: IAPIProduct[];
}

export interface IProductsQueryParams {
  skip: number;
  title: string;
  sortVariant: TSortVariant;
}

export interface IProductsSlice {
  favouritesProducts: Record<number, TProduct>;
  purchaseProducts: Record<number, TProduct>;
}

export type TTab = "favourites" | "purchase";
