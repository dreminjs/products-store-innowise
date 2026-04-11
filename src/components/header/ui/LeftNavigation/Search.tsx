import SearchIcon from "@assets/search.svg";
import styles from "./LeftNavigation.module.css";
import { useChangeSearchValue } from "../../model/hooks/useChangeSearchValue";

export const Search = () => {
  const { handleChangeSearchValue, searchValue } = useChangeSearchValue();

  return (
    <div className={styles.search}>
      <SearchIcon style={{ flexShrink: 0 }} />
      <input
        className={styles.searchInput}
        value={searchValue}
        onChange={handleChangeSearchValue}
        type="text"
      />
    </div>
  );
};
