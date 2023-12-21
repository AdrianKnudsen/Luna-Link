import { CreatePost } from "../Components/Post/CreatePost";
import styles from "../Pages/LandingPage.module.css";
import { useState } from "react";
import CategoryFilter from "../Components/CategoryFilter/CategoryFilter";

export function LandingPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = ["General", "Streaming", "Games"]; // Define your categories

  return (
    <>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <main className={styles.main}>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <CreatePost selectedCategory={selectedCategory} />
      </main>
    </>
  );
}
