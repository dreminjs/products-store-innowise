export interface IShippingInfoProps {}
import styles from "./SavedProductsListItem.module.css";

export const ShippingInfo = () => {
  return (
    <div className={styles.shippingInfo}>
      <h3>Shipping to Germany</h3>
      <p>Free shipping from € 34,00</p>
    </div>
  );
};
