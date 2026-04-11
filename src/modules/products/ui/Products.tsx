import { ChoosedFilters } from "./ChoosedFilters/ChoosedFilters";
import { FilterSelections } from "./FilterSelections/common-ui/FilterSelections";
import styles from "./Products.module.css";

export const Products = () => {
  return (
    <div className={styles.products}>
      <FilterSelections />
      <ChoosedFilters />
    </div>
  );
};
