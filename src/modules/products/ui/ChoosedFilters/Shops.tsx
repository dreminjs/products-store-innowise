import { useShops } from "@modules/products/model/hooks/useShops";
import { ChoosedFiltersItems } from "./ChoosedFiltersItems";

export const Shops = () => {
  const { shops, handleRemoveShop } = useShops();

  if (!shops.length) return null;

  return <ChoosedFiltersItems items={shops} onRemove={handleRemoveShop} />;
};
