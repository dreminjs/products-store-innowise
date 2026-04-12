import { FC } from "react";
import { ProductBuyButton } from "./ProductBuyButton";
import styles from "./Products.module.css";
import { TProduct } from "@interfaces/products.interface";

interface ProductBottomProps {
  price: number;
  discountPercentage?: number;
  isPurchased: boolean;
  product: TProduct;
}

export const ProductBottom: FC<ProductBottomProps> = ({
  price,
  discountPercentage,
  isPurchased,
  product,
}) => {
  const discountedPrice = discountPercentage
    ? (price - (price * discountPercentage) / 100)
        .toFixed(2)
        .toString()
        .replace(".", ",")
    : null;
  return (
    <div className={styles.productsBuyButton}>
      {discountPercentage ? (
        <div className={styles.productsListItemPrice}>
          <p>{discountedPrice}€</p>
          <p style={{ textDecoration: "line-through", color: "gray" }}>
            {price}, €
          </p>
        </div>
      ) : (
        <p>{price}€</p>
      )}
      <ProductBuyButton product={product} isActive={isPurchased} />
    </div>
  );
};
