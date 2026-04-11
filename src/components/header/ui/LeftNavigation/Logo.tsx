import { Link } from "react-router";
import LogoIcon from "@assets/logo.svg";

export const Logo = () => {
  return (
    <Link style={{ flexShrink: 0.5 }} to={"/"}>
      <LogoIcon width={108} height={40} />
    </Link>
  );
};
