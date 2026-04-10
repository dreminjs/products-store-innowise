import { INavigationItem } from "@components/header/model/interfaces/navigation.interface";
import { FC } from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router";

type TProps = INavigationItem;

export const NavigationItem: FC<TProps> = ({ to, label }) => {
  return (
    <li className={styles.navigationListItem}>
      <Link to={to}>{label}</Link>
    </li>
  );
};
