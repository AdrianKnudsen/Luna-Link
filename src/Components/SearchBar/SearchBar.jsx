import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./SearchBar.module.css";
import postsArray from "../PostArray/PostsArray";

const SearchBar = ({ onSearch, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const searchResults = postsArray.filter(
      (post) =>
        post.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.post.toLowerCase().includes(searchTerm.toLowerCase())
    );

    onSearch(searchResults);
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
