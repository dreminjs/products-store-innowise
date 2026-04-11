import { useAppDispatch } from "@app/store/hooks";
import { setSize } from "@modules/products/model/filters.slice";
import { FilterSelection } from "./common-ui/FilterSelection";
import { FC } from "react";
import { sizeItems } from "@modules/products/model/data";

interface IFilterColorsSelections {
  onOpen: (index: number) => void;
  isActive: boolean;
  index: number;
}

export const FilterSizesSelections: FC<IFilterColorsSelections> = ({
  onOpen,
  isActive,
  index,
}) => {
  const useDispatch = useAppDispatch();

  const onChoose = (item: string) => {
    useDispatch(setSize(item));
  };

  return (
    <FilterSelection
      label={"Sizes"}
      items={sizeItems}
      onOpen={onOpen.bind(null, index)}
      onChoose={onChoose}
      isActive={isActive}
    />
  );
};
