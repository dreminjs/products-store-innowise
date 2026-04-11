import styles from "./FilterSelections.module.css";
import { useState } from "react";
import { FilterSizesSelections } from "../FilterSizesSelections";
import { FilterColorsSelections } from "../FilterColorsSelections";
import { FilterBrandsSelections } from "../FilterBrandsSelections";
import { FilterShopsSelections } from "../FilterShopsSelections";

export const FilterSelections = () => {
  const [filterListIndex, setFilterListIndex] = useState<number | null>(null);

  const handleFilterClick = (index: number) => {
    setFilterListIndex(filterListIndex === index ? null : index);
  };

  return (
    <div className={styles.filterSelections}>
      <FilterSizesSelections
        onOpen={handleFilterClick}
        isActive={filterListIndex === 0}
        index={0}
      />
      <FilterColorsSelections
        onOpen={handleFilterClick}
        isActive={filterListIndex === 1}
        index={1}
      />
      <FilterBrandsSelections
        onOpen={handleFilterClick}
        isActive={filterListIndex === 2}
        index={2}
      />
      <FilterShopsSelections
        onOpen={handleFilterClick}
        isActive={filterListIndex === 3}
        index={3}
      />
    </div>
  );
};
