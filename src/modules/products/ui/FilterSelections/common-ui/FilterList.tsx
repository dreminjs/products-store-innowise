import { FC, useRef, useState } from "react";
import styles from "./FilterSelections.module.css";
import clsx from "clsx";
import { createPortal } from "react-dom";

interface IFilterList {
  items: string[];
  isActive: boolean;
  onChoose: (item: string) => void;
  top: number;
  left: number;
  width: number;
}

export const FilterList: FC<IFilterList> = ({
  items,
  isActive,
  onChoose,
  top,
  left,
  width,
}) => {
  return createPortal(
    <ul
      style={{
        top,
        left,
        width,
      }}
      className={clsx(styles.filterList, isActive && styles.filterListActive)}
    >
      {items.map((item) => (
        <li key={item}>
          <button onClick={onChoose.bind(null, item)}>{item}</button>
        </li>
      ))}
    </ul>,
    document.body,
  );
};
