import { FC } from "react";
import styles from "./Category.module.css";
import CategoryArrowIcon from "@assets/arrow.svg";
import clsx from "clsx";

interface ICategoryHeader {
  isActive: boolean;
  label: string;
  onToggle: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const CategoryHeader: FC<ICategoryHeader> = ({
  isActive,
  label,
  onToggle,
}) => {
  return (
    <div>
      <button
        className={clsx(
          styles.categoryHeaderButton,
          isActive && styles.categoryHeaderActive,
        )}
        value={label}
        onClick={onToggle}
      >
        <span>{label}</span>
        <CategoryArrowIcon
          className={clsx(
            styles.categoryItem,
            isActive && styles.categoryItemActive,
          )}
        />
      </button>
    </div>
  );
};
