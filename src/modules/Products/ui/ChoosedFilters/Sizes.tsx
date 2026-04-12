import { useSizes } from "@modules/Products/model/hooks/useSizes";
import { ChoosedFiltersItems } from "./ChoosedFiltersItems";

export const Sizes = () => {
  const { sizes, handleRemoveSize } = useSizes();

  if (!sizes.length) return null;

  return <ChoosedFiltersItems items={sizes} onRemove={handleRemoveSize} />;
};
