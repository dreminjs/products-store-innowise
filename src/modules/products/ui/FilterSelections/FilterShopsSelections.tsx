import { useAppDispatch } from "@app/store/hooks";
import { setShop } from "@modules/products/model/filters.slice";
import { FC } from "react";
import { FilterSelection } from "./common-ui/FilterSelection";
import { shopItems } from "@modules/products/model/data";

interface IFilterColorsSelections {
  onOpen: (index: number) => void;
  isActive: boolean;
  index: number;
}

export const FilterShopsSelections: FC<IFilterColorsSelections> = ({
  onOpen,
  isActive,
  index,
}) => {
  const useDispatch = useAppDispatch();

  const onChoose = (item: string) => {
    useDispatch(setShop(item));
  };

  return (
    <FilterSelection
      label={"Shops"}
      items={shopItems}
      onOpen={onOpen.bind(null, index)}
      onChoose={onChoose}
      isActive={isActive}
    />
  );
};
