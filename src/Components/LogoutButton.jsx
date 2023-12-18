import React from "react";
import { Link } from "react-router-dom";
import styles from "./LogoutButton.module.css";

const LogoutButton = () => {
  return (
    <Link to="./Loggedout" className={styles.logoutButton}>
      Logout
    </Link>
  );
};

export default LogoutButton;
