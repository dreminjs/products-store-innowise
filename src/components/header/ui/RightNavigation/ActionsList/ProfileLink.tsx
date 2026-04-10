import { FC } from "react";
import { Link } from "react-router";
import ProfileIcon from "@assets/profile.svg";

export const ProfileLink = () => {
  return (
    <Link to="/profile">
      <ProfileIcon />
    </Link>
  );
};
