import { usePrizes } from "@modules/products/model/hooks/usePrizes";
import { ChoosedFiltersItems } from "./ChoosedFiltersItems";

export const Prizes = () => {
  const { prizes, handleRemovePrize } = usePrizes();

  if (!prizes.length) return null;

  return <ChoosedFiltersItems items={prizes} onRemove={handleRemovePrize} />;
};
