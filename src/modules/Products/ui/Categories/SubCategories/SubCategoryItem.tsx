import { FC } from "react";
import styles from "../Category.module.css";
import { TSubCategory } from "@modules/Products/model/categories.interface";

interface ISubCategoryProps {
  label: TSubCategory;
  onToggle: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const SubCategoryItem: FC<ISubCategoryProps> = ({ label, onToggle }) => {
  return (
    <li className={styles.subcategoryItem}>
      <button onClick={onToggle}>{label}</button>
    </li>
  );
};
