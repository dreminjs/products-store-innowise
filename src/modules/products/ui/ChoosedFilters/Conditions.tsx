import { useConditions } from "@modules/products/model/hooks/useConditions";
import { ChoosedFiltersItems } from "./ChoosedFiltersItems";

export const Conditions = () => {
  const { conditions, handleRemoveCondition } = useConditions();

  if (!conditions.length) return null;

  return (
    <ChoosedFiltersItems items={conditions} onRemove={handleRemoveCondition} />
  );
};
