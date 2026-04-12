import { TTab } from "@modules/products/model/products.interface";
import { FC } from "react";
import { TabHeaderItem } from "./TabHeaderItem";
import styles from "./Tabs.module.css";

interface ITabsHeaderListProps {
  tab: TTab;
  onChange: (tab: TTab) => void;
}

export const TabsHeaderList: FC<ITabsHeaderListProps> = (props) => {
  return (
    <ul className={styles.tabsHeaderList}>
      <TabHeaderItem
        onChange={props.onChange}
        tab="favourites"
        isActive={props.tab === "favourites"}
      />
      <TabHeaderItem
        onChange={props.onChange}
        tab="purchase"
        isActive={props.tab === "purchase"}
      />
    </ul>
  );
};
