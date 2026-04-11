import { FC } from "react";
import styles from "./FilterSelections.module.css";
import clsx from "clsx";

interface IFilterList {
  items: string[];
  isActive: boolean;
  onChoose: (item: string) => void;
}

export const FilterList: FC<IFilterList> = ({ items, isActive, onChoose }) => {
  return (
    <ul
      className={clsx(styles.filterList, isActive && styles.filterListActive)}
    >
      {items.map((item) => (
        <li key={item}>
          <button onClick={onChoose.bind(null, item)}>{item}</button>
        </li>
      ))}
    </ul>
  );
};
