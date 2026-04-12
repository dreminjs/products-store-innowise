import { TTab } from "@modules/products/model/products.interface";
import { act, useState } from "react";
import { TabsHeaderList } from "./TabsHeaderList";
import { PurchasedProducts } from "../PurchasedProducts";
import { FavouritesProducts } from "../FavouritesProducts";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState<TTab>("favourites");

  const handleTabChange = (tab: TTab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <TabsHeaderList tab={activeTab} onChange={handleTabChange} />
      {activeTab === "purchase" ? <PurchasedProducts /> : null}
    </>
  );
};
