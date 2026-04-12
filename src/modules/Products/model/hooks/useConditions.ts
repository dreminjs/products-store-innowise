import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { removeSize } from "../filters.slice";

export const useConditions = () => {
  const conditions = useAppSelector((state) => state.filters.conditions);

  const useDispatch = useAppDispatch();

  const handleRemoveCondition = () => {
    useDispatch(removeSize());
  };

  return {
    conditions,
    handleRemoveCondition,
  };
};
