import { IAPIProduct } from "@interfaces/products.interface";
import { FC } from "react";
import { ProductsItem } from "./ProductsItem";
import styles from "./Products.module.css";
import { useAppSelector } from "@app/store/hooks";
interface IProductsListProps {
  products: IAPIProduct[];
}

export const ProductsList: FC<IProductsListProps> = ({ products }) => {
  const { favouritesProducts, purchaseProducts } = useAppSelector(
    (state) => state.products,
  );

  const selectIsProductFavourite = (id: number) => !!favouritesProducts[id];

  const selectIsProductPurchased = (id: number) => !!purchaseProducts[id];

  return (
    <ul className={styles.productsList}>
      {products.map((product) => (
        <ProductsItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          discountPercentage={product.discountPercentage}
          isFavourite={selectIsProductFavourite(product.id)}
          isPurchased={selectIsProductPurchased(product.id)}
          img={product.images[0]}
        />
      ))}
    </ul>
  );
};
