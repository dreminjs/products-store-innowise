import { CartsLink } from "./CartsLink";
import { FavouritesLink } from "./FavouritesLink";
import { ProfileLink } from "./ProfileLink";
import styles from "./ActionsList.module.css";
import { FC } from "react";
import clsx from "clsx";

interface IActionsListProps {
  className?: string;
}

export const ActionsList: FC<IActionsListProps> = ({ className }) => {
  return (
    <ul className={clsx(styles.actionsList, className)}>
      <FavouritesLink />
      <CartsLink />
      <ProfileLink />
    </ul>
  );
};
