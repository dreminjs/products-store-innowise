import styles from "./Filter.module.css";
import { FilterList } from "./FilterList";

export const Filter = () => {
  return (
    <div className={styles.filter}>
      <FilterList />
    </div>
  );
};
