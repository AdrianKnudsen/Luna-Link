import styles from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar.jsx";

export function Header() {
  const handleSearch = (searchResults) => {
    console.log("Search Results:", searchResults);
  };
  return (
    <>
      <header className={styles.headerBackground}>
        <nav className={styles.navbar}>
          <div className={styles.logoContainer}>
            <img
              className={styles.logo}
              src="public/Luna Link Logo.svg"
              alt="Logo"
            />
          </div>
          <SearchBar onSearch={handleSearch} placeholder="Search here..." />
        </nav>
      </header>
    </>
  );
}
