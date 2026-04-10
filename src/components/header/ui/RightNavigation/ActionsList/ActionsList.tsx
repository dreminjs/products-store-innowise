import { CartsLink } from "./CartsLink";
import { FavouritesLink } from "./FavouritesLink";
import { ProfileLink } from "./ProfileLink";
import styles from "./ActionsList.module.css";

export const ActionsList = () => {
  return (
    <ul className={styles.actionsList}>
      <FavouritesLink />
      <CartsLink />
      <ProfileLink />
    </ul>
  );
};
