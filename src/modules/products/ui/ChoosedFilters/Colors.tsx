import { useColors } from "@modules/products/model/hooks/useColor";
import { ChoosedFiltersItems } from "./ChoosedFiltersItems";

export const Colors = () => {
  const { colors, handleRemoveColor } = useColors();

  if (!colors.length) return null;

  return <ChoosedFiltersItems items={colors} onRemove={handleRemoveColor} />;
};
