import { SavedProductsHeader } from "./SavedProductsHeader/SavedProductsHeader";
import { SavedProductsList } from "./SavedProductsList";
import { FC } from "react";
import styles from "./SavedProducts.module.css";
import { ICart } from "@modules/Products/model/carts.interface";

type TSavedProductsProps = Omit<
  ICart,
  "userId" | "id" | "discountedTotal" | "total"
>;
export const SavedProducts: FC<TSavedProductsProps> = ({
  products,
  totalProducts,
  totalQuantity,
}) => {
  return (
    <div className={styles.savedProducts}>
      <SavedProductsHeader />
      <SavedProductsList
        products={products}
        totalProducts={totalProducts}
        totalQuantity={totalQuantity}
      />
    </div>
  );
};
