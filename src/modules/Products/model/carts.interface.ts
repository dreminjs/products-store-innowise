import { TCartProduct } from "@interfaces/products.interface";
import { IPaginatedQueryParams, IPaginatedResponse } from "@shared/index";

export interface ICart {
  id: number;
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
  products: TCartProduct[];
}

export interface ICartsResponse extends IPaginatedResponse {
  carts: ICart[];
}

export interface ICartQueryParams extends IPaginatedQueryParams {
  userId: number;
}
