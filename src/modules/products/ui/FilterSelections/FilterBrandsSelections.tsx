import { useAppDispatch } from "@app/store/hooks";
import { setBrand } from "@modules/products/model/filters.slice";
import { FC } from "react";
import { FilterSelection } from "./common-ui/FilterSelection";
import { brandItems } from "@modules/products/model/data";

interface IFilterBrandsSelections {
  onOpen: (index: number) => void;
  isActive: boolean;
  index: number;
}

export const FilterBrandsSelections: FC<IFilterBrandsSelections> = ({
  onOpen,
  isActive,
  index,
}) => {
  const useDispatch = useAppDispatch();

  const onChoose = (item: string) => {
    useDispatch(setBrand(item));
  };

  return (
    <FilterSelection
      label={"Brands"}
      items={brandItems}
      onOpen={onOpen.bind(null, index)}
      onChoose={onChoose}
      isActive={isActive}
    />
  );
};
