import { navigationItems } from "@components/header/model/data";
import { NavigationItem } from "./NavigationItem";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav>
      <ul className={styles.navigationList}>
        {navigationItems.map((el, idx) => (
          <NavigationItem key={idx} {...el} />
        ))}
      </ul>
    </nav>
  );
};
