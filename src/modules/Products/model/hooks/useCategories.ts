import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { removeCategory, setCategory } from "../filters.slice";

export const useCategories = () => {
  const categories = useAppSelector((state) => state.filters.categories);

  const useDispatch = useAppDispatch();

  const handleAddCategory = (payload: string) => {
    useDispatch(setCategory(payload));
  };

  const handleRemoveCategory = () => {
    useDispatch(removeCategory());
  };

  return { categories, handleAddCategory, handleRemoveCategory };
};
