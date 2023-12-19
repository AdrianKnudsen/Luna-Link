import styles from "./CategoryFilter.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState(selectedCategory);

  const handleFilterClick = (category) => {
    if (activeCategory === category) {
      setActiveCategory(""); // Clears the active category
      onCategoryChange(""); // Notify parent component
    } else {
      setActiveCategory(category);
      onCategoryChange(category);
    }
  };

  return (
    <div className={styles.categoryFilter}>
      <div className={styles.title}>Popular Categories:</div>
      <div className={styles.categories}>
        {categories.map((category) => (
          <div
            key={category}
            className={`${styles.category} ${
              activeCategory === category ? styles.active : ""
            }`}
            onClick={() => handleFilterClick(category)}
          >
            <span className={styles.labelText}>#{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
