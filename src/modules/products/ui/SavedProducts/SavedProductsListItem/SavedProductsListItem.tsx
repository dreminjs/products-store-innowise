import { TProduct } from "@interfaces/products.interface";
import { SavedProductsListItemInfo } from "./SavedProductsListItemInfo";
import { ShippingInfo } from "./ShippingInfo";
import { FC } from "react";
import styles from "./SavedProductsListItem.module.css";
type TSavedProductsListItemProps = TProduct;

export const SavedProductsListItem: FC<TSavedProductsListItemProps> = (
  props,
) => {
  return (
    <li className={styles.savedProductsListItem}>
      <img src={props.img} alt={props.title} />
      <div>
        <h3>{props.title}</h3>
        <SavedProductsListItemInfo
          label={"price"}
          body={props.price.toString()}
        />
        <div
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
          <SavedProductsListItemInfo label={"Color"} body={"Red"} />
          <SavedProductsListItemInfo label={"Size "} body={"M"} />
        </div>
        <SavedProductsListItemInfo
          label={"Delivery time:"}
          body={"1-3 working days"}
        />
        <ShippingInfo />
      </div>
    </li>
  );
};
