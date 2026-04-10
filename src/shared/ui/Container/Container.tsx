import { FC } from "react";
import styles from "./container.module.css";

interface IContainerProps {
  children: React.ReactNode;
}

export const Container: FC<IContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
