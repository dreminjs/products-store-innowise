import { Categories } from "@modules/categories";
import styles from "../ui/Products/Products.module.css";
import { Products } from "../ui/Products/Products";

export default () => {
  return (
    <div className={styles.productsInner}>
      <Categories />
      <Products />
    </div>
  );
};
