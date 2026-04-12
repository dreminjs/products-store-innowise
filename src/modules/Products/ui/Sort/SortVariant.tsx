import { FC } from "react";
import clsx from "clsx";
import styles from "./Sort.module.css";

interface ISortVariant {
  label: string;
  onChoose: () => void;
  isActive: boolean;
}

export const SortVariant: FC<ISortVariant> = ({
  label,
  onChoose,
  isActive,
}) => {
  return (
    <li className={clsx(isActive && styles.sortVariantActive)}>
      <button onClick={onChoose}>{label}</button>
    </li>
  );
};
