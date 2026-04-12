import { FC } from "react";
import { SubCategoryItem } from "./SubCategoryItem";
import clsx from "clsx";
import styles from "../Category.module.css";

interface ISubCategoriesListProps {
  items: string[];
  onToggle: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isActive: boolean;
}

export const SubCategoriesList: FC<ISubCategoriesListProps> = ({
  items,
  onToggle,
  isActive,
}) => {
  return (
    <ul
      className={clsx(
        styles.subcategoryList,
        isActive && styles.subcategoryListActive,
      )}
    >
      {items.map((item) => (
        <SubCategoryItem key={item} onToggle={onToggle} label={item} />
      ))}
    </ul>
  );
};
