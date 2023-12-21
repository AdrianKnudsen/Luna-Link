import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import LogoutButton from "./LogoutButton";
import styles from "./DropdownMenu.module.css";

const DropdownMenu = ({ onLogout }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.iconContainer} onClick={toggleDropdown}>
        <span>🔒</span>
      </div>

      {isDropdownOpen && (
        <div className={styles.dropdownContent}>
          <LogoutButton onLogout={onLogout} closeDropdown={closeDropdown} />
        </div>
      )}
    </div>
  );
};

// the prop validation
DropdownMenu.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default DropdownMenu;
