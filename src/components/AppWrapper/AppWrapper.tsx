import { FC, ReactNode } from "react";
import styles from "./AppWrapper.module.css";
interface IAppWrapper {
  children: ReactNode;
}

export const AppWrapper: FC<IAppWrapper> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
