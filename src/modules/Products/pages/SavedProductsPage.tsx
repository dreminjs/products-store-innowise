import { Tabs } from "../ui/SavedProducts/Tabs/Tabs";
import styles from "../ui/SavedProducts/SavedProducts.module.css";
import { PurchasedProducts } from "../ui/SavedProducts/PurchasedProducts";

export default () => {
  return (
    <div className={styles.savedProductsWrapper}>
      <Tabs />
      <PurchasedProducts />
    </div>
  );
};
