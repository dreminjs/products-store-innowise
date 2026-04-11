import { useSizes } from "@modules/products/model/hooks/useSizes";
import { ChoosedFiltersItems } from "@modules/products/ui/ChoosedFilters/ChoosedFiltersItems";

export const Sizes = () => {
  const { sizes, handleRemoveSize } = useSizes();

  if (!sizes.length) return null;

  return <ChoosedFiltersItems items={sizes} onRemove={handleRemoveSize} />;
};
