import { FC } from "react";
import { Link } from "react-router";
import CartIcon from "@assets/purchase.svg";
import { useAppSelector } from "@app/store/hooks";
import styles from "./ActionsList.module.css";

interface ICartsLinkProps {}

export const CartsLink: FC<ICartsLinkProps> = () => {
  const purchaseProducts = useAppSelector(
    (state) => state.products.purchaseProducts,
  );

  const count = Object.keys(purchaseProducts).length;
  return (
    <Link className={styles.actionsListItem} to={"/saved-products"}>
      <CartIcon />
      <span>{count}</span>
    </Link>
  );
};
