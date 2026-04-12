import { Categories } from "../ui/Categories/Categories";
import { Products } from "../ui/Products/Products";
import styles from "../ui/Products/Products.module.css";

export default () => {
  return (
    <div className={styles.productsInner}>
      <Categories />
      <Products />
    </div>
  );
};
