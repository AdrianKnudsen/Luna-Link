import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import styles from "./LogoutButton.module.css";

const LogoutButton = ({ onLogout, closeDropdown }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleLogoutClick = () => {
    setIsClicked(true);
    onLogout();
    closeDropdown(); // Close the dropdown when logout button is clicked
  };

  return (
    !isClicked && (
      <Link
        to="/Loggedout"
        className={styles.logoutButton}
        onClick={handleLogoutClick}
      >
        Logout
      </Link>
    )
  );
};

// Add prop validation
LogoutButton.propTypes = {
  onLogout: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
};

export default LogoutButton;
