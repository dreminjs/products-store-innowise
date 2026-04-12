import { CategoriesList } from "./CategoriesList";
import { categories } from "../../model/categoriesFilter";
import styles from "./Category.module.css";

export const Categories = () => {
  return (
    <div className={styles.categoriesRoot}>
      <h3 className={styles.categoryTitle}>Categories</h3>
      <CategoriesList items={categories} />
    </div>
  );
};
