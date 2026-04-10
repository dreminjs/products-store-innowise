import { FC } from "react";
import { Link } from "react-router";
import CartIcon from "@assets/purchase.svg";
import { useAppSelector } from "@app/store/hooks";

interface ICartsLinkProps {}

export const CartsLink: FC<ICartsLinkProps> = () => {
  const count = useAppSelector((state) => state.purchases.length);

  return (
    <Link to={"/"}>
      <CartIcon />
      {count > 0 && <span>{count}</span>}
    </Link>
  );
};
