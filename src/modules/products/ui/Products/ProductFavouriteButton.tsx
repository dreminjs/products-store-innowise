import FavouriteIcon from "@assets/favourite-icon.svg";
import styles from "./Products.module.css";
import { FC } from "react";
import clsx from "clsx";
import { useAppDispatch } from "@app/store/hooks";
import { TProduct } from "@interfaces/products.interface";
import { toggleFavouriteProduct } from "@modules/products/model/products.slice";

interface IProductFavouriteButtonProps {
  isActive: boolean;
  product: TProduct;
}

export const ProductFavouriteButton: FC<IProductFavouriteButtonProps> = ({
  isActive,
  product,
}) => {
  const dispatch = useAppDispatch();

  const handleAddToFavourites = () => {
    dispatch(toggleFavouriteProduct(product));
  };

  return (
    <button
      onClick={handleAddToFavourites}
      className={clsx(
        styles.productsFavouriteButton,
        isActive && styles.productsFavouriteButtonActive,
      )}
    >
      <FavouriteIcon />
    </button>
  );
};
