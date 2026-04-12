import { FC } from "react";
import styles from "./SavedProductsHeader.module.css";
interface ISavedProductsHeaderListItemProps {
  label: string;
  body: string;
}

export const SavedProductsHeaderListItem: FC<
  ISavedProductsHeaderListItemProps
> = ({ label, body }) => {
  return (
    <li className={styles.savedProductsHeaderListItem}>
      <h5>{label}</h5>
      <p>{body}</p>
    </li>
  );
};
