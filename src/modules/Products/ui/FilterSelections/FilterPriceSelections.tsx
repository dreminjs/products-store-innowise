import { useAppDispatch } from "@app/store/hooks";
import { setPrize } from "@modules/Products/model/filters.slice";
import { FilterSelection } from "./common-ui/FilterSelection";
import { priceItems } from "@modules/Products/model/data";
import { FC } from "react";

interface IFilterPriceSelections {
  onOpen: (index: number) => void;
  isActive: boolean;
  index: number;
}

export const FilterPriceSelections: FC<IFilterPriceSelections> = ({
  onOpen,
  isActive,
  index,
}) => {
  const useDispatch = useAppDispatch();

  const onChoose = (item: string) => {
    useDispatch(setPrize(item));
  };

  return (
    <FilterSelection
      label={"Price"}
      items={priceItems}
      onOpen={onOpen.bind(null, index)}
      onChoose={onChoose}
      isActive={isActive}
    />
  );
};
