import CrossIcon from "@assets/cross.svg";
import { FC } from "react";
import styles from "./ChoosedFilters.module.css";

interface IChoosedFiltersItems {
  items: string[];
  onRemove: () => void;
}

export const ChoosedFiltersItems: FC<IChoosedFiltersItems> = ({
  items,
  onRemove,
}) => {
  return (
    <li className={styles.choosedFiltersItems}>
      <p>{items.join(", ")}</p>
      <button onClick={onRemove}>
        <CrossIcon />
      </button>
    </li>
  );
};
