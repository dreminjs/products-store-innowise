import { FC } from "react";
import { ICart } from "@modules/Products/model/carts.interface";
import { SavedProductsListItem } from "./SavedProductsListItem/SavedProductsListItem";
import styles from "./SavedProducts.module.css";
type TSavedProductsListProps = Omit<ICart, "id" | "userId">;

export const SavedProductsList: FC<TSavedProductsListProps> = ({
  products,
}) => {
  return (
    <ul className={styles.savedProductsList}>
      {products.map((product) => (
        <SavedProductsListItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          discountPercentage={product.discountPercentage}
          img={product.thumbnail}
        />
      ))}
    </ul>
  );
};
