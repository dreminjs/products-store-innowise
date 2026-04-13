import { SavedProductsHeader } from "./SavedProductsHeader/SavedProductsHeader";
import { SavedProductsList } from "./SavedProductsList";
import { FC } from "react";
import styles from "./SavedProducts.module.css";
import { ICart } from "@modules/Products/model/carts.interface";

type TSavedProductsProps = Omit<
  ICart,
  | "userId"
  | "id"
  | "discountedTotal"
  | "total"
  | "totalProducts"
  | "totalQuantity"
>;
export const SavedProducts: FC<TSavedProductsProps> = ({ products }) => {
  return (
    <div className={styles.savedProducts}>
      <SavedProductsHeader />
      <SavedProductsList products={products} />
    </div>
  );
};
