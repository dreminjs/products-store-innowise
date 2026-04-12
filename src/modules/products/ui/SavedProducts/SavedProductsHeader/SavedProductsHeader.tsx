import { SavedProductsHeaderList } from "./SavedProductsHeaderList";
import styles from "./SavedProductsHeader.module.css";
export const SavedProductsHeader = () => {
  return (
    <header className={styles.savedProductsHeader}>
      <SavedProductsHeaderList />
    </header>
  );
};
