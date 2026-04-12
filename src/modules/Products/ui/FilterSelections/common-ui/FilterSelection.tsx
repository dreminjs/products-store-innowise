import { FC, useRef, useState } from "react";
import styles from "./FilterSelections.module.css";
import { FilterHeader } from "./FilterHeader";
import { FilterList } from "./FilterList";
interface IFilterSelectionProps {
  label: string;
  items: string[];
  onOpen: () => void;
  isActive: boolean;
  onChoose: (item: string) => void;
}

export const FilterSelection: FC<IFilterSelectionProps> = ({
  label,
  items,
  isActive,
  onOpen,
  onChoose,
}) => {
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    onOpen();
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom,
        left: rect.left,
        width: rect.width,
      });
    }
  };

  return (
    <div className={styles.filterSelection}>
      <FilterHeader
        label={label}
        onClick={handleToggle}
        isActive={isActive}
        btnRef={btnRef}
      />
      <FilterList
        onChoose={onChoose}
        items={items}
        isActive={isActive}
        top={dropdownPos.top}
        left={dropdownPos.left}
        width={dropdownPos.width}
      />
    </div>
  );
};
