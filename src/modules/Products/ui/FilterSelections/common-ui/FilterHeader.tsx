import { FC } from "react";
import ArrowIcon from "@assets/filter-arrow.svg";
import styles from "./FilterSelections.module.css";
import clsx from "clsx";

interface IFilterHeaderProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
  btnRef: React.RefObject<HTMLButtonElement | null>;
}

export const FilterHeader: FC<IFilterHeaderProps> = ({
  label,
  onClick,
  isActive,
  btnRef,
}) => {
  return (
    <div>
      <button
        ref={btnRef}
        onClick={onClick}
        className={clsx(
          styles.filterSelectionHeaderButton,
          isActive && styles.filterSelectionHeaderButtonActive,
        )}
      >
        {label} <ArrowIcon height={5} width={8} />
      </button>
    </div>
  );
};
