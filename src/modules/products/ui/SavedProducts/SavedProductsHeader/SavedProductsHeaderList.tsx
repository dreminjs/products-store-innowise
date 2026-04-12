import { savedProductsTitles } from "@modules/products/model/data";
import { SavedProductsHeaderListItem } from "./SavedProductsHeaderListItem";
import styles from "./SavedProductsHeader.module.css";
export const SavedProductsHeaderList = () => {
  return (
    <ul className={styles.savedProductsHeaderList}>
      {savedProductsTitles.map((item) => (
        <SavedProductsHeaderListItem
          key={item.title}
          label={item.title}
          body={item.body}
        />
      ))}
    </ul>
  );
};
