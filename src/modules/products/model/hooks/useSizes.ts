import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { removeSize, setSize } from "../filters.slice";

export const useSizes = () => {
  const sizes = useAppSelector((state) => state.filters.sizes);

  const useDispatch = useAppDispatch();

  const handleAddSize = (payload: string) => {
    useDispatch(setSize(payload));
  };

  const handleRemoveSize = () => {
    useDispatch(removeSize());
  };

  return {
    sizes,
    handleAddSize,
    handleRemoveSize,
  };
};
