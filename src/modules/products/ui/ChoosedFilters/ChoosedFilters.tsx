import { Brands } from "./Brands";
import styles from "./ChoosedFilters.module.css";
import { Colors } from "./Colors";
import { Conditions } from "./Conditions";
import { Prizes } from "./Prizes";
import { Shops } from "./Shops";
import { Sizes } from "./Sizes";

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
