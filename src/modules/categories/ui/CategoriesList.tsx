import { FC, useState } from "react";
import { ICategory } from "../model/categories.interface";
import { CategoryItem } from "./CategoryItem";

interface ICategoriesListProps {
  items: ICategory[];
}

export const CategoriesList: FC<ICategoriesListProps> = ({ items }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const label = e.currentTarget.value;
    setActiveCategory(activeCategory === label ? null : label);
  };

  return (
    <ul>
      {items.map((category) => (
        <CategoryItem
          key={category.label}
          label={category.label}
          items={category.items}
          onToggle={handleToggle}
          isActive={activeCategory === category.label}
        />
      ))}
    </ul>
  );
};
