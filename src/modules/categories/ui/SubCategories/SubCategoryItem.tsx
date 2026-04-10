import { FC } from "react";
import { TSubCategory } from "../../model/categories.interface";
import styles from "../Category.module.css";

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
