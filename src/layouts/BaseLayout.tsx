import { Header } from "@components/header/";
import { Outlet } from "react-router";
import styles from "./BaseLayout.module.css";
import { Container } from "@shared/index";

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <div className={styles.baseLayoutContainer}>
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
};
