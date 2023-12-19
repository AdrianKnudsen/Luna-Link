import styles from "./CategoryFilter.module.css";
import PropTypes from "prop-types";

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className={styles.categoryFilter}>
      <div className={styles.title}>Popular Categories</div>
      <div className={styles.categories}>
        {categories.map((category) => (
          <label key={category} className={styles.category}>
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={(e) => onCategoryChange(e.target.value)}
              className={styles.radio}
            />
            <span className={styles.labelText}>#{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired, // categories is an array of strings
  selectedCategory: PropTypes.string.isRequired, // selectedCategory is a string
  onCategoryChange: PropTypes.func.isRequired, // onCategoryChange is a function
};

export default CategoryFilter;
