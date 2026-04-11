import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { removePrize } from "../filters.slice";

export const usePrizes = () => {
  const dispatch = useAppDispatch();
  const prizes = useAppSelector((state) => state.filters.prizes);

  const handleRemovePrize = () => {
    dispatch(removePrize());
  };

  return { prizes, handleRemovePrize };
};
