import { Categories } from "@modules/categories";
import styles from "../ui/Products.module.css";

export const ProductsPage = () => {
  return (
    <div className={styles.productsInner}>
      <Categories items={""} />
    </div>
  );
};
