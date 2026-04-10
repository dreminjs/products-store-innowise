import { FC } from "react";
import { Link } from "react-router";
import { useAppSelector } from "@app/store/hooks";
import FavouritesIcon from "@assets/favourite-icon.svg";

export const FavouritesLink = () => {
  const count = useAppSelector((state) => state.favourites);

  return (
    <Link to="/favourites">
      <FavouritesIcon />
      {count > 0 && <span>{count}</span>}
    </Link>
  );
};
