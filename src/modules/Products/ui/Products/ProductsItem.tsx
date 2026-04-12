import { FC } from "react";
import { TProduct } from "../../../../interfaces/products.interface";
import styles from "./Products.module.css";
import { ProductBottom } from "./ProductBottom";
import { ProductFavouriteButton } from "./ProductFavouriteButton";
type TProductItemProps = TProduct & {
  isFavourite: boolean;
  isPurchased: boolean;
};

export const ProductsItem: FC<TProductItemProps> = (product) => {
  return (
    <li className={styles.productsListItem}>
      <ProductFavouriteButton
        isActive={product.isFavourite}
        product={product}
      />
      <img src={product.img} alt={product.title} />
      <div className={styles.productsListItemInfo}>
        <h3 className={styles.productsListItemTitle}>{product.title}</h3>
        <ProductBottom
          product={product}
          discountPercentage={product.discountPercentage}
          price={product.price}
          isPurchased={product.isPurchased}
        />
      </div>
    </li>
  );
};
