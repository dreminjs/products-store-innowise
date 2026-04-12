import { FC, useMemo } from "react";
import { Link } from "react-router";
import { useAppSelector } from "@app/store/hooks";
import FavouritesIcon from "@assets/favourite-icon.svg";
import styles from "./ActionsList.module.css";

export const FavouritesLink = () => {
  const favouritesProducts = useAppSelector(
    (state) => state.products.favouritesProducts,
  );

  const count = Object.keys(favouritesProducts).length;

  return (
    <Link className={styles.actionsListItem} to="/saved-products">
      <FavouritesIcon />
      <span>{count}</span>
    </Link>
  );
};
