import { Categories } from "@modules/categories";
import { Brands } from "./Brands";
import styles from "./ChoosedFilters.module.css";
import { Colors } from "./Colors";
import { Conditions } from "./Conditions";
import { Prizes } from "./Prizes";
import { Sizes } from "./Sizes";
import { Shops } from "./Shops";

export const ChoosedFilters = () => {
  return (
    <ul className={styles.choosedFiltersList}>
      <Brands />
      <Colors />
      <Sizes />
      <Conditions />
      <Prizes />
      <Shops />
    </ul>
  );
};
