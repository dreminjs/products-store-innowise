import { useBrands } from "@modules/Products/model/hooks/useBrands";
import { ChoosedFiltersItems } from "./ChoosedFiltersItems";

export const Brands = () => {
  const { brands, handleRemoveBrand } = useBrands();

  if (!brands.length) return null;

  return <ChoosedFiltersItems items={brands} onRemove={handleRemoveBrand} />;
};
