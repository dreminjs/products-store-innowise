import { useGetCartsByUserIdQuery } from "@modules/Products/api/cartsApi";
import { useGetMeQuery } from "@modules/Users";
import { skipToken } from "@reduxjs/toolkit/query";
import { useState } from "react";

export const useCarts = () => {
  const [skip, setSkip] = useState(0);

  const { data } = useGetMeQuery();

  const {
    data: carts,
    isLoading,
    isError,
  } = useGetCartsByUserIdQuery(
    data?.id ? { userId: data?.id, skip: skip, take: 10 } : skipToken,
  );

  const handleChangeSkip = (skipPayload: number) => {
    setSkip(skipPayload);
  };

  return { carts, isLoading, isError, skip, handleChangeSkip };
};
