import { FC } from "react";
import styles from "./FilterSelections.module.css";
import { FilterHeader } from "./FilterHeader";
import { FilterList } from "./FilterList";
interface IFilterSelectionProps {
  label: string;
  items: string[];
  onOpen: () => void;
  isActive: boolean;
  onChoose: (item: string) => void;
}

export const FilterSelection: FC<IFilterSelectionProps> = ({
  label,
  items,
  isActive,
  onOpen,
  onChoose,
}) => {
  return (
    <div className={styles.filterSelection}>
      <FilterHeader label={label} onClick={onOpen} isActive={isActive} />
      <FilterList onChoose={onChoose} items={items} isActive={isActive} />
    </div>
  );
};
