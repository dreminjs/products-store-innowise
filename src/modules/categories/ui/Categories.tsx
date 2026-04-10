import { FC } from "react";
import { CategoriesList } from "./CategoriesList";
import { categories } from "../model/categoriesFilter";
import styles from "./Category.module.css";
interface ICategoriesProps {
  items: string;
}
export const Categories: FC<ICategoriesProps> = ({ items }) => {
  return (
    <div>
      <h3 className={styles.categoryTitle}>Categories</h3>
      <CategoriesList items={categories} />
    </div>
  );
};
