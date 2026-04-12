import BuyIcon from "@assets/purchase.svg";
import styles from "./Products.module.css";
import { useAppDispatch } from "@app/store/hooks";
import { TProduct } from "@interfaces/products.interface";
import { FC } from "react";
import { togglePurchaseProduct } from "@modules/products/model/products.slice";

interface IProductBuyButtonProps {
  product: TProduct;
  isActive: boolean;
}

export const ProductBuyButton: FC<IProductBuyButtonProps> = ({
  product,
  isActive,
}) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(togglePurchaseProduct(product));
  };

  return (
    <button onClick={handleClick} className={styles.productsBuyButton}>
      {!isActive ? (
        <BuyIcon />
      ) : (
        <span className={styles.productsItemPurchasedInfo}>Added</span>
      )}
    </button>
  );
};
