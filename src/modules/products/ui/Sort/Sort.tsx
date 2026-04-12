import { SortVariant } from "./SortVariant";
import { TSortVariant } from "@modules/products/model/filters.interface";
import styles from "./Sort.module.css";
import { FC } from "react";

interface ISortProps {
  handleSortChange: (variant: TSortVariant) => void;
  sortVariant: TSortVariant;
}

export const Sort: FC<ISortProps> = ({ handleSortChange, sortVariant }) => {
  return (
    <div className={styles.sort}>
      <p>Sort by: </p>
      <ul className={styles.sortList}>
        <SortVariant
          label={"Ascending"}
          onChoose={handleSortChange.bind(null, "ascending")}
          isActive={sortVariant === "ascending"}
        />
        <SortVariant
          label={"Descending"}
          onChoose={handleSortChange.bind(null, "descending")}
          isActive={sortVariant === "descending"}
        />
      </ul>
    </div>
  );
};
