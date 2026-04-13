import { Tabs } from "../ui/SavedProducts/Tabs/Tabs";
import styles from "../ui/SavedProducts/SavedProducts.module.css";

export default () => {
  return (
    <div className={styles.savedProductsWrapper}>
      <Tabs />
    </div>
  );
};
