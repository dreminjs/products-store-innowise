import { Categories } from "@modules/categories";
import styles from "../ui/Products.module.css";
import { Products } from "../ui/Products";

export const ProductsPage = () => {
  return (
    <div className={styles.productsInner}>
      <Categories />
      <Products />
    </div>
  );
};
