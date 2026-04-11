import { Logo } from "./Logo";
import { Search } from "./Search";
import styles from "./LeftNavigation.module.css";

export const LeftNavigation = () => {
  return (
    <div className={styles.leftNavigation}>
      <Logo />
      <Search />
    </div>
  );
};
