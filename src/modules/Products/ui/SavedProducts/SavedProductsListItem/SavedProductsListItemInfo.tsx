import { FC } from "react";
import styles from "./SavedProductsListItem.module.css";
interface ISavedProductsListItemInfoProps {
  label: string;
  body: string;
}

export const SavedProductsListItemInfo: FC<ISavedProductsListItemInfoProps> = ({
  label,
  body,
}) => {
  return (
    <p className={styles.savedProductsListItemInfo}>
      <span>{label}</span> {body}
    </p>
  );
};
