import { FC } from "react";
import { FilterSelection } from "./common-ui/FilterSelection";
import { useAppDispatch } from "@app/store/hooks";
import { setColor } from "@modules/Products/model/filters.slice";
import { colorItems } from "@modules/Products/model/data";

interface IFilterColorsSelections {
  onOpen: (index: number) => void;
  isActive: boolean;
  index: number;
}

export const FilterColorsSelections: FC<IFilterColorsSelections> = ({
  onOpen,
  isActive,
  index,
}) => {
  const useDispatch = useAppDispatch();

  const onChoose = (item: string) => {
    useDispatch(setColor(item));
  };

  return (
    <FilterSelection
      label={"Color"}
      items={colorItems}
      onOpen={onOpen.bind(null, index)}
      onChoose={onChoose}
      isActive={isActive}
    />
  );
};
