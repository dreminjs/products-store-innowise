import { Pagination } from "@components/Pagination";
import { SavedProducts } from "./SavedProducts";
import { useCarts } from "@modules/Products/model/hooks/useCarts";

export const PurchasedProducts = () => {
  const { carts, isLoading, isError, skip, handleChangeSkip } = useCarts();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  if (!carts?.carts.length) return <div>No carts found</div>;

  return (
    <>
      {carts?.carts.map((el) => (
        <div key={el.id}>
          <SavedProducts products={el.products} />
        </div>
      ))}
      <Pagination
        totalPages={carts.total ? Math.ceil(carts.total / 10) - 1 : 0}
        currentPage={skip === 0 ? 1 : skip / 10}
        onPageChange={handleChangeSkip}
      />
    </>
  );
};
