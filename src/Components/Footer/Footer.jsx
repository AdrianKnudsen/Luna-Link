import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
     <div className={styles.footerContainer}>
      <ul className={styles.footerLinks}>
        <li className={styles.footerLink}><Link to="/ForumMain" >Forums</Link></li>
        <li className={styles.footerLink}><Link to="/" >Home</Link></li>
        <li className={styles.footerLink}><Link to="/About" >About</Link></li>
      </ul>
      <p className={styles.footerText}>Copyright 2024 Luna Links</p>
     </div>
    </>
  );
}
