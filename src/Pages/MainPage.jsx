import styles from "./MainPage.module.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Navigate to another page after 3 seconds
      navigate("/Home");
    }, 3000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [navigate]);
  return (
    <div className={styles.mainContainer}>
      <h1>Welcome to Luna Link!</h1>
      <p className={styles.mainText}>You have successfully logged in.</p>
    </div>
  );
};

export default Main;
