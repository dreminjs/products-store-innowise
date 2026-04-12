import { useShops } from "@modules/Products/model/hooks/useShops";
import { ChoosedFiltersItems } from "./ChoosedFiltersItems";

export const Shops = () => {
  const { shops, handleRemoveShop } = useShops();

  if (!shops.length) return null;

  return <ChoosedFiltersItems items={shops} onRemove={handleRemoveShop} />;
};
