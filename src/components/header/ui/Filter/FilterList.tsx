import { filterItems } from "@components/header/model/data";
import { FilterItem } from "./FilterItem";
import styles from "./Filter.module.css";

export const FilterList = () => {
  return (
    <ul className={styles.filterList}>
      {filterItems.map((el) => (
        <FilterItem key={el.payload} {...el} />
      ))}
    </ul>
  );
};
