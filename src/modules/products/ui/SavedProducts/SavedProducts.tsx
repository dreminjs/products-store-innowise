import { ICart } from "@modules/products/model/carts.interface";
import { SavedProductsHeader } from "./SavedProductsHeader/SavedProductsHeader";
import { SavedProductsList } from "./SavedProductsList";
import { FC } from "react";
import styles from "./SavedProducts.module.css";

type TSavedProductsProps = Omit<ICart, "userId">;

export const SavedProducts: FC<TSavedProductsProps> = ({
  products,
  discountedTotal,
  total,
  totalProducts,
  totalQuantity,
}) => {
  return (
    <div className={styles.savedProducts}>
      <SavedProductsHeader />
      <SavedProductsList
        products={products}
        discountedTotal={discountedTotal}
        total={total}
        totalProducts={totalProducts}
        totalQuantity={totalQuantity}
      />
    </div>
  );
};
