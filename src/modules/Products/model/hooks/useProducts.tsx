import { useGetProductsQuery } from "@modules/Products/api/productsApi";
import { useState } from "react";
import { useAppSelector } from "@app/store/hooks";
import { useDebounce } from "@shared/index";
import { TSortVariant } from "../filters.interface";

export const useProducts = () => {
  const [skip, setSkip] = useState(0);
  const [sortVariant, setSortVariant] = useState<TSortVariant>("ascending");
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const debouncedSearchValue = useDebounce(searchValue);
  const { data: products, isLoading } = useGetProductsQuery({
    skip,
    title: debouncedSearchValue,
    sortVariant,
  });

  const handlePageChange = (newPage: number) => {
    setSkip(newPage * 10);
  };

  const handleSortChange = (variant: TSortVariant) => {
    setSortVariant(variant);
  };

  return {
    products,
    isLoading,
    handlePageChange,
    skip,
    debouncedSearchValue,
    handleSortChange,
    sortVariant,
  };
};
