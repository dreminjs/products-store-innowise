import { Link } from "react-router";
import styles from "./ActionsList.module.css";

export const SigninLink = () => {
  return (
    <li className={styles.actionsListItem}>
      <Link to={"/login"}>Log in</Link>
    </li>
  );
};
