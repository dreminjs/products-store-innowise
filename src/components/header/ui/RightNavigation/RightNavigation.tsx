import { ActionsList } from "./ActionsList/ActionsList";
import { Navigation } from "./Navigation/Navigation";
import styles from "./RightNavigation.module.css";

export const RightNavigation = () => {
  return (
    <div className={styles.rightNavigation}>
      <Navigation />
      <ActionsList />
    </div>
  );
};
