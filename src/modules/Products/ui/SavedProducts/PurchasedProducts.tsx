import { useGetCartsByUserIdQuery } from "@modules/Products/api/cartsApi";
import { useGetMeQuery } from "@modules/Users";
import { skipToken } from "@reduxjs/toolkit/query";
import { SavedProducts } from "./SavedProducts";

export const PurchasedProducts = () => {
  const { data } = useGetMeQuery();

  const {
    data: carts,
    isLoading,
    isError,
  } = useGetCartsByUserIdQuery(
    data?.id ? { userId: data?.id, skip: 0, take: 10 } : skipToken,
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  if (!carts?.carts.length) return <div>No carts found</div>;

  return (
    <>
      {carts?.carts.map((el) => (
        <div key={el.id}>
          <SavedProducts
            products={el.products}
            totalProducts={el.totalProducts}
            totalQuantity={el.totalQuantity}
          />
        </div>
      ))}
    </>
  );
};
