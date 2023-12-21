import { Link } from "react-router-dom";
import styles from "./LogoutPage.module.css";

const LogoutPage = () => {
  return (
    <div className={styles.logoutContent}>
      <div className={styles.logoutContainer}>
        <h1>Welcome back!</h1>
        <p>We hope to see you again soon.</p>
        <Link to="/" className={styles.loginLink}>
          Log In
        </Link>
      </div>
    </div>
  );
};

export default LogoutPage;
