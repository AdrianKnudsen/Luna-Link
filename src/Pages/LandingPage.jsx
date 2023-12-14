import { CreatePost } from "../Components/Post/CreatePost";
import { Posts } from "../Components/Post/Posts";
import styles from "../Pages/LandingPage.module.css";

export function LandingPage() {
  return (
    <>
      <main className={styles.main}>
        <CreatePost />
        <Posts />
      </main>
    </>
  );
}
