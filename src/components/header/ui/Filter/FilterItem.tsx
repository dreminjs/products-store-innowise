import { FC } from "react";
import { IFilterItem } from "../../model/interfaces/filter.interface";
import styles from "./Filter.module.css";

type TFilterProps = IFilterItem;

export const FilterItem: FC<TFilterProps> = ({ label, payload }) => {
  return <li className={styles.filterItem}>{label}</li>;
};
