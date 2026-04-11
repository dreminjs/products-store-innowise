import { navigationItems } from "@components/header/model/data";
import { NavigationItem } from "./NavigationItem";
import styles from "./Navigation.module.css";
import { FC } from "react";
import clsx from "clsx";

interface INavigationProps {
  className?: string;
}

export const Navigation: FC<INavigationProps> = ({ className }) => {
  console.log(className);
  return (
    <nav>
      <ul className={clsx(styles.navigationList, className)}>
        {navigationItems.map((el, idx) => (
          <NavigationItem key={idx} {...el} />
        ))}
      </ul>
    </nav>
  );
};
