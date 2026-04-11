import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { removeBrand, setBrand } from "../filters.slice";

export const useBrands = () => {
  const brands = useAppSelector((state) => state.filters.brands);

  const useDispatch = useAppDispatch();

  const handleAddBrand = (payload: string) => {
    useDispatch(setBrand(payload));
  };

  const handleRemoveBrand = () => {
    useDispatch(removeBrand());
  };

  return { brands, useAppDispatch, handleAddBrand, handleRemoveBrand };
};
