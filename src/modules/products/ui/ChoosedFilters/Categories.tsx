import { useCategories } from "@modules/products/model/hooks/useCategories";
import { ChoosedFiltersItems } from "./ChoosedFiltersItems";

export const Categories = () => {
  const { categories, handleRemoveCategory } = useCategories();
  return (
    <ChoosedFiltersItems items={categories} onRemove={handleRemoveCategory} />
  );
};
