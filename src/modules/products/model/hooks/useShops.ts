import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { removeShop } from "../filters.slice";

export const useShops = () => {
  const shops = useAppSelector((state) => state.filters.shops);

  const useDisptach = useAppDispatch();

  const handleRemoveShop = () => {
    useDisptach(removeShop());
  };

  return { shops, handleRemoveShop };
};
