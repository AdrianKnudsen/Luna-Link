import { CreatePost } from "../Components/Post/CreatePost";
import styles from "../Pages/LandingPage.module.css";

export function LandingPage() {
  return (
    <>
      <main className={styles.main}>
        <CreatePost />
      </main>
    </>
  );
}
