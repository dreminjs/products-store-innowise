import { useState } from "react";
import styles from "./MenuBurger.module.css";
import clsx from "clsx";
import { useMobileMenu } from "@components/header/model/hooks/useMobileMenu";

export const MenuBurger = () => {
  const { isOpen, toggleMobileMenu } = useMobileMenu();

  return (
    <button
      className={clsx(styles.btn, isOpen && styles.btnOpen)}
      onClick={toggleMobileMenu}
    >
      <span />
      <span />
      <span />
    </button>
  );
};
