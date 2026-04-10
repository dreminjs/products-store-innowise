import { FC } from "react";
import { ICategory } from "../model/categories.interface";
import { CategoryHeader } from "./CategoryHeader";
import { SubCategoriesList } from "./SubCategories/SubCategoriesList";
import styles from "./Category.module.css";

type TCategoryProps = {
  onToggle: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isActive: boolean;
} & ICategory;

export const CategoryItem: FC<TCategoryProps> = ({ items, ...rest }) => {
  return (
    <li className={styles.categoryItem}>
      <CategoryHeader {...rest} />
      <SubCategoriesList
        items={items}
        isActive={rest.isActive}
        onToggle={rest.onToggle}
      />
    </li>
  );
};
