import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { removeColor, setColor } from "../filters.slice";

export const useColors = () => {
  const colors = useAppSelector((state) => state.filters.colors);

  const useDispatch = useAppDispatch();

  const handleAddColor = (payload: string) => {
    useDispatch(setColor(payload));
  };

  const handleRemoveColor = () => {
    useDispatch(removeColor());
  };

  return { colors, handleAddColor, handleRemoveColor };
};
