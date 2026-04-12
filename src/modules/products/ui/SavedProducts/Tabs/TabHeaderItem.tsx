import { TTab } from "@modules/products/model/products.interface";
import clsx from "clsx";
import { FC } from "react";
import styles from "./Tabs.module.css";
interface ITabHeaderItemProps {
  isActive: boolean;
  onChange: (tab: TTab) => void;
  tab: TTab;
}

export const TabHeaderItem: FC<ITabHeaderItemProps> = ({
  isActive,
  onChange,
  tab,
}) => {
  return (
    <li
      className={clsx(
        styles.tabsHeaderItem,
        isActive && styles.tabsHeaderItemActive,
      )}
    >
      <button onClick={onChange.bind(null, tab)}>{tab}</button>
    </li>
  );
};
