import { useAppDispatch } from "@app/store/hooks";
import { setSize } from "@modules/products/model/filters.slice";
import { FilterSelection } from "./common-ui/FilterSelection";
import { FC } from "react";
import { conditionItems } from "@modules/products/model/data";

interface IFilterConditionsSelections {
  onOpen: (index: number) => void;
  isActive: boolean;
  index: number;
}

export const FilterConditionsSelections: FC<IFilterConditionsSelections> = ({
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
      label={"Condition"}
      items={conditionItems}
      onOpen={onOpen.bind(null, index)}
      onChoose={onChoose}
      isActive={isActive}
    />
  );
};
