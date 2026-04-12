import { CartsLink } from "./CartsLink";
import { FavouritesLink } from "./FavouritesLink";
import { ProfileLink } from "./ProfileLink";
import styles from "./ActionsList.module.css";
import { FC } from "react";
import clsx from "clsx";
import { useGetMeQuery } from "@modules/Users";
import { SigninLink } from "./LoginLink";

interface IActionsListProps {
  className?: string;
}

export const ActionsList: FC<IActionsListProps> = ({ className }) => {
  const { data } = useGetMeQuery();
  return (
    <ul className={clsx(styles.actionsList, className)}>
      {data ? (
        <>
          <FavouritesLink />
          <CartsLink />
          <ProfileLink />
        </>
      ) : (
        <SigninLink />
      )}
    </ul>
  );
};
