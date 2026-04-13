import { ChoosedFilters } from "../ChoosedFilters/ChoosedFilters";
import { FilterSelections } from "../FilterSelections/common-ui/FilterSelections";
import { Sort } from "../Sort/Sort";
import { ProductsList } from "./ProductsList";
import { Pagination } from "@components/Pagination";
import { useProducts } from "@modules/Products/model/hooks/useProducts";
import { Categories } from "../Categories";
import styles from "./Products.module.css";

export const Products = () => {
  const {
    isLoading,
    products,
    handlePageChange,
    skip,
    sortVariant,
    handleSortChange,
  } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!products) {
    return <div>No products found.</div>;
  }

  if (products.products?.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div className={styles.productsInner}>
      <Categories />
      <div className={styles.products}>
        <FilterSelections />
        <ChoosedFilters />
        <Sort handleSortChange={handleSortChange} sortVariant={sortVariant} />
        <ProductsList products={products.products || []} />
        <Pagination
          totalPages={products.total ? Math.ceil(products.total / 10) - 1 : 0}
          currentPage={skip === 0 ? 1 : skip / 10}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
