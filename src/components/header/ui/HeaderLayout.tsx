import { Container } from "@shared/ui/Container/Container";
import { FC } from "react";
import styles from "./header.module.css";

interface IHeaderLayoutProps {
  children: React.ReactNode;
}

export const HeaderLayout: FC<IHeaderLayoutProps> = ({ children }) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerLayout}>{children}</div>
      </Container>
    </header>
  );
};
