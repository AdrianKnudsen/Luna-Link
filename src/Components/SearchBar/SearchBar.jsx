import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm("");  // Clear the search input
  };

 
    
  

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <img
        className={styles.searchIcon}
        src="/images/searchicon.svg"
        alt="Search Icon"
        onClick={handleSearch}
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

export default SearchBar;
