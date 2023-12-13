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
          <div className={styles.additionalContent}>
            <div className={styles.notifyBox}>
              <img src="public/images/notify.svg" alt="Notification" />
            </div>
            <div className={styles.userContent}>
              <img
                className={styles.userimg}
                src="public/images/Memoji Boys 2-1.png"
                alt="User Avatar"
              />
              <h6 className={styles.text}>Emil</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M14 6H6C5.17595 6 4.70557 6.94076 5.2 7.6L9.2 12.9333C9.6 13.4667 10.4 13.4667 10.8 12.9333L14.8 7.6C15.2944 6.94076 14.824 6 14 6Z"
                  fill="#F4F6F8"
                />
              </svg>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
