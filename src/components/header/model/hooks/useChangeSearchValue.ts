import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { onSetSearchValue } from "../searchSlice";
import { IInputChangeEvent } from "@shared/index";

export const useChangeSearchValue = () => {
  const dispatch = useAppDispatch();

  const searchValue = useAppSelector((state) => state.search.searchValue);

  const handleChangeSearchValue = (value: string) => {
    dispatch(onSetSearchValue(value));
  };

  return { handleChangeSearchValue, searchValue };
};
